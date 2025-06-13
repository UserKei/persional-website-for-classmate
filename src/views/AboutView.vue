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
              <img src="/src/assets/avatar.jpg" alt="陈梓涛" class="avatar-image" />
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
              软件工程专业在读 - 广州大学
            </h2>
            <p
              class="about-description"
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 600 } }"
            >
              我是陈梓涛，一名热爱编程的软件工程专业大学生，于2023年入学广州大学。
              对Web开发、移动应用开发和软件工程领域充满热情。
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
                type: 'spring',
              },
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
            class="interest-card hud-border energy-pulse"
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
                type: 'spring',
              },
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
            class="value-item scan-lines cyber-interference"
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
                stiffness: 120,
              },
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
    date: '2023 - 至今',
    title: '软件工程专业 - 广州大学',
    description:
      '在广州大学软件工程专业学习，专注于软件开发方法学、系统分析与设计、编程基础等核心课程，并积极参与各类编程项目和实践活动。',
    tags: ['软件工程', '系统设计', '编程实践', '项目管理'],
  },
  {
    id: 2,
    date: '2023下半年',
    title: 'Web开发入门',
    description: '开始学习前端开发技术，掌握HTML、CSS、JavaScript基础，并深入学习Vue.js框架。',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
  },
  {
    id: 3,
    date: '2024',
    title: '全栈开发探索',
    description:
      '拓展后端开发技能，学习Node.js、数据库设计，完成了多个全栈项目，提升软件开发综合能力。',
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
  min-height: 100vh;
  padding: 2rem 0;
  position: relative;
}

/* 数字雨背景效果 */
.about::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(90deg, transparent, rgba(0, 255, 159, 0.03), transparent),
    linear-gradient(0deg, transparent, rgba(0, 212, 255, 0.02), transparent);
  background-size:
    100px 100px,
    150px 150px;
  animation: matrix-rain 20s linear infinite;
  z-index: -1;
  pointer-events: none;
}

@keyframes matrix-rain {
  0% {
    transform: translateY(-100vh) translateX(0);
  }
  100% {
    transform: translateY(100vh) translateX(50px);
  }
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
  width: 250px;
  height: 250px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid var(--cyber-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 0 30px rgba(0, 255, 159, 0.4),
    inset 0 0 30px rgba(0, 255, 159, 0.1);
}

.avatar::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    transparent,
    var(--cyber-primary),
    transparent,
    var(--cyber-accent),
    transparent
  );
  animation: hologram-spin 4s linear infinite;
  z-index: -1;
}

@keyframes hologram-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.avatar-emoji {
  font-size: 5rem;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: contrast(1.1) brightness(1.1);
}

.about-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--cyber-primary);
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 20px var(--cyber-primary);
}

.about-subtitle {
  font-size: 1.5rem;
  color: var(--cyber-accent);
  margin-bottom: 1.5rem;
  font-family: 'Orbitron', monospace;
  letter-spacing: 1px;
  text-shadow: 0 0 10px var(--cyber-accent);
}

.about-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--cyber-text-dim);
  margin-bottom: 2rem;
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

@keyframes pulse-line {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
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

@keyframes pulse-marker {
  0%,
  100% {
    transform: translateX(-50%) scale(1);
    box-shadow: 0 0 20px var(--cyber-primary);
  }
  50% {
    transform: translateX(-50%) scale(1.2);
    box-shadow: 0 0 30px var(--cyber-primary);
  }
}

.timeline-content {
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

.timeline-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyber-primary), transparent);
  animation: scan-line 3s linear infinite;
}

@keyframes scan-line {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.timeline-item:nth-child(even) .timeline-content {
  margin-right: 0;
  margin-left: 2rem;
}

.timeline-date {
  color: var(--cyber-accent);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 10px var(--cyber-accent);
  letter-spacing: 1px;
}

.timeline-title {
  font-size: 1.3rem;
  color: var(--cyber-primary);
  margin-bottom: 1rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 10px var(--cyber-primary);
}

.timeline-description {
  color: var(--cyber-text-dim);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-tags {
  display: flex;
  gap: 0.5rem;
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

.interest-card::before,
.value-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyber-accent), transparent);
  transition: left 0.6s ease;
}

.interest-card:hover,
.value-item:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--cyber-primary);
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(0, 255, 159, 0.3);
}

.interest-card:hover::before,
.value-item:hover::before {
  left: 100%;
}

.interest-icon,
.value-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px var(--cyber-primary));
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.interest-title,
.value-title {
  font-size: 1.4rem;
  color: var(--cyber-primary);
  margin-bottom: 1rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 10px var(--cyber-primary);
  letter-spacing: 1px;
}

.interest-description,
.value-description {
  color: var(--cyber-text-dim);
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
