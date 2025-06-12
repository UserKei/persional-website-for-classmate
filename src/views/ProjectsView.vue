<template>
  <div class="projects">
    <div class="container">
      <!-- Header -->
      <section class="projects-header">
        <h1 class="page-title">我的项目</h1>
        <p class="page-description">
          这里展示了我在学习过程中完成的一些项目，涵盖Web开发、移动应用等多个领域。
        </p>
      </section>

      <!-- Filter -->
      <section class="filter-section">
        <div class="filter-buttons">
          <button
            class="filter-btn"
            :class="{ active: activeFilter === 'all' }"
            @click="setFilter('all')"
          >
            全部
          </button>
          <button
            class="filter-btn"
            :class="{ active: activeFilter === category }"
            @click="setFilter(category)"
            v-for="category in categories"
            :key="category"
          >
            {{ getCategoryName(category) }}
          </button>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="projects-grid">
        <div class="project-card" v-for="project in filteredProjects" :key="project.id">
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
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
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
  border: 2px solid #3498db;
  background: transparent;
  color: #3498db;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn:hover {
  background: #3498db;
  color: white;
}

.filter-btn.active {
  background: #3498db;
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
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
  position: relative;
  overflow: hidden;
}

.project-placeholder {
  font-size: 4rem;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
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
  background: white;
  color: #333;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.project-link:hover {
  transform: scale(1.05);
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

.project-features {
  margin-bottom: 1.5rem;
}

.project-features h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.project-features ul {
  list-style: none;
  padding: 0;
}

.project-features li {
  color: #666;
  padding: 0.2rem 0;
  position: relative;
  padding-left: 1rem;
}

.project-features li::before {
  content: '•';
  color: #3498db;
  position: absolute;
  left: 0;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.project-date {
  color: #999;
  font-size: 0.9rem;
}

.project-status {
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-status.completed {
  background: #e8f5e8;
  color: #4caf50;
}

.project-status.in-progress {
  background: #fff3e0;
  color: #ff9800;
}

.project-status.planned {
  background: #f3e5f5;
  color: #9c27b0;
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
