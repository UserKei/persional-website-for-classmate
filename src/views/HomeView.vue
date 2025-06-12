<script setup lang="ts">
import { ref } from 'vue'

const techStack = ref([
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '💚' },
  { name: 'Python', icon: '🐍' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Git', icon: '📚' },
])

const featuredProjects = ref([
  {
    id: 1,
    title: '个人博客系统',
    description: '基于Vue3和Node.js开发的全栈博客应用，支持Markdown编辑和评论系统。',
    tags: ['Vue3', 'Node.js', 'MongoDB'],
    icon: '📝',
  },
  {
    id: 2,
    title: '任务管理工具',
    description: '响应式设计的任务管理应用，具有拖拽排序和团队协作功能。',
    tags: ['React', 'TypeScript', 'Redux'],
    icon: '✅',
  },
  {
    id: 3,
    title: '天气预报小程序',
    description: '集成多个天气API的小程序，提供精确的天气预报和生活指数。',
    tags: ['微信小程序', 'JavaScript'],
    icon: '🌤️',
  },
])
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 
            class="hero-title"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          >
            你好，我是
            <span class="highlight">张同学</span>
          </h1>
          <h2 
            class="hero-subtitle"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
          >
            计算机专业大学生 | 全栈开发者
          </h2>
          <p 
            class="hero-description"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
          >
            热爱编程，专注于Web开发和人工智能。目前在学习最新的技术栈，
            致力于用代码创造有价值的产品。
          </p>
          <div 
            class="hero-buttons"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 800 } }"
          >
            <router-link to="/projects" class="btn btn-primary">查看项目</router-link>
            <router-link to="/contact" class="btn btn-secondary">联系我</router-link>
          </div>
        </div>
        <div class="hero-image">
          <div 
            class="code-animation"
            v-motion
            :initial="{ opacity: 0, x: 100, rotateY: 45 }"
            :enter="{ opacity: 1, x: 0, rotateY: 0, transition: { duration: 1000, delay: 1000 } }"
          >
            <div class="code-line">
              <span class="code-keyword">function</span>
              <span class="code-function">createAwesome</span>() {
            </div>
            <div class="code-line">
              &nbsp;&nbsp;<span class="code-keyword">return</span>
              <span class="code-string">'Hello World!'</span>;
            </div>
            <div class="code-line">}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Preview -->
    <section class="skills-preview">
      <div class="container">
        <h2 
          class="section-title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          技术栈
        </h2>
        <div class="tech-grid">
          <div 
            class="tech-item" 
            v-for="(tech, index) in techStack" 
            :key="tech.name"
            v-motion
            :initial="{ opacity: 0, y: 50, scale: 0.8 }"
            :visible-once="{ 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              transition: { 
                duration: 500, 
                delay: index * 100,
                type: 'spring',
                stiffness: 100
              } 
            }"
          >
            <div class="tech-icon">{{ tech.icon }}</div>
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Preview -->
    <section class="projects-preview">
      <div class="container">
        <h2 
          class="section-title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          精选项目
        </h2>
        <div class="projects-grid">
          <div 
            class="project-card" 
            v-for="(project, index) in featuredProjects" 
            :key="project.id"
            v-motion
            :initial="{ opacity: 0, y: 100, rotateX: 45 }"
            :visible-once="{ 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              transition: { 
                duration: 700, 
                delay: index * 200,
                type: 'spring'
              } 
            }"
          >
            <div class="project-image">
              <div class="project-placeholder">{{ project.icon }}</div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
        <div 
          class="text-center"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 800 } }"
        >
          <router-link to="/projects" class="btn btn-outline">查看更多项目</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.highlight {
  color: #ffd700;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #ffd700;
  color: #333;
}

.btn-primary:hover {
  background: #ffed4e;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #333;
}

.btn-outline {
  background: transparent;
  color: #3498db;
  border: 2px solid #3498db;
}

.btn-outline:hover {
  background: #3498db;
  color: white;
}

.code-animation {
  background: #2d3748;
  border-radius: 10px;
  padding: 2rem;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.code-line {
  margin-bottom: 0.5rem;
  color: #e2e8f0;
}

.code-keyword {
  color: #f093fb;
}

.code-function {
  color: #4fd1c7;
}

.code-string {
  color: #68d391;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.skills-preview {
  padding: 4rem 0;
  background: #f8f9fa;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-5px);
}

.tech-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tech-name {
  font-weight: 600;
  color: #2c3e50;
}

.projects-preview {
  padding: 4rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  height: 200px;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-placeholder {
  font-size: 4rem;
}

.project-content {
  padding: 2rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
}

.text-center {
  text-align: center;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
