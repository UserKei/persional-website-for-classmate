<template>
  <div class="skills">
    <div class="container">
      <!-- Header -->
      <section class="skills-header">
        <h1
          class="page-title"
          v-motion
          :initial="{ opacity: 0, y: -50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          技能展示
        </h1>
        <p
          class="page-description"
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        >
          在学习和实践中不断积累的技术栈，涵盖前端、后端、数据库等多个领域。
        </p>
      </section>

      <!-- Technical Skills -->
      <section class="technical-skills">
        <h2
          class="section-title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          技术技能
        </h2>
        <div class="skills-categories">
          <div
            class="skill-category"
            v-for="(category, categoryIndex) in skillCategories"
            :key="category.name"
            v-motion
            :initial="{ opacity: 0, y: 50, scale: 0.9 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 600,
                delay: categoryIndex * 200,
                type: 'spring',
              },
            }"
          >
            <h3 class="category-title">
              <span class="category-icon">{{ category.icon }}</span>
              {{ category.name }}
            </h3>
            <div class="skills-list">
              <div
                class="skill-item"
                v-for="(skill, skillIndex) in category.skills"
                :key="skill.name"
                v-motion
                :initial="{ opacity: 0, x: -50 }"
                :visible-once="{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 400,
                    delay: categoryIndex * 200 + skillIndex * 100,
                  },
                }"
              >
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-progress"
                    :style="{ width: skill.level + '%' }"
                    :class="getSkillLevelClass(skill.level)"
                    v-motion
                    :initial="{ width: '0%' }"
                    :visible-once="{
                      width: skill.level + '%',
                      transition: {
                        duration: 1000,
                        delay: categoryIndex * 200 + skillIndex * 100 + 200,
                      },
                    }"
                  ></div>
                </div>
                <p class="skill-description">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tools & Technologies -->
      <section class="tools-section">
        <h2
          class="section-title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          工具与技术
        </h2>
        <div class="tools-grid">
          <div
            class="tool-card"
            v-for="(tool, index) in tools"
            :key="tool.name"
            v-motion
            :initial="{ opacity: 0, y: 50, rotateY: 45 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              rotateY: 0,
              transition: {
                duration: 500,
                delay: index * 100,
                type: 'spring',
              },
            }"
            :hover="{
              y: -5,
              scale: 1.05,
              transition: { duration: 200 },
            }"
          >
            <div class="tool-icon">{{ tool.icon }}</div>
            <h3 class="tool-name">{{ tool.name }}</h3>
            <p class="tool-description">{{ tool.description }}</p>
            <div class="tool-tags">
              <span class="tag" v-for="tag in tool.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Learning Path -->
      <section class="learning-section">
        <h2
          class="section-title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          学习路径
        </h2>
        <div class="learning-timeline">
          <div
            class="learning-item"
            v-for="(item, index) in learningPath"
            :key="item.id"
            v-motion
            :initial="{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }"
            :visible-once="{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 700,
                delay: index * 200,
                type: 'spring',
              },
            }"
          >
            <div class="learning-marker"></div>
            <div class="learning-content">
              <div class="learning-period">{{ item.period }}</div>
              <h3 class="learning-title">{{ item.title }}</h3>
              <p class="learning-description">{{ item.description }}</p>
              <div class="learning-skills">
                <span
                  class="skill-tag"
                  v-for="(skill, skillIndex) in item.skills"
                  :key="skill"
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :visible-once="{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 300,
                      delay: index * 200 + skillIndex * 50 + 400,
                    },
                  }"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Certificates -->
      <section class="certificates-section">
        <h2
          class="section-title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          证书与成就
        </h2>
        <div class="certificates-grid">
          <div
            class="certificate-card"
            v-for="(cert, index) in certificates"
            :key="cert.id"
            v-motion
            :initial="{ opacity: 0, y: 50, rotateX: 45 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 600,
                delay: index * 150,
                type: 'spring',
              },
            }"
            :hover="{
              y: -5,
              scale: 1.02,
              transition: { duration: 200 },
            }"
          >
            <div class="certificate-icon">{{ cert.icon }}</div>
            <h3 class="certificate-title">{{ cert.title }}</h3>
            <p class="certificate-issuer">{{ cert.issuer }}</p>
            <p class="certificate-date">{{ cert.date }}</p>
            <p class="certificate-description">{{ cert.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
  name: string
  level: number
  description: string
}

interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

interface Tool {
  name: string
  icon: string
  description: string
  tags: string[]
}

interface LearningItem {
  id: number
  period: string
  title: string
  description: string
  skills: string[]
}

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  icon: string
}

