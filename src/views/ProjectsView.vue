<template>
  <div class="projects">
    <div class="container">
      <!-- Header -->
      <section class="projects-header">
        <h1
          class="page-title glitch-text"
          data-text="我的项目"
          v-motion
          :initial="{ opacity: 0, y: -50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          我的项目
        </h1>
        <p
          class="page-description"
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        >
          这里展示了我在学习过程中完成的一些项目，涵盖Web开发、移动应用等多个领域。
        </p>
      </section>

      <!-- Filter -->
      <section class="filter-section">
        <div
          class="filter-buttons"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 400 } }"
        >
          <button
            class="filter-btn energy-pulse"
            :class="{ active: activeFilter === 'all' }"
            @click="setFilter('all')"
            v-motion
            :tap="{ scale: 0.95 }"
          >
            全部
          </button>
          <button
            class="filter-btn energy-pulse"
            :class="{ active: activeFilter === category }"
            @click="setFilter(category)"
            v-for="category in categories"
            :key="category"
            v-motion
            :tap="{ scale: 0.95 }"
          >
            {{ getCategoryName(category) }}
          </button>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="projects-grid">
        <div
          class="project-card hud-border scan-lines"
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 50, scale: 0.9 }"
          :enter="{
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
          :leave="{
            opacity: 0,
            scale: 0.8,
            transition: { duration: 300 },
          }"
          :hover="{
            y: -10,
            transition: { duration: 200 },
          }"
        >
          <div class="project-image">
            <div class="project-placeholder">{{ project.icon }}</div>
            <div class="project-overlay">
              <div class="project-links">
                <a :href="project.demo" target="_blank" class="project-link" v-if="project.demo">
                  <span>🔗</span> 预览
                </a>
                <a
                  :href="project.github"
                  target="_blank"
                  class="project-link"
                  v-if="project.github"
                >
                  <span>📁</span> 代码
                </a>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-features">
              <h4>主要功能：</h4>
              <ul>
                <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
            <div class="project-tags">
              <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
            <div class="project-meta">
              <span class="project-date">{{ project.date }}</span>
              <span class="project-status" :class="project.status">{{
                getStatusText(project.status)
              }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  features: string[]
  tags: string[]
  category: string
  date: string
  status: 'completed' | 'in-progress' | 'planned'
  icon: string
  demo?: string
  github?: string
}

const activeFilter = ref('all')

const projects = ref<Project[]>([
  {
    id: 1,
    title: '个人博客系统',
    description: '基于Vue3和Node.js开发的全栈博客应用，支持文章发布、评论互动、用户管理等功能。',
    features: ['Markdown编辑器', '用户注册登录', '评论系统', '文章分类标签', '响应式设计'],
    tags: ['Vue3', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    category: 'web',
    date: '2024.03',
    status: 'completed',
    icon: '📝',
    demo: 'https://blog-demo.com',
    github: 'https://github.com/username/blog',
  },
  {
    id: 2,
    title: '任务管理工具',
    description: '现代化的任务管理应用，支持项目协作、进度跟踪、团队沟通等功能。',
    features: ['拖拽式任务管理', '项目看板视图', '团队协作', '进度统计', '消息通知'],
    tags: ['React', 'TypeScript', 'Redux', 'Ant Design'],
    category: 'web',
    date: '2024.05',
    status: 'completed',
    icon: '✅',
    demo: 'https://task-demo.com',
    github: 'https://github.com/username/task-manager',
  },
  {
    id: 3,
    title: '天气预报小程序',
    description: '集成多个天气API的微信小程序，提供精确的天气预报和生活指数。',
    features: ['实时天气查询', '7天天气预报', '生活指数提醒', '城市搜索', '定位服务'],
    tags: ['微信小程序', 'JavaScript', 'WeChat API'],
    category: 'mobile',
    date: '2024.01',
    status: 'completed',
    icon: '🌤️',
    github: 'https://github.com/username/weather-miniprogram',
  },
  {
    id: 4,
    title: '电商管理系统',
    description: '为小型电商企业设计的后台管理系统，包含商品管理、订单处理、数据统计等功能。',
    features: ['商品信息管理', '订单处理流程', '用户管理', '销售数据统计', '权限控制'],
    tags: ['Vue3', 'Element Plus', 'Spring Boot', 'MySQL'],
    category: 'web',
    date: '2024.06',
    status: 'in-progress',
    icon: '🛒',
    github: 'https://github.com/username/ecommerce-admin',
  },
  {
    id: 5,
    title: '学习笔记App',
    description: '移动端学习笔记应用，支持多媒体笔记、知识图谱、复习提醒等功能。',
    features: ['多媒体笔记', '知识图谱', '复习提醒', '标签分类', '云端同步'],
    tags: ['React Native', 'TypeScript', 'SQLite'],
    category: 'mobile',
    date: '2024.08',
    status: 'planned',
    icon: '📚',
  },
  {
    id: 6,
    title: '智能聊天机器人',
    description: '基于自然语言处理的智能客服机器人，可以回答常见问题并提供个性化服务。',
    features: ['自然语言理解', '多轮对话', '知识库管理', '情感分析', '多平台接入'],
    tags: ['Python', 'TensorFlow', 'NLP', 'Flask'],
    category: 'ai',
    date: '2024.09',
    status: 'in-progress',
    icon: '🤖',
  },
])

const categories = ['web', 'mobile', 'ai']

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter((project) => project.category === activeFilter.value)
})

