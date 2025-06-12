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
            class="hero-title glitch-text"
            data-text="你好，我是 张同学"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          >
            你好，我是
            <span class="highlight hologram-text">张同学</span>
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
            class="code-animation hud-border scan-lines cyber-interference"
            v-motion
            :initial="{ opacity: 0, x: 100, rotateY: 45 }"
            :enter="{ opacity: 1, x: 0, rotateY: 0, transition: { duration: 1000, delay: 1000 } }"
          >
            <div class="code-line data-stream">
              <span class="code-keyword">function</span>
              <span class="code-function">createAwesome</span>() {
            </div>
            <div class="code-line">
              &nbsp;&nbsp;<span class="code-keyword">return</span>
              <span class="code-string">'Hello World!'</span>;
            </div>
            <div class="code-line">}</div>
            <div class="code-cursor"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Preview -->
    <section class="skills-preview">
      <div class="container">
        <h2
          class="section-title hologram-text"
          data-text="技术栈"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          技术栈
        </h2>
        <div class="tech-grid">
          <div
            class="tech-item energy-pulse data-stream"
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
                stiffness: 100,
              },
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
          class="section-title glitch-text"
          data-text="精选项目"
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
                type: 'spring',
              },
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
  padding-top: 0; /* 移除这里的padding，因为main-content已经有了 */
}

.hero {
  background: transparent; /* 使用全局的赛博朋克背景 */
  color: var(--cyber-text);
  padding: 4rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
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
  color: var(--cyber-primary);
  text-shadow: var(--cyber-glow) var(--cyber-primary);
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
  border-radius: 0;
  text-decoration: none;
  font-weight: 600;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  overflow: hidden;
  clip-path: polygon(
    0 0,
    calc(100% - 15px) 0,
    100% 15px,
    100% 100%,
    15px 100%,
    0 calc(100% - 15px)
  );
}

.btn-primary {
  background: var(--cyber-primary);
  color: var(--cyber-dark);
  border: 2px solid var(--cyber-primary);
  box-shadow: 0 0 20px rgba(0, 255, 159, 0.3);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 2px solid var(--cyber-primary);
  transition: left 0.3s ease;
  z-index: -1;
}

.btn-primary:hover {
  background: transparent;
  color: var(--cyber-primary);
  box-shadow: 0 0 30px var(--cyber-primary);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--cyber-accent);
  border: 2px solid var(--cyber-accent);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
}

.btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--cyber-accent);
  transition: left 0.3s ease;
  z-index: -1;
}

.btn-secondary:hover {
  color: var(--cyber-dark);
  box-shadow: 0 0 30px var(--cyber-accent);
  transform: translateY(-2px);
}

.btn-secondary:hover::before {
  left: 0;
}

.btn-outline {
  background: transparent;
  color: var(--cyber-accent);
  border: 2px solid var(--cyber-accent);
  border-radius: 0;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  clip-path: polygon(
    0 0,
    calc(100% - 15px) 0,
    100% 15px,
    100% 100%,
    15px 100%,
    0 calc(100% - 15px)
  );
}

.btn-outline::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--cyber-accent);
  transition: left 0.3s ease;
  z-index: -1;
}

.btn-outline:hover {
  color: var(--cyber-bg);
  box-shadow: 0 0 30px var(--cyber-accent);
  transform: translateY(-2px);
}

.btn-outline:hover::before {
  left: 0;
}

.code-animation {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--cyber-primary);
  border-radius: 0;
  padding: 2rem;
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  box-shadow:
    0 0 20px rgba(0, 255, 159, 0.2),
    inset 0 0 20px rgba(0, 255, 159, 0.05);
  position: relative;
  overflow: hidden;
}

.code-animation::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyber-primary), transparent);
  animation: scan 2s linear infinite;
}

@keyframes scan {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.code-line {
  margin-bottom: 0.5rem;
  color: var(--cyber-text);
}

.code-keyword {
  color: var(--cyber-secondary);
}

.code-function {
  color: var(--cyber-accent);
}

.code-string {
  color: var(--cyber-primary);
}

.code-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: var(--cyber-primary);
  margin-left: 2px;
  animation: cursor-blink 1s infinite;
  box-shadow: 0 0 10px var(--cyber-primary);
}

@keyframes cursor-blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

@keyframes scan-project {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
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
  color: var(--cyber-accent);
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 15px var(--cyber-accent);
}

.skills-preview {
  padding: 4rem 0;
  background: transparent;
  position: relative;
}

.skills-preview::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(rgba(0, 212, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.02) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: -1;
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
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--cyber-primary);
  border-radius: 0;
  box-shadow:
    0 0 20px rgba(0, 255, 159, 0.2),
    inset 0 0 20px rgba(0, 255, 159, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 159, 0.1), transparent);
  transition: left 0.5s;
}

.tech-item:hover::before {
  left: 100%;
}

.tech-item:hover {
  transform: translateY(-5px);
  border-color: var(--cyber-accent);
  box-shadow:
    0 10px 40px rgba(0, 255, 159, 0.4),
    inset 0 0 20px rgba(0, 255, 159, 0.1);
}

.tech-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tech-name {
  font-weight: 600;
  color: var(--cyber-text);
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
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
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 255, 159, 0.3);
  border-radius: 0;
  overflow: hidden;
  box-shadow:
    0 0 30px rgba(0, 255, 159, 0.2),
    inset 0 0 30px rgba(0, 255, 159, 0.05);
  transition: all 0.4s ease;
  position: relative;
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% 100%,
    20px 100%,
    0 calc(100% - 20px)
  );
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--cyber-primary),
    var(--cyber-accent),
    transparent
  );
  animation: scan-project 3s linear infinite;
  z-index: 1;
}

.project-card:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: var(--cyber-primary);
  box-shadow:
    0 0 50px rgba(0, 255, 159, 0.4),
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 0 50px rgba(0, 255, 159, 0.1);
}

.project-image {
  height: 200px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 159, 0.8) 0%,
    rgba(0, 212, 255, 0.6) 50%,
    rgba(255, 0, 128, 0.8) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.project-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.1) 2px,
    rgba(0, 0, 0, 0.1) 4px
  );
  z-index: 1;
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.3) 70%);
  z-index: 2;
}

.project-placeholder {
  font-size: 4rem;
  z-index: 3;
  position: relative;
  filter: drop-shadow(0 0 20px var(--cyber-primary));
  animation: float-icon 3s ease-in-out infinite;
}

@keyframes float-icon {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.project-content {
  padding: 2rem;
  position: relative;
}

.project-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--cyber-primary), transparent);
  box-shadow: 0 0 10px var(--cyber-primary);
}

.project-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--cyber-primary);
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 10px var(--cyber-primary);
}

.project-description {
  color: var(--cyber-text-dim);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: 'Rajdhani', sans-serif;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: rgba(0, 255, 159, 0.1);
  color: var(--cyber-primary);
  border: 1px solid rgba(0, 255, 159, 0.3);
  padding: 0.4rem 1rem;
  border-radius: 0;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: 0 0 5px var(--cyber-primary);
  transition: all 0.3s ease;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
}

.tag:hover {
  background: rgba(0, 255, 159, 0.2);
  box-shadow: 0 0 15px rgba(0, 255, 159, 0.3);
  transform: scale(1.05);
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
