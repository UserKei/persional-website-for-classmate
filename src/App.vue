<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <nav
    class="navbar"
    :class="{ 'navbar-scrolled': isScrolled }"
    v-motion
    :initial="{ y: -100, opacity: 0 }"
    :enter="{ y: 0, opacity: 1, transition: { duration: 600, delay: 200 } }"
  >
    <div class="navbar-container">
      <RouterLink
        to="/"
        class="navbar-brand glitch-text"
        data-text="张同学"
        v-motion
        :initial="{ x: -50, opacity: 0 }"
        :enter="{ x: 0, opacity: 1, transition: { duration: 500, delay: 400 } }"
        :hover="{ scale: 1.1, transition: { duration: 200 } }"
      >
        张同学
      </RouterLink>
      <div class="navbar-menu">
        <RouterLink
          to="/"
          class="navbar-link"
          v-motion
          :initial="{ y: -20, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 400, delay: 500 } }"
          :hover="{ y: -2, transition: { duration: 200 } }"
        >
          首页
          <span class="navbar-link-underline"></span>
        </RouterLink>
        <RouterLink
          to="/about"
          class="navbar-link"
          v-motion
          :initial="{ y: -20, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 400, delay: 600 } }"
          :hover="{ y: -2, transition: { duration: 200 } }"
        >
          关于我
          <span class="navbar-link-underline"></span>
        </RouterLink>
        <RouterLink
          to="/projects"
          class="navbar-link"
          v-motion
          :initial="{ y: -20, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 400, delay: 700 } }"
          :hover="{ y: -2, transition: { duration: 200 } }"
        >
          项目
          <span class="navbar-link-underline"></span>
        </RouterLink>
        <RouterLink
          to="/skills"
          class="navbar-link"
          v-motion
          :initial="{ y: -20, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 400, delay: 800 } }"
          :hover="{ y: -2, transition: { duration: 200 } }"
        >
          技能
          <span class="navbar-link-underline"></span>
        </RouterLink>
        <RouterLink
          to="/contact"
          class="navbar-link"
          v-motion
          :initial="{ y: -20, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 400, delay: 900 } }"
          :hover="{ y: -2, transition: { duration: 200 } }"
        >
          联系
          <span class="navbar-link-underline"></span>
        </RouterLink>
      </div>
    </div>
  </nav>

  <main class="main-content">
    <RouterView />
  </main>

  <footer
    class="footer"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
  >
    <div class="footer-content">
      <p>&copy; 2025 张同学. All rights reserved.</p>
      <div class="social-links">
        <a
          href="https://github.com"
          target="_blank"
          class="social-link"
          v-motion
          :hover="{ scale: 1.1, transition: { duration: 200 } }"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          class="social-link"
          v-motion
          :hover="{ scale: 1.1, transition: { duration: 200 } }"
        >
          LinkedIn
        </a>
        <a
          href="mailto:student@example.com"
          class="social-link"
          v-motion
          :hover="{ scale: 1.1, transition: { duration: 200 } }"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* 导航栏样式 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 255, 159, 0.2);
  transition: all 0.3s ease;
}

.navbar-scrolled {
  background: rgba(0, 0, 0, 0.95);
  box-shadow:
    0 0 20px rgba(0, 255, 159, 0.3),
    0 0 40px rgba(0, 255, 159, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--cyber-primary);
  text-decoration: none;
  font-family: 'Orbitron', monospace;
  text-shadow: var(--cyber-glow) var(--cyber-primary);
  transition: all 0.3s ease;
}

.navbar-brand:hover {
  color: var(--cyber-accent);
  text-shadow: var(--cyber-glow) var(--cyber-accent);
}

.navbar-menu {
  display: flex;
  gap: 2rem;
}

.navbar-link {
  color: var(--cyber-accent);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
}

.navbar-link:hover {
  color: var(--cyber-primary);
  text-shadow: var(--cyber-glow) var(--cyber-primary);
}

.navbar-link.router-link-active {
  color: var(--cyber-primary);
  text-shadow: var(--cyber-glow) var(--cyber-primary);
}

.navbar-link-underline {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--cyber-primary);
  transition: width 0.3s ease;
  box-shadow: 0 0 10px var(--cyber-primary);
}

.navbar-link:hover .navbar-link-underline,
.navbar-link.router-link-active .navbar-link-underline {
  width: 100%;
}

/* 主内容区域 */
.main-content {
  padding-top: 80px;
  min-height: calc(100vh - 160px);
}

/* 页脚样式 */
.footer {
  background: rgba(0, 0, 0, 0.8);
  border-top: 1px solid var(--cyber-primary);
  color: var(--cyber-text);
  padding: 2rem 0;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: var(--cyber-accent);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border: 1px solid var(--cyber-accent);
  border-radius: 0;
}

.social-link:hover {
  color: var(--cyber-primary);
  border-color: var(--cyber-primary);
  box-shadow: 0 0 10px var(--cyber-primary);
  text-shadow: var(--cyber-glow) var(--cyber-primary);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .navbar-menu {
    gap: 1rem;
  }

  .navbar-brand {
    font-size: 1.3rem;
  }

  .main-content {
    padding-top: 120px;
  }

  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .social-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
