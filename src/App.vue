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
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <RouterLink to="/" class="nav-brand">张同学</RouterLink>
      <div class="nav-menu">
        <RouterLink to="/" class="nav-link">首页</RouterLink>
        <RouterLink to="/about" class="nav-link">关于我</RouterLink>
        <RouterLink to="/projects" class="nav-link">项目</RouterLink>
        <RouterLink to="/skills" class="nav-link">技能</RouterLink>
        <RouterLink to="/contact" class="nav-link">联系</RouterLink>
      </div>
    </div>
  </nav>

  <main class="main-content">
    <RouterView />
  </main>

  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 张同学. All rights reserved.</p>
      <div class="social-links">
        <a href="https://github.com" target="_blank" class="social-link">GitHub</a>
        <a href="https://linkedin.com" target="_blank" class="social-link">LinkedIn</a>
        <a href="mailto:your-email@example.com" class="social-link">Email</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-brand:hover {
  color: #3498db;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #3498db;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #3498db;
  border-radius: 1px;
}

.main-content {
  margin-top: 80px;
  min-height: calc(100vh - 160px);
}

.footer {
  background: #2c3e50;
  color: white;
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
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #3498db;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-menu {
    gap: 1rem;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
