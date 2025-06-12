# 🌟 赛博朋克风格个人网站

一个现代化的赛博朋克风格个人网站，专为计算机科学专业大学生设计，展示项目作品集、技能和个人信息。

## ✨ 特色功能

### 🎨 视觉特效

- **故障文本动画** - 赛博朋克风格的文字故障效果
- **全息投影效果** - 科幻感的全息文字和元素
- **数字雨背景** - 矩阵风格的动态背景
- **扫描线效果** - 未来科技感的扫描动画
- **霓虹发光** - 炫酷的霓虹边框和阴影
- **能量脉冲** - 动态的能量流动效果
- **电路板纹理** - 科技感的背景图案

### 🌈 配色方案

- **主色调**: 霓虹绿 (#00ff9f)
- **次要色**: 霓虹粉 (#ff0080)
- **强调色**: 霓虹蓝 (#00d4ff)
- **背景色**: 深黑色调营造科幻氛围

### 📱 页面结构

1. **首页** - 英雄区域、技术栈展示、精选项目
2. **关于我** - 个人介绍、教育经历、兴趣爱好、价值理念
3. **技能展示** - 技术技能、工具使用、学习路径、证书成就
4. **项目展示** - 项目作品集、分类筛选、详细介绍
5. **联系我** - 联系方式、联系表单、社交媒体、常见问题

### 🔥 技术亮点

- **Vue 3 + TypeScript** - 现代前端框架
- **Vue Motion** - 流畅的动画和过渡效果
- **Tailwind CSS v4** - 现代化CSS框架
- **响应式设计** - 完美适配各种设备
- **SEO优化** - 搜索引擎友好
- **性能优化** - 快速加载和流畅交互

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发运行

```bash
npm run dev
```

### 构建部署

```bash
npm run build
```

## 📁 项目结构

```
src/
├── assets/
│   ├── main.css          # 主样式文件
│   ├── cyber-effects.css # 赛博朋克特效样式
│   └── base.css          # 基础样式
├── components/
│   └── LoadingSpinner.vue
├── views/
│   ├── HomeView.vue      # 首页
│   ├── AboutView.vue     # 关于页面
│   ├── SkillsView.vue    # 技能页面
│   ├── ProjectsView.vue  # 项目页面
│   └── ContactView.vue   # 联系页面
├── router/
│   └── index.ts          # 路由配置
└── stores/
    └── counter.ts        # 状态管理
```

## 🎯 特效类使用指南

### 基础特效类

- `.glitch-text` - 故障文本效果
- `.hologram-text` - 全息投影效果
- `.energy-pulse` - 能量脉冲效果
- `.scan-lines` - 扫描线效果
- `.hud-border` - HUD界面边框
- `.cyber-interference` - 故障干扰效果

### 使用示例

```vue
<h1 class="glitch-text" data-text="标题文字">标题文字</h1>
<div class="energy-pulse hud-border">内容区域</div>
<span class="hologram-text">全息文字</span>
```

## 🔧 自定义配置

### 修改主色调

在 `src/assets/main.css` 中更新CSS变量：

```css
:root {
  --cyber-primary: #00ff9f; /* 主色调 */
  --cyber-secondary: #ff0080; /* 次要色 */
  --cyber-accent: #00d4ff; /* 强调色 */
}
```

### 添加新特效

在 `src/assets/cyber-effects.css` 中添加自定义动画和特效。

## 📱 响应式设计

网站完美适配以下设备：

- 📱 手机 (320px+)
- 📟 平板 (768px+)
- 💻 笔记本 (1024px+)
- 🖥️ 桌面 (1200px+)

## 🎨 自定义内容

### 个人信息

更新以下文件中的个人信息：

- `src/views/HomeView.vue` - 首页介绍
- `src/views/AboutView.vue` - 个人详情
- `src/views/SkillsView.vue` - 技能信息
- `src/views/ProjectsView.vue` - 项目作品
- `src/views/ContactView.vue` - 联系方式

### SEO设置

在 `index.html` 中更新元标签和标题。

## 🌟 特色组件

### 动画导航栏

- 滚动时的玻璃态效果
- 霓虹发光边框
- 平滑的页面过渡

### 代码动画块

- 打字机效果
- 语法高亮
- 扫描线动画

### 交互式项目卡片

- 3D悬停效果
- 渐变叠加层
- 动态标签

## 🚀 部署建议

### Vercel

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
# 将 dist 文件夹拖拽到 Netlify
```

### GitHub Pages

```bash
npm run build
# 将 dist 内容推送到 gh-pages 分支
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License - 可自由使用和修改

## 🎉 致谢

感谢所有开源项目的贡献者们，让这个赛博朋克风格的个人网站成为可能！

---

🌟 **如果这个项目对你有帮助，请给个 Star 支持一下！** 🌟
