// 合并脚本：反混淆 -> 美化 -> diff -> 清理噪音
// 工作流：
// 1. 反混淆：使用 terser 格式化混淆后的代码
// 2. 美化：使用 js-beautify 进一步美化代码, 输出到xxx_formatter文件夹下
// 3. 对两个formatter文件夹下的文件进行diff
// 4. 清理diff中的噪音
//
// 使用方法：
//   node process_diff.js <dir1> <dir2>
//   或
//   node process_diff.js --dir1 <dir1> --dir2 <dir2>
//   或
//   node process_diff.js (使用默认目录)

const beautify = require('js-beautify').js;
const { minify } = require('terser');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawnSync } = require('child_process');

// 显示帮助信息
function showHelp() {
  console.log(`
使用方法:
  node process_diff.js [选项] [目录1] [目录2]

选项:
  --dir1 <目录>    第一个要比较的目录
  --dir2 <目录>    第二个要比较的目录
  --ratio <阈值>   相似度阈值（0~1, 默认 0.7）
  --strict        严格模式（规则1.5不归一化参数名）
  --help, -h       显示此帮助信息

示例:
  # 使用位置参数
  node process_diff.js folder1 folder2
  
  # 使用命名参数
  node process_diff.js --dir1 folder1 --dir2 folder2 --ratio 0.8 --strict
  
  # 使用绝对路径
  node process_diff.js /path/to/folder1 /path/to/folder2
  
  # 使用默认目录（如果未指定参数）
  node process_diff.js

说明:
  - 如果目录路径是相对路径, 将相对于脚本所在目录解析
  - 工作流程: 反混淆 -> 美化 -> diff -> 清理噪音
  - 脚本会创建 formatter 目录和 diff 输出目录
  - formatter 目录命名格式: <目录名>_formatter
  - diff 输出目录命名格式: <目录2名>_<目录1名>_diff
`);
}

// 解析命令行参数
function parseArgs() {
  const args = process.argv.slice(2);
  
  // 检查帮助选项
  if (args.includes('--help') || args.includes('-h')) {
    showHelp();
    process.exit(0);
  }
  
  // 解析相似度阈值
  let ratio = 0.7;
  if (args.includes('--ratio')) {
    const ratioIndex = args.indexOf('--ratio');
    const rawRatio = args[ratioIndex + 1];
    const parsed = Number(rawRatio);
    if (!Number.isFinite(parsed) || parsed < 0 || parsed > 1) {
      console.error('错误: --ratio 需要是 0~1 之间的数字');
      console.error('使用 --help 查看帮助信息');
      process.exit(1);
    }
    ratio = parsed;
  }
  
  // 严格模式开关（规则1.5不归一化参数名）
  const strictMode = args.includes('--strict');
  
  // 如果使用 --dir1 和 --dir2 格式
  if (args.includes('--dir1') && args.includes('--dir2')) {
    const dir1Index = args.indexOf('--dir1');
    const dir2Index = args.indexOf('--dir2');
    const dir1 = args[dir1Index + 1];
    const dir2 = args[dir2Index + 1];
    
    if (!dir1 || !dir2) {
      console.error('错误: --dir1 和 --dir2 需要指定目录路径');
      console.error('使用 --help 查看帮助信息');
      process.exit(1);
    }
    
    return {
      dir1: path.isAbsolute(dir1) ? dir1 : path.resolve(__dirname, dir1),
      dir2: path.isAbsolute(dir2) ? dir2 : path.resolve(__dirname, dir2),
      ratio,
      strictMode,
    };
  }
  
  // 如果直接提供两个位置参数
  if (args.length >= 2) {
    return {
      dir1: path.isAbsolute(args[0]) ? args[0] : path.resolve(__dirname, args[0]),
      dir2: path.isAbsolute(args[1]) ? args[1] : path.resolve(__dirname, args[1]),
      ratio,
      strictMode,
    };
  }
  
  // 默认值
  return {
    dir1: path.join(__dirname, '..', 'data', 'extensions', 'egjidjbpglichdcondbcbdnbeeppgdph_2.67'),
    dir2: path.join(__dirname, '..', 'data', 'extensions', 'egjidjbpglichdcondbcbdnbeeppgdph_2.68'),
    ratio,
    strictMode,
  };
}

// 解析参数并设置配置
const { dir1, dir2, ratio: similarityThreshold, strictMode } = parseArgs();
const dir1Name = path.basename(dir1);
const dir2Name = path.basename(dir2);

