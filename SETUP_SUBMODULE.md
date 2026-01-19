# 设置 bp_decoder 为 Git Submodule

由于 `tools/bp_decoder` 已经是一个独立的 git 仓库，需要将其转换为 git submodule。

## 当前状态

`.gitmodules` 文件已存在，但 submodule 可能未完全初始化。检查状态：

```bash
git submodule status
```

如果看到 `-` 前缀，说明 submodule 未初始化。

## 操作步骤

### 方法 1：初始化现有的 submodule（推荐）

如果 `.gitmodules` 已存在但 submodule 未初始化：

```bash
cd /Users/lorrie/Downloads/trust-wallet

# 初始化 submodule
git submodule update --init --recursive tools/bp_decoder

# 或者初始化所有 submodule
git submodule update --init --recursive

# 验证状态
git submodule status
```

### 方法 2：如果 bp_decoder 还未被主仓库跟踪

```bash
# 1. 从主仓库中移除 bp_decoder（如果已被跟踪）
cd /Users/lorrie/Downloads/trust-wallet
git rm -r --cached tools/bp_decoder 2>/dev/null || true

# 2. 删除现有的 bp_decoder 目录
rm -rf tools/bp_decoder

# 3. 添加为 submodule
git submodule add ssh://git@git.blocksec.cn:8832/blocksecteam/audit/indicent_analysis/incident_tools/bp_decoder.git tools/bp_decoder

# 4. 提交更改
git add .gitmodules tools/bp_decoder
git commit -m "Add bp_decoder as git submodule"
```

### 方法 2：如果 bp_decoder 已经在主仓库中

```bash
# 1. 先备份（可选）
cp -r tools/bp_decoder tools/bp_decoder.backup

# 2. 从 git 索引中移除，但保留文件
cd /Users/lorrie/Downloads/trust-wallet
git rm -r --cached tools/bp_decoder

# 3. 删除 .git 目录（保留其他文件）
rm -rf tools/bp_decoder/.git

# 4. 添加为 submodule
git submodule add ssh://git@git.blocksec.cn:8832/blocksecteam/audit/indicent_analysis/incident_tools/bp_decoder.git tools/bp_decoder

# 5. 如果文件有差异，可能需要合并或覆盖
# 检查差异
git diff tools/bp_decoder

# 6. 提交更改
git add .gitmodules tools/bp_decoder
git commit -m "Convert bp_decoder to git submodule"
```

## 验证

```bash
# 检查 submodule 状态
git submodule status

# 正常状态应该看到类似输出（没有前导 - 号）：
#  210e315567330beba8bf2a4ab0ac2adfa67f2a44 tools/bp_decoder (heads/main)

# 如果看到前导 - 号，说明未初始化：
#  -210e315567330beba8bf2a4ab0ac2adfa67f2a44 tools/bp_decoder
```

## 故障排除

### 如果 submodule 目录存在但未正确初始化

```bash
# 1. 检查 .gitmodules 文件是否存在
cat .gitmodules

# 2. 如果存在但 submodule 未初始化，执行：
git submodule update --init tools/bp_decoder

# 3. 如果仍有问题，可能需要重新添加：
git submodule deinit -f tools/bp_decoder
rm -rf .git/modules/tools/bp_decoder
git submodule add ssh://git@git.blocksec.cn:8832/blocksecteam/audit/indicent_analysis/incident_tools/bp_decoder.git tools/bp_decoder
```

## 后续使用

### 克隆包含 submodule 的仓库

```bash
# 方法 1：克隆时同时初始化 submodule
git clone --recurse-submodules <repository-url>

# 方法 2：克隆后初始化
git clone <repository-url>
cd trust-wallet
git submodule update --init --recursive
```

### 更新 submodule

```bash
# 更新到最新版本
cd tools/bp_decoder
git pull origin main
cd ../..

# 或者在主仓库根目录
git submodule update --remote tools/bp_decoder
```

## 注意事项

- `.gitmodules` 文件会被创建，包含 submodule 配置
- `tools/bp_decoder` 目录将指向独立的 git 仓库
- 确保远程仓库 URL 可访问：`ssh://git@git.blocksec.cn:8832/blocksecteam/audit/indicent_analysis/incident_tools/bp_decoder.git`
