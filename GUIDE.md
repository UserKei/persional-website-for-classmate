# 个人网站使用指南

## 🎯 个性化定制

### 1. 修改个人信息

#### 基本信息修改

- **姓名**: 在 `src/App.vue` 中修改导航栏的品牌名称
- **标题**: 在 `index.html` 中修改页面标题和meta描述
- **联系方式**: 在 `src/views/ContactView.vue` 中更新联系信息

#### 首页内容

编辑 `src/views/HomeView.vue`:

```typescript
// 修改个人介绍
const heroTitle = '你好，我是张同学' // 改为你的名字
const heroSubtitle = '计算机专业大学生 | 全栈开发者' // 改为你的身份
const heroDescription = '热爱编程，专注于Web开发...' // 改为你的描述

// 修改技术栈
const techStack = ref([
  { name: 'JavaScript', icon: '🟨' },
  // 添加你熟悉的技术
])

// 修改项目展示
const featuredProjects = ref([
  {
    title: '你的项目名称',
    description: '项目描述',
    tags: ['技术标签'],
    icon: '📝',
  },
])
```

### 2. 更新项目信息

编辑 `src/views/ProjectsView.vue`:

```typescript
const projects = ref<Project[]>([
  {
    id: 1,
    title: '你的项目标题',
    description: '详细的项目描述',
    features: ['功能1', '功能2', '功能3'],
    tags: ['技术栈1', '技术栈2'],
    category: 'web', // web, mobile, ai
    date: '2024.03',
    status: 'completed', // completed, in-progress, planned
    icon: '📝',
    demo: 'https://your-demo-link.com',
    github: 'https://github.com/your-username/repo',
  },
])
```

### 3. 更新技能信息

编辑 `src/views/SkillsView.vue`:

```typescript
const skillCategories = ref<SkillCategory[]>([
  {
    name: '前端开发',
    icon: '🎨',
    skills: [
      {
        name: '技能名称',
        level: 85, // 0-100的熟练度
        description: '技能描述',
      },
    ],
  },
])
```

### 4. 更新关于我页面

编辑 `src/views/AboutView.vue`:

```typescript
// 修改教育经历
const timeline = ref([
  {
    date: '2022 - 至今',
    title: '你的专业',
    description: '学习经历描述',
    tags: ['相关技能'],
  },
])

// 修改兴趣爱好
const interests = ref([
  {
    title: '兴趣名称',
    icon: '💻',
    description: '兴趣描述',
  },
])
```

### 5. 更新联系方式

编辑 `src/views/ContactView.vue`:

```typescript
const contactMethods = ref<ContactMethod[]>([
  {
    type: 'email',
    title: '邮箱',
    value: 'your-email@example.com', // 改为你的邮箱
    description: '工作日内24小时回复',
    icon: '📧',
    link: 'mailto:your-email@example.com',
    buttonText: '发送邮件',
    external: false,
  },
])

const socialMedia = ref<SocialMedia[]>([
  {
    name: 'GitHub',
    icon: '💻',
    description: '查看我的代码项目',
    link: 'https://github.com/your-username', // 改为你的GitHub
  },
])
```

## 🎨 样式定制

### 主题色彩修改

在 `src/assets/main.css` 中修改CSS变量:

```css
:root {
  --primary-color: #3498db; /* 主色调 */
  --secondary-color: #2ecc71; /* 辅助色 */
  --accent-color: #f39c12; /* 强调色 */
  --text-color: #2c3e50; /* 文字色 */
  --background-color: #f8f9fa; /* 背景色 */
}
```

### 字体修改

在 `index.html` 中更换Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Your-Font:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

然后在 `src/assets/main.css` 中更新:

```css
body {
  font-family: 'Your-Font', sans-serif;
}
```

## 📱 添加新页面

### 1. 创建新页面组件

在 `src/views/` 目录创建新的Vue文件:

```vue
<template>
  <div class="new-page">
    <h1>新页面标题</h1>
    <p>页面内容</p>
  </div>
</template>

<script setup lang="ts">
// 页面逻辑
</script>

<style scoped>
/* 页面样式 */
</style>
```

### 2. 添加路由

在 `src/router/index.ts` 中添加路由:

```typescript
{
  path: '/new-page',
  name: 'newPage',
  component: () => import('../views/NewPageView.vue'),
  meta: {
    title: '新页面 - 张同学'
  }
}
```

### 3. 添加导航链接

在 `src/App.vue` 中添加导航链接:

```vue
<RouterLink to="/new-page" class="nav-link">新页面</RouterLink>
```

## 🚀 部署指南

### 构建生产版本

```bash
npm run build
```

### 部署到GitHub Pages

1. 安装gh-pages: `npm install -D gh-pages`
2. 在package.json中添加:

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://your-username.github.io/repository-name"
}
```

3. 运行: `npm run deploy`

### 部署到Vercel

1. 安装Vercel CLI: `npm install -g vercel`
2. 运行: `vercel --prod`
3. 按照提示配置

### 部署到Netlify

1. 构建项目: `npm run build`
2. 将 `dist` 文件夹拖拽到Netlify部署页面
3. 或使用Netlify CLI: `netlify deploy --prod --dir=dist`

## 🔧 常见问题

### Q: 如何添加新的技术栈图标？

A: 可以使用emoji或者引入图标库如Lucide或Heroicons。

### Q: 如何集成博客功能？

A: 可以使用Markdown文件 + 动态路由，或集成Strapi等Headless CMS。

### Q: 如何添加动画效果？

A: 推荐使用Vue的Transition组件或集成Framer Motion Vue版本。

### Q: 如何优化SEO？

A:

1. 更新meta标签
2. 添加sitemap.xml
3. 使用SSR（如Nuxt.js）
4. 添加结构化数据

### Q: 如何添加多语言支持？

A: 使用Vue I18n库，创建语言配置文件。

## 📈 性能优化建议

1. **图片优化**: 使用WebP格式，添加懒加载
2. **代码分割**: 利用Vue的动态导入
3. **缓存策略**: 配置适当的HTTP缓存头
4. **CDN**: 使用CDN加速静态资源
5. **压缩**: 启用Gzip压缩

## 🛠️ 开发工具推荐

- **IDE**: VS Code + Volar插件
- **调试**: Vue DevTools
- **Git**: Git + GitHub Desktop
- **设计**: Figma（UI设计）
- **图标**: Lucide, Heroicons
- **字体**: Google Fonts

## 📚 学习资源

- [Vue.js官方文档](https://vuejs.org/)
- [TypeScript官方文档](https://www.typescriptlang.org/)
- [Vite官方文档](https://vitejs.dev/)
- [CSS-Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
