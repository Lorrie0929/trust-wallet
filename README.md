# Trust Wallet 安全事件分析工具集

> **安全事件说明**：已识别出影响 Trust Wallet Browser Extension **版本 2.68** 的安全事件。本工具集用于分析该版本与安全版本（2.67）之间的差异，识别潜在的后门、数据泄露和恶意行为。

用于分析 Trust Wallet Chrome 扩展安全事件的工具集，包含代码差异对比、Burp Suite 数据解析和安全规则检测等功能。

## 📁 项目结构

```
trust-wallet/
├── README.md                 # 项目说明文档
├── package.json              # Node.js 依赖配置
├── .gitignore               # Git 忽略规则
│
├── scripts/                  # 工具脚本
│   └── process_diff.js      # 代码差异对比脚本
│
├── tools/                    # 工具目录
│   └── bp_decoder/          # Burp Suite 解码器 (Git Submodule)
│       ├── burp_decoder.py  # Python 解码脚本
│       └── README.md        # 解码器使用说明
│
├── config/                   # 配置文件
│   └── audit_backdoor.yaml  # Semgrep 安全检测规则
│
└── data/                     # 数据目录
    ├── extensions/          # Chrome 扩展版本（输入）
    ├── formatter/           # 格式化后的代码（输出）
    └── diff/                # 差异对比结果（输出）
```

## ⚠️ 安全事件概述
On December 25, 2025, Trust Wallet experienced a security breach in its browser extension v2.68.0. The exploit involved a backdoor method that resulted in the theft of approximately $7M in user funds.

**受影响版本**：Trust Wallet Browser Extension **2.68**  
**安全版本**：2.67（作为对比基准）

## 🚀 快速开始

### 环境要求

- Node.js >= 14
- Python 3.x
- npm 或 yarn

### 安装依赖

```bash
# 安装 Node.js 依赖
npm install

# 初始化 Git Submodule（bp_decoder）
git submodule update --init --recursive
```

**注意**：`tools/bp_decoder` 是一个独立的 git 仓库，作为 submodule 引入。首次克隆项目后需要初始化 submodule。详见 [SETUP_SUBMODULE.md](SETUP_SUBMODULE.md)。

## Analysis

None.

The Skeleton section only shows example and more information can be viewed in References.

## References
- [Root cause](https://x.com/0xakinator/status/2004297673067704651)
- [More information about Attacker can be viewed on Arkham](https://intel.arkm.com/explorer/entity/b6c0b01f-d763-4148-ab61-b58ddd559ba1)