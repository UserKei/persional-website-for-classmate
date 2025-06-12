<template>
  <div class="about">
    <div class="container">
      <!-- Header Section -->
      <section class="about-header">
        <div class="about-content">
          <div class="about-image">
            <div 
              class="avatar"
              v-motion
              :initial="{ scale: 0, rotate: 180 }"
              :enter="{ scale: 1, rotate: 0, transition: { duration: 800, type: 'spring' } }"
            >
              <span class="avatar-emoji">👨‍💻</span>
            </div>
          </div>
          <div class="about-text">
            <h1 
              class="about-title"
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
            >
              关于我
            </h1>
            <h2 
              class="about-subtitle"
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400 } }"
            >
              计算机科学与技术专业在读
            </h2>
            <p 
              class="about-description"
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 600 } }"
            >
              我是一名热爱编程的计算机专业大学生，对Web开发、移动应用开发和人工智能领域充满热情。
              在学习过程中，我不断探索新技术，通过实际项目锻炼自己的编程能力。
            </p>
          </div>
        </div>
      </section>

      <!-- Timeline Section -->
      <section class="timeline-section">
        <h2 
          class="section-title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          教育经历
        </h2>
        <div class="timeline">
          <div 
            class="timeline-item" 
            v-for="(item, index) in timeline" 
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
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-date">{{ item.date }}</div>
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-description">{{ item.description }}</p>
              <div class="timeline-tags">
                <span class="tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interests Section -->
      <section class="interests-section">
        <h2 
          class="section-title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          兴趣爱好
        </h2>
        <div class="interests-grid">
          <div 
            class="interest-card" 
            v-for="(interest, index) in interests" 
            :key="interest.title"
            v-motion
            :initial="{ opacity: 0, y: 50, rotateY: 45 }"
            :visible-once="{ 
              opacity: 1, 
              y: 0, 
              rotateY: 0,
              transition: { 
                duration: 600, 
                delay: index * 100,
                type: 'spring'
              } 
            }"
          >
            <div class="interest-icon">{{ interest.icon }}</div>
            <h3 class="interest-title">{{ interest.title }}</h3>
            <p class="interest-description">{{ interest.description }}</p>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section">
        <h2 
          class="section-title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          个人理念
        </h2>
        <div class="values-grid">
          <div 
            class="value-item" 
            v-for="(value, index) in values" 
            :key="value.title"
            v-motion
            :initial="{ opacity: 0, scale: 0.5, rotate: -10 }"
            :visible-once="{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              transition: { 
                duration: 500, 
                delay: index * 150,
                type: 'spring',
                stiffness: 120
              } 
            }"
          >
            <div class="value-icon">{{ value.icon }}</div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const timeline = ref([
  {
    id: 1,
    date: '2022 - 至今',
    title: '计算机科学与技术专业',
    description:
      '在大学期间专注学习编程基础、数据结构与算法、软件工程等核心课程，并积极参与各类编程竞赛和项目实践。',
    tags: ['数据结构', '算法', '软件工程', '数据库'],
  },
  {
    id: 2,
    date: '2023',
    title: 'Web开发入门',
    description: '开始学习前端开发技术，掌握HTML、CSS、JavaScript基础，并深入学习Vue.js框架。',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
  },
  {
    id: 3,
    date: '2024',
    title: '全栈开发探索',
    description: '拓展后端开发技能，学习Node.js、数据库设计，完成了多个全栈项目。',
    tags: ['Node.js', 'MongoDB', 'MySQL', 'Express'],
  },
])

const interests = ref([
  {
    title: '编程学习',
    icon: '💻',
    description: '热爱学习新的编程语言和技术框架，享受解决复杂问题的过程。',
  },
  {
    title: '开源贡献',
    icon: '🌟',
    description: '积极参与开源项目，为社区贡献自己的力量，同时学习优秀的代码实践。',
  },
  {
    title: '技术分享',
    icon: '📚',
    description: '喜欢记录学习心得，通过博客和技术文档分享知识和经验。',
  },
  {
    title: '产品设计',
    icon: '🎨',
    description: '关注用户体验设计，努力创造既美观又实用的产品界面。',
  },
])

const values = ref([
  {
    title: '持续学习',
    icon: '📈',
    description: '技术发展日新月异，保持学习的热情和好奇心是程序员的基本素养。',
  },
  {
    title: '代码质量',
    icon: '⚡',
    description: '追求简洁、高效、可维护的代码，注重编程规范和最佳实践。',
  },
  {
    title: '团队合作',
    icon: '🤝',
    description: '相信团队的力量，善于沟通协作，共同创造更大的价值。',
  },
  {
    title: '用户导向',
    icon: '🎯',
    description: '始终以用户需求为中心，开发真正解决问题的产品和服务。',
  },
])
</script>

<style scoped>
.about {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-header {
  margin-bottom: 4rem;
}

.about-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image {
  text-align: center;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.avatar-emoji {
  font-size: 5rem;
}

.about-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.about-subtitle {
  font-size: 1.3rem;
  color: #3498db;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.timeline-section {
  margin-bottom: 4rem;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #3498db;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
}

.timeline-item:nth-child(even) {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: 50%;
}

.timeline-marker {
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

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  margin-right: 2rem;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-right: 0;
  margin-left: 2rem;
}

.timeline-date {
  color: #3498db;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.timeline-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-tags {
  display: flex;
  gap: 0.5rem;
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

.interests-section,
.values-section {
  margin-bottom: 4rem;
}

.interests-grid,
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.interest-card,
.value-item {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.interest-card:hover,
.value-item:hover {
  transform: translateY(-5px);
}

.interest-icon,
.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.interest-title,
.value-title {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.interest-description,
.value-description {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .timeline::before {
    left: 2rem;
  }

  .timeline-item {
    justify-content: flex-start !important;
    padding-left: 4rem !important;
    padding-right: 0 !important;
  }

  .timeline-marker {
    left: 2rem !important;
  }

  .timeline-content {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .interests-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