const dir1Formatter = path.join(__dirname, '..', 'data', 'formatter', `${dir1Name}_formatter`);
const dir2Formatter = path.join(__dirname, '..', 'data', 'formatter', `${dir2Name}_formatter`);
const outDir = path.join(__dirname, '..', 'data', 'diff', `${dir2Name}_${dir1Name}_diff`);

// js-beautify 配置
const beautifyOptions = {
  indent_size: 2,
  indent_char: ' ',
  max_preserve_newlines: 2,
  preserve_newlines: true,
  keep_array_indentation: false,
  break_chained_methods: false,
  indent_scripts: 'normal',
  brace_style: 'collapse',
  space_before_conditional: true,
  unindent_chained_methods: false,
  operator_position: 'before-newline',
  end_with_newline: true,
  wrap_line_length: 0,
  e4x: false,
  indent_inner_html: false,
  indent_empty_lines: false,
  jslint_happy: false,
  space_after_anon_function: false,
  space_after_named_function: false,
  space_before_named_function: false,
  space_in_paren: false,
  space_in_empty_paren: false,
  eol: '\n',
  indent_with_tabs: false,
  disabled: false,
  default_indent_level: 0,
  comma_first: false,
  indent_level: 0,
  unescape_strings: false,
};

// ==================== 工具函数 ====================

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

// 递归收集目录下的 .js 文件（相对路径）
function collectJsFiles(root) {
  const files = [];
  function walk(current, relBase) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      const abs = path.join(current, entry.name);
      const rel = path.join(relBase, entry.name);
      if (entry.isDirectory()) {
        walk(abs, rel);
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        files.push(rel);
      }
    }
  }
  walk(root, '');
  return files;
}

// 收集目录下的 manifest.json 文件（相对路径）
function collectManifestFiles(root) {
  const files = [];
  function walk(current, relBase) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      const abs = path.join(current, entry.name);
      const rel = path.join(relBase, entry.name);
      if (entry.isDirectory()) {
        walk(abs, rel);
      } else if (entry.isFile() && entry.name === 'manifest.json') {
        files.push(rel);
      }
    }
  }
  walk(root, '');
  return files;
}

// ==================== 步骤1: 反混淆和美化文件并输出到formatter目录 ====================

// Terser 反混淆配置 - 标准模式
const terserDeobfuscateOptionsStandard = {
  compress: false,  // 禁用压缩
  mangle: false,    // 禁用混淆
  format: {
    comments: true,  // 保留注释
    beautify: true,  // 启用美化
  },
  sourceMap: false,
  parse: {
    ecma: 2020,
  },
};

// Terser 反混淆配置 - 宽松模式（用于有语法错误的文件）
const terserDeobfuscateOptionsLoose = {
  compress: false,  // 禁用压缩
  mangle: false,    // 禁用混淆
  format: {
    comments: true,
    beautify: true,
  },
  sourceMap: false,
  parse: {
    ecma: 2020,
  },
};

// 反混淆文件
async function deobfuscateFile(code, filePath = '') {
  try {
    // 先尝试标准模式
    let result = await minify(code, terserDeobfuscateOptionsStandard);
    
    // 如果标准模式失败, 尝试宽松模式
    if (result.error) {
      result = await minify(code, terserDeobfuscateOptionsLoose);
    }
    
    if (result.error) {
      // 如果反混淆失败, 静默返回原代码（不输出警告, 因为很多文件可能无法反混淆）
      return code;
    }
    
    if (result.code) {
      return result.code;
    } else {
      // 没有输出代码, 返回原代码
      return code;
    }
  } catch (error) {
    // 如果出错, 静默返回原代码
    // 常见的错误如 "Unterminated string constant" 等, 直接使用原代码即可
    return code;
  }
}

