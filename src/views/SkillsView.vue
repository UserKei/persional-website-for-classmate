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
                type: 'spring'
              } 
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
                    delay: (categoryIndex * 200) + (skillIndex * 100)
                  } 
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
                        delay: (categoryIndex * 200) + (skillIndex * 100) + 200
                      } 
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
                type: 'spring'
              } 
            }"
            :hover="{ 
              y: -5, 
              scale: 1.05,
              transition: { duration: 200 }
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
                type: 'spring'
              } 
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
                      delay: (index * 200) + (skillIndex * 50) + 400
                    } 
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
                type: 'spring'
              } 
            }"
            :hover="{ 
              y: -5, 
              scale: 1.02,
              transition: { duration: 200 }
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
        name: 'Node.js',
        level: 70,
        description: '熟悉Express框架，能够构建RESTful API',
      },
      {
        name: 'Python',
        level: 75,
        description: '掌握基础语法和面向对象编程，了解Django框架',
      },
      {
        name: 'Java',
        level: 60,
        description: '理解面向对象编程思想，学习Spring Boot框架',
      },
      {
        name: 'SQL',
        level: 65,
        description: '熟练编写查询语句，了解数据库设计原则',
      },
    ],
  },
  {
    name: '数据库',
    icon: '🗄️',
    skills: [
      {
        name: 'MySQL',
        level: 70,
        description: '熟悉关系型数据库设计和性能优化',
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
    name: '工具与部署',
    icon: '🛠️',
    skills: [
      {
        name: 'Git',
        level: 80,
        description: '熟练使用版本控制，了解团队协作流程',
      },
      {
        name: 'Docker',
        level: 45,
        description: '了解容器化部署的基本概念',
      },
      {
        name: 'Linux',
        level: 55,
        description: '熟悉基本命令和服务器操作',
      },
    ],
  },
])

const tools = ref<Tool[]>([
  {
    name: 'Visual Studio Code',
    icon: '💻',
    description: '主要开发工具，熟练使用各种插件和快捷键',
    tags: ['编辑器', '调试', '插件'],
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
    name: 'Figma',
    icon: '🎯',
    description: 'UI设计工具，原型制作和协作',
    tags: ['设计', '原型', '协作'],
  },
  {
    name: 'Webpack',
    icon: '📦',
    description: '模块打包工具，了解构建优化',
    tags: ['打包', '构建', '优化'],
  },
  {
    name: 'ESLint',
    icon: '✅',
    description: '代码质量检查工具，保持编码规范',
    tags: ['代码质量', '规范', 'lint'],
  },
])

const learningPath = ref<LearningItem[]>([
  {
    id: 1,
    period: '2022年',
    title: '编程基础',
    description: '学习计算机基础知识，掌握第一门编程语言Python，了解算法和数据结构。',
    skills: ['Python', '算法', '数据结构', '计算机基础'],
  },
  {
    id: 2,
    period: '2023年上半年',
    title: 'Web前端入门',
    description: '开始学习Web前端技术，掌握HTML、CSS、JavaScript基础知识。',
    skills: ['HTML', 'CSS', 'JavaScript', 'DOM操作'],
  },
  {
    id: 3,
    period: '2023年下半年',
    title: '前端框架学习',
    description: '深入学习Vue.js框架，了解组件化开发和现代前端工程化。',
    skills: ['Vue.js', '组件化', 'Webpack', 'npm'],
  },
  {
    id: 4,
    period: '2024年上半年',
    title: '全栈开发',
    description: '学习后端开发技术，掌握Node.js和数据库操作，完成全栈项目。',
    skills: ['Node.js', 'Express', 'MongoDB', 'RESTful API'],
  },
  {
    id: 5,
    period: '2024年下半年',
    title: '技术深化',
    description: '学习TypeScript和React，了解更多后端技术和部署方案。',
    skills: ['TypeScript', 'React', 'Java', 'Spring Boot', 'Docker'],
  },
])

const certificates = ref<Certificate[]>([
  {
    id: 1,
    title: '全国计算机等级考试二级',
    issuer: '教育部考试中心',
    date: '2023.03',
    description: '通过Python语言程序设计考试，掌握编程基础',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'JavaScript算法与数据结构',
    issuer: 'freeCodeCamp',
    date: '2023.08',
    description: '完成在线编程挑战，提升算法思维能力',
    icon: '📜',
  },
  {
    id: 3,
    title: '响应式Web设计',
    issuer: 'freeCodeCamp',
    date: '2023.06',
    description: '掌握现代Web设计原则和最佳实践',
    icon: '🎨',
  },
  {
    id: 4,
    title: '大学生程序设计竞赛三等奖',
    issuer: '学校计算机学院',
    date: '2024.05',
    description: '在校级编程竞赛中获得好成绩',
    icon: '🥉',
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

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
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
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 1.3rem;
}

.category-icon {
  font-size: 1.5rem;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 1rem;
}

.skill-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: #2c3e50;
}

.skill-level {
  font-size: 0.9rem;
  color: #3498db;
  font-weight: 600;
}

.skill-bar {
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.skill-progress {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
}

.skill-progress.expert {
  background: linear-gradient(90deg, #27ae60, #2ecc71);
}

.skill-progress.advanced {
  background: linear-gradient(90deg, #3498db, #5dade2);
}

.skill-progress.intermediate {
  background: linear-gradient(90deg, #f39c12, #f7dc6f);
}

.skill-progress.beginner {
  background: linear-gradient(90deg, #e74c3c, #ec7063);
}

.skill-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
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
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
}

.tool-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.tool-name {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.tool-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.tool-tags {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
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
  width: 2px;
  background: #3498db;
  transform: translateX(-50%);
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
  width: 12px;
  height: 12px;
  background: #3498db;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.learning-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  margin-right: 2rem;
}

.learning-item:nth-child(even) .learning-content {
  margin-right: 0;
  margin-left: 2rem;
}

.learning-period {
  color: #3498db;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.learning-title {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.learning-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.learning-skills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.skill-tag {
  background: #e8f5e8;
  color: #4caf50;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
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
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.certificate-card:hover {
  transform: translateY(-5px);
}

.certificate-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.certificate-title {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.certificate-issuer {
  color: #3498db;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.certificate-date {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.certificate-description {
  color: #666;
  line-height: 1.6;
  font-size: 0.9rem;
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
