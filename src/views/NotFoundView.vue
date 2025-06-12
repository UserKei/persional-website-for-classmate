<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1 class="error-title">页面未找到</h1>
        <p class="error-description">抱歉，您访问的页面不存在或已被移动。</p>
        <div class="error-actions">
          <router-link to="/" class="btn btn-primary">返回首页</router-link>
          <button @click="goBack" class="btn btn-secondary">返回上页</button>
        </div>
        <div class="error-suggestions">
          <h3>您可能在寻找：</h3>
          <ul class="suggestions-list">
            <li><router-link to="/about">关于我</router-link></li>
            <li><router-link to="/projects">项目展示</router-link></li>
            <li><router-link to="/skills">技能介绍</router-link></li>
            <li><router-link to="/contact">联系方式</router-link></li>
          </ul>
        </div>
      </div>
      <div class="error-illustration">
        <div class="illustration-container">
          <div class="floating-elements">
            <div class="element element-1">💻</div>
            <div class="element element-2">🔍</div>
            <div class="element element-3">📱</div>
            <div class="element element-4">⚡</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.not-found-content {
  color: white;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.error-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.error-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  border: none;
  font-size: 1rem;
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

.error-suggestions h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.suggestions-list {
  list-style: none;
  padding: 0;
}

.suggestions-list li {
  margin-bottom: 0.5rem;
}

.suggestions-list a {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.suggestions-list a:hover {
  opacity: 1;
}

.error-illustration {
  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration-container {
  position: relative;
  width: 300px;
  height: 300px;
}

.floating-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  font-size: 3rem;
  animation: float 3s ease-in-out infinite;
}

.element-1 {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.element-2 {
  top: 30%;
  right: 20%;
  animation-delay: 0.5s;
}

.element-3 {
  bottom: 30%;
  left: 30%;
  animation-delay: 1s;
}

.element-4 {
  bottom: 20%;
  right: 30%;
  animation-delay: 1.5s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(5deg);
  }
  50% {
    transform: translateY(0px) rotate(0deg);
  }
  75% {
    transform: translateY(-5px) rotate(-3deg);
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .error-code {
    font-size: 6rem;
  }

  .error-title {
    font-size: 2rem;
  }

  .error-actions {
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }

  .illustration-container {
    width: 200px;
    height: 200px;
  }

  .element {
    font-size: 2rem;
  }
}
</style>