async function beautifyFile(srcPath, destPath, onDeobfuscateFailed = null) {
  try {
    const code = fs.readFileSync(srcPath, 'utf8');
    
    // 跳过空文件或非常小的文件
    if (code.trim().length < 10) {
      console.log(`跳过空文件: ${srcPath}`);
      return false;
    }
    
    // 步骤1: 反混淆
    const originalCode = code;
    let deobfuscatedCode = await deobfuscateFile(code, srcPath);
    
    // 检查是否反混淆成功（如果返回的代码和原代码相同, 说明反混淆失败）
    const deobfuscateFailed = deobfuscatedCode === originalCode;
    if (deobfuscateFailed && onDeobfuscateFailed) {
      onDeobfuscateFailed(true);
    }
    
    // 步骤2: 使用 js-beautify 进一步美化
    const beautified = beautify(deobfuscatedCode, beautifyOptions);
    
    if (beautified) {
      ensureDir(path.dirname(destPath));
      fs.writeFileSync(destPath, beautified, 'utf8');
      return true;
    } else {
      console.warn(`警告: ${srcPath} 格式化后没有输出`);
      return false;
    }
  } catch (error) {
    console.error(`处理文件 ${srcPath} 时出错:`, error.message);
    return false;
  }
}

// 美化 JSON 文件（用于 manifest.json）
function beautifyJsonFile(srcPath, destPath) {
  try {
    const content = fs.readFileSync(srcPath, 'utf8');
    
    // 跳过空文件
    if (content.trim().length === 0) {
      console.log(`跳过空文件: ${srcPath}`);
      return false;
    }
    
    // 解析并格式化 JSON
    const json = JSON.parse(content);
    const beautified = JSON.stringify(json, null, 2) + '\n';
    
    ensureDir(path.dirname(destPath));
    fs.writeFileSync(destPath, beautified, 'utf8');
    return true;
  } catch (error) {
    console.error(`处理 JSON 文件 ${srcPath} 时出错:`, error.message);
    return false;
  }
}