const setFilter = (filter: string) => {
  activeFilter.value = filter
}

const getCategoryName = (category: string) => {
  const names = {
    web: 'Web开发',
    mobile: '移动应用',
    ai: '人工智能',
  }
  return names[category as keyof typeof names] || category
}

const getStatusText = (status: string) => {
  const texts = {
    completed: '已完成',
    'in-progress': '进行中',
    planned: '计划中',
  }
  return texts[status as keyof typeof texts] || status
}
</script>

<style scoped>
.projects {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.projects-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--cyber-primary);
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 20px var(--cyber-primary);
}

.page-description {
  font-size: 1.2rem;
  color: var(--cyber-text-dim);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-align: center;
}

.filter-section {
  margin-bottom: 3rem;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.8rem 1.5rem;
  border: 2px solid rgba(0, 255, 159, 0.3);
  background: rgba(0, 0, 0, 0.7);
  color: var(--cyber-primary);
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
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

.filter-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--cyber-primary);
  transition: left 0.3s ease;
  z-index: -1;
}

.filter-btn:hover {
  color: var(--cyber-bg);
  border-color: var(--cyber-primary);
  box-shadow: 0 0 20px rgba(0, 255, 159, 0.3);
}

.filter-btn:hover::before {
  left: 0;
}

.filter-btn.active {
  background: var(--cyber-primary);
  color: var(--cyber-bg);
  border-color: var(--cyber-primary);
  box-shadow: 0 0 30px rgba(0, 255, 159, 0.5);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
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

@keyframes scan-project {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
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
  transition: all 0.3s ease;
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

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 255, 159, 0.1) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  z-index: 10;
}

.project-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 2px,
    rgba(0, 255, 159, 0.1) 2px,
    rgba(0, 255, 159, 0.1) 4px
  );
  animation: overlay-scan 0.1s linear infinite;
}

@keyframes overlay-scan {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(4px);
  }
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .project-placeholder {
  transform: scale(0.8);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: var(--cyber-primary);
  text-decoration: none;
  border: 2px solid var(--cyber-primary);
  border-radius: 0;
  font-weight: 600;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
}

.project-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--cyber-primary);
  transition: left 0.3s ease;
  z-index: -1;
}

.project-link:hover {
  color: var(--cyber-bg);
  box-shadow: 0 0 20px var(--cyber-primary);
  transform: scale(1.05);
}

.project-link:hover::before {
  left: 0;
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

.project-features {
  margin-bottom: 1.5rem;
}

.project-features h4 {
  color: var(--cyber-accent);
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 5px var(--cyber-accent);
}

.project-features ul {
  list-style: none;
  padding: 0;
}

.project-features li {
  color: var(--cyber-text-dim);
  padding: 0.3rem 0;
  position: relative;
  padding-left: 1.5rem;
  font-family: 'Rajdhani', sans-serif;
}

.project-features li::before {
  content: '◆';
  color: var(--cyber-primary);
  position: absolute;
  left: 0;
  text-shadow: 0 0 5px var(--cyber-primary);
  animation: pulse-diamond 2s ease-in-out infinite;
}

@keyframes pulse-diamond {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
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

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 255, 159, 0.3);
  position: relative;
}

.project-meta::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  width: 30%;
  height: 1px;
  background: var(--cyber-primary);
  box-shadow: 0 0 10px var(--cyber-primary);
}

.project-date {
  color: var(--cyber-accent);
  font-size: 0.9rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 5px var(--cyber-accent);
}

.project-status {
  padding: 0.4rem 1rem;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
}

.project-status.completed {
  background: rgba(0, 255, 159, 0.1);
  color: var(--cyber-primary);
  border-color: var(--cyber-primary);
  text-shadow: 0 0 5px var(--cyber-primary);
}

.project-status.in-progress {
  background: rgba(255, 0, 128, 0.1);
  color: var(--cyber-secondary);
  border-color: var(--cyber-secondary);
  text-shadow: 0 0 5px var(--cyber-secondary);
}

.project-status.planned {
  background: rgba(0, 212, 255, 0.1);
  color: var(--cyber-accent);
  border-color: var(--cyber-accent);
  text-shadow: 0 0 5px var(--cyber-accent);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .filter-buttons {
    justify-content: center;
  }

  .filter-btn {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