const skillCategories = ref<SkillCategory[]>([
  {
    name: '前端开发',
    icon: '🎨',
    skills: [
      {
        name: 'HTML/CSS',
        level: 85,
        description: '熟练掌握HTML5语义化标签和CSS3动画效果',
      },
      {
        name: 'JavaScript',
        level: 80,
        description: '深入理解ES6+语法，熟悉异步编程和模块化',
      },
      {
        name: 'Vue.js',
        level: 75,
        description: '熟练使用Vue3组合式API，掌握状态管理和路由',
      },
      {
        name: 'React',
        level: 70,
        description: '理解组件化思想，掌握Hooks和状态管理',
      },
      {
        name: 'TypeScript',
        level: 65,
        description: '掌握类型系统，能够编写类型安全的代码',
      },
    ],
  },
  {
    name: '后端开发',
    icon: '⚙️',
    skills: [
      {
        name: 'Java',
        level: 75,
        description: '深入掌握面向对象编程，熟练使用Spring Boot框架',
      },
      {
        name: 'Spring Boot',
        level: 70,
        description: '熟悉企业级开发框架，掌握依赖注入和AOP',
      },
      {
        name: 'Node.js',
        level: 65,
        description: '熟悉Express框架，能够构建RESTful API',
      },
      {
        name: 'Python',
        level: 60,
        description: '掌握基础语法和面向对象编程，了解Django框架',
      },
    ],
  },
  {
    name: '数据库技术',
    icon: '🗄️',
    skills: [
      {
        name: 'MySQL',
        level: 75,
        description: '熟悉关系型数据库设计和性能优化',
      },
      {
        name: 'SQL',
        level: 80,
        description: '熟练编写复杂查询语句，了解数据库设计原则',
      },
      {
        name: 'MongoDB',
        level: 60,
        description: '了解NoSQL数据库的使用和文档存储',
      },
      {
        name: 'Redis',
        level: 50,
        description: '了解缓存机制和基本数据结构',
      },
    ],
  },
  {
    name: '软件工程',
    icon: '🏗️',
    skills: [
      {
        name: '软件设计模式',
        level: 65,
        description: '理解常用设计模式，能够应用于实际项目',
      },
      {
        name: '系统分析与设计',
        level: 70,
        description: '掌握需求分析和系统架构设计方法',
      },
      {
        name: '项目管理',
        level: 60,
        description: '了解敏捷开发流程和项目管理工具',
      },
      {
        name: '软件测试',
        level: 55,
        description: '掌握单元测试和集成测试的基本方法',
      },
    ],
  },
  {
    name: '工具与部署',
    icon: '🛠️',
    skills: [
      {
        name: 'Git',
        level: 85,
        description: '熟练使用版本控制，了解团队协作流程',
      },
      {
        name: 'Maven',
        level: 70,
        description: '熟悉Java项目构建和依赖管理',
      },
      {
        name: 'Docker',
        level: 50,
        description: '了解容器化部署的基本概念',
      },
      {
        name: 'Linux',
        level: 60,
        description: '熟悉基本命令和服务器操作',
      },
    ],
  },
])

const tools = ref<Tool[]>([
  {
    name: 'IntelliJ IDEA',
    icon: '💻',
    description: 'Java开发的主要IDE，熟练使用调试和重构功能',
    tags: ['IDE', 'Java', 'Spring'],
  },
  {
    name: 'Visual Studio Code',
    icon: '🔧',
    description: '前端开发工具，熟练使用各种插件和快捷键',
    tags: ['编辑器', '前端', '插件'],
  },
  {
    name: 'Maven',
    icon: '📦',
    description: 'Java项目构建工具，依赖管理和项目生命周期管理',
    tags: ['构建', 'Java', '依赖管理'],
  },
  {
    name: 'Chrome DevTools',
    icon: '🔍',
    description: '前端调试利器，性能分析和网络监控',
    tags: ['调试', '性能', '网络'],
  },
  {
    name: 'Postman',
    icon: '📡',
    description: 'API测试工具，接口文档管理',
    tags: ['API', '测试', '文档'],
  },
  {
    name: 'GitHub',
    icon: '🐙',
    description: '代码版本控制和团队协作平台',
    tags: ['版本控制', '协作', '开源'],
  },
])