async function beautifyDirectory(srcDir, destDir) {
  console.log(`\n[步骤1] 开始反混淆和美化目录: ${srcDir} -> ${destDir}`);
  
  if (!fs.existsSync(srcDir)) {
    console.error(`源目录不存在: ${srcDir}`);
    return;
  }
  
  // 清理目标目录
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
  }
  ensureDir(destDir);
  
  const jsFiles = collectJsFiles(srcDir);
  const manifestFiles = collectManifestFiles(srcDir);
  console.log(`找到 ${jsFiles.length} 个 JavaScript 文件, ${manifestFiles.length} 个 manifest.json 文件`);
  
  let successCount = 0;
  let failCount = 0;
  let deobfuscateFailedCount = 0;
  
  // 处理 JavaScript 文件
  for (const rel of jsFiles) {
    const srcPath = path.join(srcDir, rel);
    const destPath = path.join(destDir, rel);
    
    const result = await beautifyFile(srcPath, destPath, (failed) => {
      if (failed) deobfuscateFailedCount++;
    });
    
    if (result) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  // 处理 manifest.json 文件
  for (const rel of manifestFiles) {
    const srcPath = path.join(srcDir, rel);
    const destPath = path.join(destDir, rel);
    
    const result = beautifyJsonFile(srcPath, destPath);
    
    if (result) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  console.log(`反混淆和美化完成: 成功 ${successCount}, 失败 ${failCount}`);
}

// ==================== 步骤2: 对formatter目录进行diff ====================

function hashFile(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('md5');
    const stream = fs.createReadStream(filePath);
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
}

// 统计diff内容中的hunk数量
function countHunks(diffContent) {
  if (!diffContent) return 0;
  const lines = diffContent.split('\n');
  let hunkCount = 0;
  for (const line of lines) {
    if (line.startsWith('@@')) {
      hunkCount++;
    }
  }
  return hunkCount;
}

async function performDiff() {
  console.log(`\n[步骤2] 开始对formatter目录进行diff`);
  
  ensureDir(outDir);
  
  const jsSet = new Set([
    ...collectJsFiles(dir1Formatter),
    ...collectJsFiles(dir2Formatter),
  ]);
  
  const manifestSet = new Set([
    ...collectManifestFiles(dir1Formatter),
    ...collectManifestFiles(dir2Formatter),
  ]);
  
  const set = new Set([...jsSet, ...manifestSet]);
  
  let sameCount = 0;
  let diffCount = 0;
  let missingOnly = 0;
  let totalHunks = 0;
  const onlyInDir2 = [];
  const onlyInDir1 = [];
  
  for (const rel of Array.from(set).sort()) {
    const oldPath = path.join(dir1Formatter, rel);
    const newPath = path.join(dir2Formatter, rel);
    const outPath = path.join(outDir, `${rel}.diff`);
    ensureDir(path.dirname(outPath));
    
    const existsOld = fs.existsSync(oldPath);
    const existsNew = fs.existsSync(newPath);
    
    if (!existsOld || !existsNew) {
      if (!existsOld) {
        onlyInDir2.push(rel);
      } else {
        onlyInDir1.push(rel);
      }
      missingOnly += 1;
      continue;
    }
    
    const [hashOld, hashNew] = await Promise.all([
      hashFile(oldPath),
      hashFile(newPath),
    ]);
    if (hashOld === hashNew) {
      sameCount += 1;
      continue;
    }
    
    const res = spawnSync('diff', ['-u', oldPath, newPath], {
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 * 200, // 200MB buffer for large files
    });
    
    if (res.status === 0) {
      sameCount += 1;
      continue;
    }
    
    if (res.error) {
      fs.writeFileSync(outPath, `diff error: ${res.error.message}\n`, 'utf8');
      diffCount += 1;
      continue;
    }
    
    const diffContent = res.stdout || res.stderr || '';
    fs.writeFileSync(outPath, diffContent, 'utf8');
    diffCount += 1;
    
  }
  
  console.log(`Diff完成。文件统计: 相同 ${sameCount}, 差异 ${diffCount}, 仅单侧存在 ${missingOnly}, 总计 ${set.size}`);
  console.log(`Diff 输出目录: ${outDir}`);
  
  // 输出缺失文件列表为 Markdown
  const lines = ['# Missing Files', '', `## Only in ${dir2Name}`, ''];
  if (onlyInDir2.length === 0) {
    lines.push('- 无');
  } else {
    for (const rel of onlyInDir2) {
      lines.push(`- ${rel}`);
    }
  }
  lines.push('', `## Only in ${dir1Name}`, '');
  if (onlyInDir1.length === 0) {
    lines.push('- 无');
  } else {
    for (const rel of onlyInDir1) {
      lines.push(`- ${rel}`);
    }
  }
  fs.writeFileSync(path.join(outDir, 'missing_only.md'), lines.join('\n'), 'utf8');
  console.log(`缺失列表: ${path.join(outDir, 'missing_only.md')}`);
}

// ==================== 步骤3: 清理diff噪音 ====================

// 归一化：去掉行首 diff 标识, 标识符替换为 X, 压缩空白
// 注意：只归一化 module id 的数字；参数列表只保留数字，其他标识符归一化
function normalizeLine(line) {
  let body = line.replace(/^[-+ ]/, '');
  // 仅归一化模块 id（如: "  18109: (m, p, t) => {")
  body = body.replace(/^(\s*)\d+:/, '$1X:');
  
  // 先提取并保护函数参数列表（参数只保留数字，其他标识符归一化）
  const paramPatterns = [];
  let paramIndex = 0;
  
  // 匹配函数定义中的参数列表：function name(params) 或 (params) => 或 name(params) =>
  const functionPatterns = [
    /function\s+\w*\s*\(([^)]*)\)/g,  // function name(params)
    /\(([^)]*)\)\s*=>/g,              // (params) =>
    /\w+\s*\(([^)]*)\)\s*=>/g,       // name(params) =>
    /=\s*function\s*\(([^)]*)\)/g,   // = function(params)
  ];
  
  let protectedBody = body;
  for (const pattern of functionPatterns) {
    protectedBody = protectedBody.replace(pattern, (match, params) => {
      // 参数列表归一化：保留数字，其它标识符统一替换为 X
      const placeholder = `__PARAM_${paramIndex}__`;
      const normalizedParams = params
        .trim()
        .replace(/\b[a-zA-Z_$][\w$]*\b/g, 'X');
      paramPatterns.push({ placeholder, params: normalizedParams });
      paramIndex++;
      return match.replace(params, placeholder);
    });
  }
  
  // 替换所有标识符为 X（但跳过参数占位符）
  let normalized = protectedBody.replace(/\b[a-zA-Z_$][\w$]*\b/g, (match) => {
    // 如果是参数占位符, 跳过
    if (match.startsWith('__PARAM_') && match.endsWith('__')) {
      return match;
    }
    return 'X';
  });
  
  // 恢复参数列表（已归一化）
  for (const { placeholder, params } of paramPatterns) {
    normalized = normalized.replace(placeholder, params);
  }
  
  return normalized
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeLineForRename(line, { normalizeParams = true } = {}) {
  let body = line.replace(/^[-+ ]/, '');
  body = body.replace(/^(\s*)\d+:/, '$1X:');
  const paramPatterns = [];
  let paramIndex = 0;
  const functionPatterns = [
    /function\s+\w*\s*\(([^)]*)\)/g,
    /\(([^)]*)\)\s*=>/g,
    /\w+\s*\(([^)]*)\)\s*=>/g,
    /=\s*function\s*\(([^)]*)\)/g,
  ];
  let protectedBody = body;
  for (const pattern of functionPatterns) {
    protectedBody = protectedBody.replace(pattern, (match, params) => {
      const placeholder = `__PARAM_${paramIndex}__`;
      const normalizedParams = normalizeParams
        ? params.trim().replace(/[$A-Za-z_][0-9A-Za-z_$]*/g, 'X')
        : params.trim();
      paramPatterns.push({ placeholder, params: normalizedParams });
      paramIndex++;
      return match.replace(params, placeholder);
    });
  }
  let normalized = protectedBody.replace(/[$A-Za-z_][0-9A-Za-z_$]*/g, (match) => {
    if (match.startsWith('__PARAM_') && match.endsWith('__')) {
      return match;
    }
    return 'X';
  });
  for (const { placeholder, params } of paramPatterns) {
    normalized = normalized.replace(placeholder, params);
  }
  return normalized
    .replace(/\s+/g, ' ')
    .trim();
}

