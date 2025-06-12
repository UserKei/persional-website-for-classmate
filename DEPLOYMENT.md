# 部署配置文档

## 🚀 部署指南

### Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 设置构建命令：`npm run build`
3. 设置输出目录：`dist`
4. 自动部署完成

### Netlify 部署

1. 构建项目：`npm run build`
2. 将 `dist` 文件夹拖拽到 Netlify
3. 配置自定义域名（可选）

### GitHub Pages 部署

```bash
# 构建项目
npm run build

# 部署到 gh-pages 分支
npm install -g gh-pages
gh-pages -d dist
```

### 自定义服务器

上传 `dist` 文件夹到服务器的 web 根目录

## 🔧 环境变量配置

创建 `.env` 文件（开发环境）：

```env
VITE_APP_TITLE=赛博朋克个人网站
VITE_API_BASE_URL=http://localhost:3000/api
VITE_CONTACT_EMAIL=your-email@example.com
```

创建 `.env.production` 文件（生产环境）：

```env
VITE_APP_TITLE=张同学 - 赛博朋克编程者
VITE_API_BASE_URL=https://your-api.com/api
VITE_CONTACT_EMAIL=your-email@example.com
```

## 📊 性能优化

### 图片优化

- 使用 WebP 格式
- 添加图片懒加载
- 压缩图片文件

### 代码分割

```javascript
// 路由懒加载已配置
const HomeView = () => import('../views/HomeView.vue')
```

### CDN 配置

建议将静态资源部署到 CDN 以提高加载速度。

## 🔍 SEO 优化

### Meta 标签

已在 `index.html` 中配置完整的 SEO meta 标签。

### 结构化数据

可以添加 JSON-LD 结构化数据提升 SEO：

```json
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "张同学",
  "jobTitle": "计算机专业学生",
  "description": "热爱编程的计算机专业大学生",
  "url": "https://your-website.com"
}
```

## 🛡️ 安全配置

### Content Security Policy

添加到服务器配置或 meta 标签中：

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com;"
/>
```

### HTTPS

确保网站使用 HTTPS 协议。

## 📈 分析和监控

### Google Analytics

在 `index.html` 中添加 GA 代码：

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'GA_MEASUREMENT_ID')
</script>
```

### 性能监控

可以集成 Lighthouse CI 进行自动化性能测试。

## 🔄 持续集成

### GitHub Actions 示例

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