const learningPath = ref<LearningItem[]>([
  {
    id: 1,
    period: '2023年上半年',
    title: '编程基础入门',
    description: '刚入学广州大学软件工程专业，开始学习编程基础知识，掌握第一门编程语言Java。',
    skills: ['Java', '面向对象编程', '数据结构', '算法基础'],
  },
  {
    id: 2,
    period: '2023年下半年',
    title: 'Web前端技术',
    description: '开始学习Web前端技术，掌握HTML、CSS、JavaScript基础知识和前端框架。',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
  },
  {
    id: 3,
    period: '2024年上半年',
    title: '后端开发深化',
    description: '深入学习Java后端开发，掌握Spring Boot框架和数据库技术。',
    skills: ['Spring Boot', 'MySQL', 'RESTful API', 'Maven'],
  },
  {
    id: 4,
    period: '2024年下半年',
    title: '全栈项目实践',
    description: '完成多个全栈项目，学习软件工程方法和项目管理，提升实际开发能力。',
    skills: ['全栈开发', '软件工程', '项目管理', '团队协作'],
  },
  {
    id: 5,
    period: '2025年',
    title: '技术深化与创新',
    description: '继续深化专业技能，学习新技术栈，参与开源项目，准备实习和就业。',
    skills: ['TypeScript', 'React', 'Docker', '开源贡献'],
  },
])

const certificates = ref<Certificate[]>([
  {
    id: 1,
    title: '全国计算机等级考试二级',
    issuer: '教育部考试中心',
    date: '2023.09',
    description: '通过Java语言程序设计考试，掌握编程基础',
    icon: '🏆',
  },
  {
    id: 2,
    title: '广州大学程序设计竞赛三等奖',
    issuer: '广州大学计算机科学与网络工程学院',
    date: '2024.05',
    description: '在校级编程竞赛中获得好成绩，提升算法能力',
    icon: '🥉',
  },
  {
    id: 3,
    title: 'Oracle Java SE认证',
    issuer: 'Oracle',
    date: '2024.03',
    description: '通过Java SE基础认证，掌握Java核心技术',
    icon: '☕',
  },
  {
    id: 4,
    title: '软件工程课程设计优秀奖',
    issuer: '广州大学软件工程系',
    date: '2024.07',
    description: '在软件工程课程设计中表现优异，获得优秀奖',
    icon: '🎓',
  },
])

const getSkillLevelClass = (level: number) => {
  if (level >= 80) return 'expert'
  if (level >= 60) return 'advanced'
  if (level >= 40) return 'intermediate'
  return 'beginner'
}
</script>

<style scoped>
.skills {
  padding: 2rem 0;
  min-height: 100vh;
  position: relative;
}

/* 数字雨背景效果 */
.skills::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 50%, rgba(0, 255, 159, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255, 0, 128, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(0, 212, 255, 0.05) 0%, transparent 50%);
  animation: cyber-pulse 10s ease-in-out infinite;
  z-index: -1;
  pointer-events: none;
}

@keyframes cyber-pulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.skills-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 3rem;
  color: var(--cyber-primary);
  margin-bottom: 1rem;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 20px var(--cyber-primary);
  text-align: center;
}

.page-description {
  font-size: 1.2rem;
  color: var(--cyber-text-dim);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--cyber-primary);
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 20px var(--cyber-primary);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyber-primary), transparent);
  box-shadow: 0 0 10px var(--cyber-primary);
}

.technical-skills {
  margin-bottom: 4rem;
}

.skills-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 159, 0.3);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 255, 159, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyber-accent), transparent);
  animation: scan-line 4s linear infinite;
}

@keyframes scan-line {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.skill-category:hover {
  border-color: var(--cyber-primary);
  transform: translateY(-5px);
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(0, 255, 159, 0.3);
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
  color: var(--cyber-primary);
  font-size: 1.4rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 10px var(--cyber-primary);
  letter-spacing: 1px;
}

.category-icon {
  font-size: 2rem;
  filter: drop-shadow(0 0 10px var(--cyber-accent));
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  border-bottom: 1px solid rgba(0, 255, 159, 0.2);
  padding-bottom: 1.5rem;
  position: relative;
}

.skill-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.skill-name {
  font-weight: 600;
  color: var(--cyber-text);
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
}

.skill-level {
  font-size: 1rem;
  color: var(--cyber-accent);
  font-weight: 600;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 5px var(--cyber-accent);
}

.skill-bar {
  height: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 255, 159, 0.2);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 0.8rem;
  position: relative;
}

.skill-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 159, 0.1), transparent);
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.skill-progress {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
  position: relative;
  overflow: hidden;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: progress-glow 2s ease-in-out infinite;
}

@keyframes progress-glow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.skill-progress.expert {
  background: linear-gradient(90deg, var(--cyber-primary), var(--cyber-accent));
  box-shadow: 0 0 15px var(--cyber-primary);
}

.skill-progress.advanced {
  background: linear-gradient(90deg, var(--cyber-secondary), var(--cyber-primary));
  box-shadow: 0 0 15px var(--cyber-secondary);
}

.skill-progress.intermediate {
  background: linear-gradient(90deg, var(--cyber-accent), var(--cyber-secondary));
  box-shadow: 0 0 15px var(--cyber-accent);
}