function similarityRatio(removed, added) {
  // 多重集方式计算重复度
  const freq = new Map();
  for (const s of removed) freq.set(s, (freq.get(s) || 0) + 1);
  let common = 0;
  for (const s of added) {
    const c = freq.get(s) || 0;
    if (c > 0) {
      common += 1;
      freq.set(s, c - 1);
    }
  }
  return common / Math.max(removed.length, added.length);
}

function isTrivialHunk(lines, hunkHeader) {
  const removed = [];
  const added = [];
  for (const line of lines) {
    if (line.startsWith('-')) removed.push(line);
    else if (line.startsWith('+')) added.push(line);
  }
  if (removed.length === 0 || added.length === 0) return false;
  
  // 规则0：新增行数明显多于删除行数, 认为是新增逻辑, 不做降噪
  if (added.length - removed.length >= 3 && added.length >= Math.ceil(removed.length * 1.25)) {
    return false;
  }
  
  const normRemovedArr = removed.map(normalizeLine);
  const normAddedArr = added.map(normalizeLine);
  
  // 规则1：严格一致（归一化后完全相同且行数相同）
  if (removed.length === added.length && normRemovedArr.join('\n') === normAddedArr.join('\n')) {
    return true;
  }
  
  // 规则1.5：行数相同且仅标识符/调用名变化
  if (removed.length === added.length) {
    const renameRemoved = removed.map((line) =>
      normalizeLineForRename(line, { normalizeParams: !strictMode })
    );
    const renameAdded = added.map((line) =>
      normalizeLineForRename(line, { normalizeParams: !strictMode })
    );
    const renameRatio = similarityRatio(renameRemoved, renameAdded);
    if (renameRatio >= 0.8) {
      return true;
    }
  }
  
  // 规则2：相似度阈值（重复率 >= 阈值）, 可用于忽略行号变化的平移/微调
  const ratio = similarityRatio(normRemovedArr, normAddedArr);
  if (ratio >= similarityThreshold) {
    return true;
  }
  
  return false;
}

function processDiffFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const out = [];
  let idx = 0;
  
  // 头部保留
  if (lines[idx]?.startsWith('---')) out.push(lines[idx++]);
  if (lines[idx]?.startsWith('+++')) out.push(lines[idx++]);
  
  let changed = false;
  let deletedBlocks = 0;
  let totalBlocks = 0;
  
  while (idx < lines.length) {
    if (!lines[idx].startsWith('@@')) {
      idx++;
      continue;
    }
    const hunkHeader = lines[idx++];
    const hunkLines = [];
    while (idx < lines.length && !lines[idx].startsWith('@@')) {
      hunkLines.push(lines[idx]);
      idx++;
    }
    
    // 按变更块（连续的 +/- 行）细分 hunk
    const keptHunkLines = [];
    let pendingBlock = [];
    let blockIndex = 0;
    let hasChange = false;
    
    const flushBlock = () => {
      if (pendingBlock.length === 0) return;
      blockIndex += 1;
      totalBlocks += 1;
      if (isTrivialHunk(pendingBlock, hunkHeader)) {
        changed = true;
        deletedBlocks += 1;
      } else {
        hasChange = true;
        keptHunkLines.push(...pendingBlock);
      }
      pendingBlock = [];
    };
    
    for (const line of hunkLines) {
      const isChangeLine = line.startsWith('-') || line.startsWith('+');
      const isNoNewlineLine = line.startsWith('\\');
      if (isChangeLine || (isNoNewlineLine && pendingBlock.length > 0)) {
        pendingBlock.push(line);
        continue;
      }
      flushBlock();
      keptHunkLines.push(line);
    }
    flushBlock();
    
    if (!hasChange) {
      changed = true; // 丢弃该 hunk
      continue;
    }
    out.push(hunkHeader);
    for (const line of keptHunkLines) out.push(line);
  }
  
  // 如果全部被丢弃, 删除文件
  if (out.length === 0) {
    fs.unlinkSync(filePath);
    return { deleted: true, changed, deletedBlocks, totalBlocks };
  }
  
  if (changed) {
    fs.writeFileSync(filePath, out.join('\n'), 'utf8');
    return { deleted: false, changed: true, deletedBlocks, totalBlocks };
  }
  return { deleted: false, changed: false, deletedBlocks, totalBlocks };
}

function cleanDiffNoise() {
  console.log(`\n[步骤3] 开始清理diff噪音`);
  
  const files = fs.readdirSync(outDir).filter(f => f.endsWith('.diff'));
  let deleted = 0;
  let modified = 0;
  let totalDeletedBlocks = 0;
  let totalBlocksBefore = 0;
  
  for (const f of files) {
    const fp = path.join(outDir, f);
    const res = processDiffFile(fp);
    if (res.deleted) {
      deleted++;
      totalDeletedBlocks += res.totalBlocks;
      totalBlocksBefore += res.totalBlocks;
    } else if (res.changed) {
      modified++;
      totalDeletedBlocks += res.deletedBlocks;
      totalBlocksBefore += res.totalBlocks;
    } else {
      totalBlocksBefore += res.totalBlocks;
    }
  }
  
  // console.log(`清理完成, 修改 ${modified} 个 diff, 删除 ${deleted} 个 diff。`);
  const keptBlocks = totalBlocksBefore - totalDeletedBlocks;
  const keptRatio = totalBlocksBefore > 0 ? (keptBlocks / totalBlocksBefore) * 100 : 0;
  console.log(`Block统计: 清理前总block数 ${totalBlocksBefore}, 删除 ${totalDeletedBlocks} 个block, 保留 ${keptBlocks} 个block（${keptRatio.toFixed(2)}%）`);
}

// ==================== 主函数 ====================

async function main() {
  console.log('开始执行完整工作流...\n');
  
  // 显示配置信息
  console.log(`配置信息:`);
  console.log(`  目录1: ${dir1}`);
  console.log(`  目录2: ${dir2}`);
  console.log(`  输出目录: ${outDir}`);
  console.log(`  相似度阈值: ${similarityThreshold}`);
  console.log(`  严格模式: ${strictMode}\n`);
  
  // 验证目录是否存在
  if (!fs.existsSync(dir1)) {
    console.error(`错误: 目录不存在: ${dir1}`);
    process.exit(1);
  }
  if (!fs.existsSync(dir2)) {
    console.error(`错误: 目录不存在: ${dir2}`);
    process.exit(1);
  }
  
  try {
    // 步骤1: 美化文件并输出到formatter目录
    const hasFormatter = (p) => fs.existsSync(p) && fs.readdirSync(p).length > 0;
    if (hasFormatter(dir1Formatter)) {
      console.log(`[步骤1] 已存在formatter目录, 跳过: ${dir1Formatter}`);
    } else {
      await beautifyDirectory(dir1, dir1Formatter);
    }
    if (hasFormatter(dir2Formatter)) {
      console.log(`[步骤1] 已存在formatter目录, 跳过: ${dir2Formatter}`);
    } else {
      await beautifyDirectory(dir2, dir2Formatter);
    }
    
    // 步骤2: 对formatter目录进行diff
    await performDiff();
    
    // 步骤3: 清理diff噪音
    cleanDiffNoise();
    
    console.log('\n✓ 所有步骤完成！');
  } catch (err) {
    console.error('运行出错:', err);
    process.exit(1);
  }
}

main();
