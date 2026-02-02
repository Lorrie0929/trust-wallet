# Trust Wallet 安全审计工具集

针对 Trust Wallet 浏览器扩展 v2.68 供应链攻击事件的分析工具。

## 背景

2025 年 12 月 26 日，Trust Wallet 浏览器扩展 v2.68 被确认存在后门，导致用户资金被盗。本项目提供差异分析、后门检测和流量分析工具，用于定位恶意代码。

## 工具

| 工具 | 说明 | 用法 |
|------|------|------|
| `scripts/process_diff.js` | 代码差异分析（反混淆+降噪） | `npm run diff` |
| `config/audit_backdoor.yaml` | Semgrep 后门检测规则 | `semgrep --config config/audit_backdoor.yaml <目录>` |
| `tools/bp_decoder/` | Burp 流量解码器 | `npm run decoder` |

## 快速开始

```bash
# 安装依赖
npm install

# 对两个版本进行差异分析
npm run diff -- --dir1 <安全版本> --dir2 <可疑版本>

# 使用 Semgrep 扫描
semgrep --config config/audit_backdoor.yaml <目标目录>

# 解析 Burp 流量
python3 tools/bp_decoder/burp_decoder.py --input <文件> --output decoded.jsonl
```

## 关键发现

| 项目 | 内容 |
|------|------|
| 恶意域名 | `api.metrics-trustwallet.com` |
| 触发点 | 解锁钱包时（`event: "Unlock"`） |
| 异常载荷 | 请求体中异常插入 `errorMessage` 字段 |
| 可疑代码 | `yield G.YW.emit()` |

## 分析方法

1. **静态分析**：元数据比对 → 反混淆降噪 diff → 大模型初筛
2. **动态分析**：流量差异对比 → 运行时断点调试

详细分析见 [analysis/Vulnerability location analysis.md](analysis/Vulnerability%20location%20analysis.md)

## References
- [Root cause](https://x.com/0xakinator/status/2004297673067704651)
- [More information about Attacker can be viewed on Arkham](https://intel.arkm.com/explorer/entity/b6c0b01f-d763-4148-ab61-b58ddd559ba1)