.skill-progress.beginner {
  background: linear-gradient(90deg, #ff6b6b, var(--cyber-accent));
  box-shadow: 0 0 15px #ff6b6b;
}

.skill-description {
  font-size: 0.95rem;
  color: var(--cyber-text-dim);
  line-height: 1.5;
}

.tools-section {
  margin-bottom: 4rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tool-card {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 159, 0.3);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 255, 159, 0.1);
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.tool-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyber-accent), transparent);
  transition: left 0.6s ease;
}

.tool-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--cyber-primary);
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(0, 255, 159, 0.3);
}

.tool-card:hover::before {
  left: 100%;
}

.tool-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px var(--cyber-primary));
  animation: float 3s ease-in-out infinite;
}

.tool-name {
  color: var(--cyber-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 10px var(--cyber-primary);
}

.tool-description {
  color: var(--cyber-text-dim);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.tool-tags {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.tag {
  background: rgba(0, 255, 159, 0.1);
  color: var(--cyber-primary);
  border: 1px solid rgba(0, 255, 159, 0.3);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Rajdhani', sans-serif;
  text-shadow: 0 0 5px var(--cyber-primary);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(0, 255, 159, 0.2);
  box-shadow: 0 0 15px rgba(0, 255, 159, 0.3);
  transform: scale(1.05);
}

.learning-section {
  margin-bottom: 4rem;
}

.learning-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.learning-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    180deg,
    transparent,
    var(--cyber-primary),
    var(--cyber-accent),
    var(--cyber-secondary),
    transparent
  );
  transform: translateX(-50%);
  box-shadow: 0 0 10px var(--cyber-primary);
  animation: pulse-line 3s ease-in-out infinite;
}

.learning-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
}

.learning-item:nth-child(even) {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: 50%;
}

.learning-marker {
  position: absolute;
  left: 50%;
  top: 1rem;
  width: 16px;
  height: 16px;
  background: var(--cyber-primary);
  border: 2px solid var(--cyber-bg);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
  box-shadow:
    0 0 20px var(--cyber-primary),
    inset 0 0 10px rgba(0, 255, 159, 0.3);
  animation: pulse-marker 2s ease-in-out infinite;
}

.learning-content {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 159, 0.3);
  padding: 2rem;
  border-radius: 15px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 255, 159, 0.1);
  max-width: 350px;
  margin-right: 2rem;
  position: relative;
  overflow: hidden;
}

.learning-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyber-primary), transparent);
  animation: scan-line 3s linear infinite;
}

.learning-item:nth-child(even) .learning-content {
  margin-right: 0;
  margin-left: 2rem;
}

.learning-period {
  color: var(--cyber-accent);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 10px var(--cyber-accent);
  letter-spacing: 1px;
}

.learning-title {
  font-size: 1.3rem;
  color: var(--cyber-primary);
  margin-bottom: 1rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 10px var(--cyber-primary);
}

.learning-description {
  color: var(--cyber-text-dim);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.learning-skills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.skill-tag {
  background: rgba(0, 255, 159, 0.1);
  color: var(--cyber-primary);
  border: 1px solid rgba(0, 255, 159, 0.3);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Rajdhani', sans-serif;
  text-shadow: 0 0 5px var(--cyber-primary);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(0, 255, 159, 0.2);
  box-shadow: 0 0 15px rgba(0, 255, 159, 0.3);
  transform: scale(1.05);
}

.certificates-section {
  margin-bottom: 4rem;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.certificate-card {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 159, 0.3);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 255, 159, 0.1);
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.certificate-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyber-accent), transparent);
  transition: left 0.6s ease;
}

.certificate-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--cyber-primary);
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(0, 255, 159, 0.3);
}

.certificate-card:hover::before {
  left: 100%;
}

.certificate-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px var(--cyber-primary));
  animation: float 3s ease-in-out infinite;
}

.certificate-title {
  color: var(--cyber-primary);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 10px var(--cyber-primary);
}

.certificate-issuer {
  color: var(--cyber-accent);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Rajdhani', sans-serif;
  text-shadow: 0 0 5px var(--cyber-accent);
}

.certificate-date {
  color: var(--cyber-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 5px var(--cyber-secondary);
}

.certificate-description {
  color: var(--cyber-text-dim);
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .skills-categories {
    grid-template-columns: 1fr;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }

  .learning-timeline::before {
    left: 2rem;
  }

  .learning-item {
    justify-content: flex-start !important;
    padding-left: 4rem !important;
    padding-right: 0 !important;
  }

  .learning-marker {
    left: 2rem !important;
  }

  .learning-content {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .certificates-grid {
    grid-template-columns: 1fr;
  }
}
</style>
