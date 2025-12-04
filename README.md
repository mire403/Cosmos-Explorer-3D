# 🌌 Cosmos Explorer 3D

**一个沉浸式互动的 3D 太阳系探索器**

基于 React Three Fiber + Google Gemini，让宇宙真实转动起来！

**🛰️ 拖动旋转 · 滚轮缩放 · 点击星球查看详情 · 一键向 Gemini 询问小知识**，像《星际穿越》的 CASE 一样探索你的星际认知！

## ✨ 项目介绍

**Cosmos Explorer 3D（宇宙探索者 3D）** 是一个可交互的太阳系 3D 模拟网页：

🌍 星球围绕太阳真实轨道运行

🔭 用户可自由旋转、平移、缩放整个场景

🪐 点击任意星球即可查看简介、轨道信息、特点

🤖 一键联动 Google Gemini，自动生成该星球的冷知识 / 趣味问答

🌌 背景是 procedural 星空，沉浸感拉满

它既是一个**3D Web**项目示例，也是一个**AI+可视化的小作品**，适合作为课程作业 / GitHub 作品集 / AI+Web3D Demo。

## 🎬 实际效果图

### 🌞 主界面：可缩放旋转的 3D 太阳系

<div align="center">
  <img src="https://github.com/mire403/Cosmos-Explorer-3D/blob/main/cosmos-explorer-3d/picture/%E4%B8%BB%E9%A1%B5.png">
</div>

### 🪐 星球介绍弹窗

<div align="center">
  <img src="https://github.com/mire403/Cosmos-Explorer-3D/blob/main/cosmos-explorer-3d/picture/%E6%98%9F%E7%90%83.png">
</div>

### 🤖 Gemini 查询加载中

<div align="center">
  <img src="https://github.com/mire403/Cosmos-Explorer-3D/blob/main/cosmos-explorer-3d/picture/%E6%98%9F%E7%90%83%E5%B0%8F%E7%9F%A5%E8%AF%86%E8%AF%A2%E9%97%AE.png">
</div>

### ✨ Gemini 实时生成星球小知识

<div align="center">
  <img src="https://github.com/mire403/Cosmos-Explorer-3D/blob/main/cosmos-explorer-3d/picture/%E6%98%9F%E7%90%83%E5%B0%8F%E7%9F%A5%E8%AF%86%E5%9B%9E%E7%AD%94.png">
</div>

## 🚀 功能亮点（Feature Highlights）

### 🌍 1. 真实运行的太阳系模型

每个星球都有真实的轨道半径、颜色、相对速度

行星持续围绕太阳公转

动画丝滑运行，不会掉帧

### 🎮 2. 全自由度交互

按住拖动：旋转宇宙

滚轮：缩放镜头

右键：平移场景

完全基于**Three.js + R3F**的沉浸式体验

### 📦 3. 星球信息面板（互动 UI）

相对大小

公转速度

距离太阳的 AU 单位

星球介绍文本

极简 UI + 毛玻璃面板效果

### 🤖 4. Google Gemini AI 小知识生成

点击按钮即可向 Gemini 发送请求，自动返回：

✨ 星球趣闻
✨ 冷知识
✨ 拓展解释
✨ 宇宙梗（如果你想）

实现了一个非常自然的 “**AI天文解说员**”。

### 🌌 5. 星空背景 & 环境光渲染

数千颗随机星点

柔光环境渲染增强沉浸感

OrbitControls 体验升级

## 🛠️ 技术栈（Tech Stack）
技术	用途
React + Vite	前端基础框架
React Three Fiber (R3F)	Three.js 的 React 版封装
Three.js	3D 渲染核心引擎
@react-three/drei	辅助封装（轨迹线、控件等）
Google Gemini API	星球小知识生成
TailwindCSS	UI 样式
📂 项目结构
cosmos-explorer-3d/
├── src/
│   ├── components/
│   │   ├── SolarSystem.jsx
│   │   ├── Planet.jsx
│   │   ├── InfoPanel.jsx
│   │   └── OrbitLines.jsx
│   ├── ai/
│   │   └── geminiClient.js
│   ├── data/planets.js
│   └── App.jsx
└── package.json

🏁 启动项目
1. 克隆仓库
git clone https://github.com/yourname/cosmos-explorer-3d.git
cd cosmos-explorer-3d

2. 安装依赖
npm install

3. 配置 Gemini API Key

在根目录创建 .env：

VITE_GEMINI_API_KEY=你的key

4. 运行项目
npm run dev


访问 http://localhost:5173 即可。

🪐 使用方式
动作	操作方式
旋转宇宙	鼠标左键拖动
缩放	滚轮滚动
平移	右键拖动
查看星球信息	点击星球
生成星球知识	点击 “询问 Gemini” 按钮
🎯 Roadmap（你可以未来继续加）

 月球系统 🌕

 小行星带

 行星自转贴图

 更真实的尺寸缩放

 星际旅行模式（点击瞬移）

 全语音版的 AI 宇宙解说

🎉 项目意义

这个项目是：

✨ 一个好玩的可视化作品
✨ 一个 AI × WebGL 的示例
✨ 一个展示你前端能力的亮眼项目
✨ 一个可以不断扩展的天文交互工具

非常适合放在 GitHub 主页顶部 ⭐！

❤️ 贡献

欢迎 Fork & PR，一起来把太阳系做得更震撼！
如果你觉得这个项目不错，帮我点一个 ⭐ 吧！
