<template>
  <div class="contact">
    <div class="container">
      <!-- Header -->
      <section class="contact-header">
        <h1
          class="page-title"
          v-motion
          :initial="{ opacity: 0, y: -50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          联系我
        </h1>
        <p
          class="page-description"
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        >
          很高兴认识您！如果您有任何问题或合作意向，欢迎通过以下方式联系我。
        </p>
      </section>

      <div class="contact-content">
        <!-- Contact Info -->
        <section class="contact-info">
          <h2
            class="section-title"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          >
            联系方式
          </h2>
          <div class="contact-cards">
            <div
              class="contact-card"
              v-for="(contact, index) in contactMethods"
              :key="contact.type"
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
                },
              }"
              :hover="{
                y: -5,
                scale: 1.05,
                transition: { duration: 200 },
              }"
            >
              <div class="contact-icon">{{ contact.icon }}</div>
              <h3 class="contact-title">{{ contact.title }}</h3>
              <p class="contact-value">{{ contact.value }}</p>
              <p class="contact-description">{{ contact.description }}</p>
              <a
                :href="contact.link"
                class="contact-button"
                :target="contact.external ? '_blank' : '_self'"
                v-motion
                :tap="{ scale: 0.95 }"
              >
                {{ contact.buttonText }}
              </a>
            </div>
          </div>
        </section>

        <!-- Contact Form -->
        <section class="contact-form-section">
          <h2
            class="section-title"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          >
            发送消息
          </h2>
          <form
            class="contact-form"
            @submit.prevent="submitForm"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          >
            <div class="form-row">
              <div
                class="form-group"
                v-motion
                :initial="{ opacity: 0, x: -30 }"
                :visible-once="{ opacity: 1, x: 0, transition: { duration: 400, delay: 300 } }"
              >
                <label for="name">姓名 *</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  :class="{ error: errors.name }"
                />
                <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
              </div>
              <div
                class="form-group"
                v-motion
                :initial="{ opacity: 0, x: 30 }"
                :visible-once="{ opacity: 1, x: 0, transition: { duration: 400, delay: 400 } }"
              >
                <label for="email">邮箱 *</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  :class="{ error: errors.email }"
                />
                <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
              </div>
            </div>
            <div
              class="form-group"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 500 } }"
            >
              <label for="subject">主题 *</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                :class="{ error: errors.subject }"
              />
              <span class="error-message" v-if="errors.subject">{{ errors.subject }}</span>
            </div>
            <div
              class="form-group"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 600 } }"
            >
              <label for="message">消息内容 *</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
                :class="{ error: errors.message }"
              ></textarea>
              <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
            </div>
            <button
              type="submit"
              class="submit-button"
              :disabled="isSubmitting"
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible-once="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 700 } }"
              :tap="{ scale: 0.95 }"
            >
              <span v-if="!isSubmitting">发送消息</span>
              <span v-else>发送中...</span>
            </button>
          </form>
        </section>
      </div>

      <!-- Social Media -->
      <section class="social-section">
        <h2
          class="section-title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          社交媒体
        </h2>
        <div class="social-grid">
          <a
            v-for="(social, index) in socialMedia"
            :key="social.name"
            :href="social.link"
            target="_blank"
            class="social-card"
            v-motion
            :initial="{ opacity: 0, y: 30, scale: 0.8 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 400,
                delay: index * 80,
                type: 'spring',
              },
            }"
            :hover="{
              y: -3,
              scale: 1.05,
              transition: { duration: 200 },
            }"
          >
            <div class="social-icon">{{ social.icon }}</div>
            <h3 class="social-name">{{ social.name }}</h3>
            <p class="social-description">{{ social.description }}</p>
          </a>
        </div>
      </section>

      <!-- FAQ -->
      <section class="faq-section">
        <h2
          class="section-title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          常见问题
        </h2>
        <div class="faq-list">
          <div
            class="faq-item"
            v-for="(faq, index) in faqs"
            :key="faq.id"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible-once="{
              opacity: 1,
              x: 0,
              transition: {
                duration: 500,
                delay: index * 100,
              },
            }"
          >
            <div class="faq-question" @click="toggleFaq(faq.id)" v-motion :tap="{ scale: 0.98 }">
              <h3>{{ faq.question }}</h3>
              <span class="faq-toggle" :class="{ active: faq.isOpen }">+</span>
            </div>
            <div class="faq-answer" :class="{ active: faq.isOpen }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface ContactMethod {
  type: string
  title: string
  value: string
  description: string
  icon: string
  link: string
  buttonText: string
  external: boolean
}

interface SocialMedia {
  name: string
  icon: string
  description: string
  link: string
}

interface FAQ {
  id: number
  question: string
  answer: string
  isOpen: boolean
}

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

const contactMethods = ref<ContactMethod[]>([
  {
    type: 'email',
    title: '邮箱',
    value: 'chenzitao@gzhu.edu.cn',
    description: '工作日内24小时回复',
    icon: '📧',
    link: 'mailto:chenzitao@gzhu.edu.cn',
    buttonText: '发送邮件',
    external: false,
  },
  {
    type: 'wechat',
    title: '微信',
    value: 'chenzitao_2023',
    description: '扫码添加好友',
    icon: '💬',
    link: '#',
    buttonText: '添加微信',
    external: false,
  },
  {
    type: 'phone',
    title: '电话',
    value: '+86 138-2023-0520',
    description: '工作时间：9:00-18:00',
    icon: '📱',
    link: 'tel:+8613820230520',
    buttonText: '拨打电话',
    external: false,
  },
  {
    type: 'location',
    title: '位置',
    value: '广州市番禺区 - 广州大学',
    description: '可面谈交流',
    icon: '📍',
    link: '#',
    buttonText: '查看位置',
    external: false,
  },
])

const socialMedia = ref<SocialMedia[]>([
  {
    name: 'GitHub',
    icon: '💻',
    description: '查看我的代码项目',
    link: 'https://github.com/chenzitao2023',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    description: '职业社交网络',
    link: 'https://linkedin.com/in/chenzitao',
  },
  {
    name: '知乎',
    icon: '💡',
    description: '技术文章分享',
    link: 'https://zhihu.com/people/chenzitao-gzhu',
  },
  {
    name: 'CSDN',
    icon: '📝',
    description: '技术博客文章',
    link: 'https://blog.csdn.net/chenzitao2023',
  },
  {
    name: 'B站',
    icon: '🎬',
    description: '编程教学视频',
    link: 'https://space.bilibili.com/chenzitao_code',
  },
  {
    name: 'QQ',
    icon: '🐧',
    description: '即时通讯',
    link: 'tencent://message/?uin=2023520888',
  },
])

const faqs = ref<FAQ[]>([
  {
    id: 1,
    question: '您目前在寻找实习机会吗？',
    answer:
      '是的，我正在寻找软件开发相关的实习机会，特别是前端开发或全栈开发岗位。作为软件工程专业的学生，我希望能够在实际项目中应用所学知识，并学习行业最佳实践。',
    isOpen: false,
  },
  {
    id: 2,
    question: '您最擅长哪种技术栈？',
    answer:
      '我最熟悉的是JavaScript生态系统，包括Vue.js、React、Node.js等。同时也在学习Java和Python后端开发，这些都是我们软件工程专业的核心课程。我相信持续学习新技术是程序员必备的素质。',
    isOpen: false,
  },
  {
    id: 3,
    question: '您有团队合作经验吗？',
    answer:
      '有的，我在广州大学参与了多个团队项目，包括软件工程课程设计和课外项目。我熟悉Git协作流程和敏捷开发方法，具备良好的沟通能力，能够与团队成员有效配合。',
    isOpen: false,
  },
  {
    id: 4,
    question: '您的项目源代码可以查看吗？',
    answer:
      '当然可以！我的大部分项目都开源在GitHub上，您可以查看代码实现和文档说明。我相信开源精神，也希望通过分享代码来学习和改进。',
    isOpen: false,
  },
  {
    id: 5,
    question: '您对薪资有什么期待？',
    answer:
      '作为学生，我更注重学习机会和成长空间。薪资方面可以根据市场行情和岗位要求协商，我相信通过努力工作和持续学习，薪资会随着能力提升而增长。',
    isOpen: false,
  },
])

const validateForm = () => {
  // 清空之前的错误
  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = ''
  })

  let isValid = true

  if (!form.name.trim()) {
    errors.name = '请输入您的姓名'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = '请输入您的邮箱'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = '请输入有效的邮箱地址'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = '请输入消息主题'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = '请输入消息内容'
    isValid = false
  } else if (form.message.length < 10) {
    errors.message = '消息内容至少需要10个字符'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // 模拟表单提交
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // 这里应该调用实际的API
    console.log('表单数据:', form)

    // 重置表单
    Object.keys(form).forEach((key) => {
      form[key as keyof typeof form] = ''
    })
    alert('消息发送成功！我会尽快回复您。')
  } catch (err) {
    console.error('发送失败:', err)
    alert('发送失败，请稍后再试。')
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (id: number) => {
  const faq = faqs.value.find((f) => f.id === id)
  if (faq) {
    faq.isOpen = !faq.isOpen
  }
}
</script>

<style scoped>
.contact {
  padding: 2rem 0;
  min-height: 100vh;
  position: relative;
}

/* 数字雨背景效果 */
.contact::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(45deg, transparent, rgba(0, 255, 159, 0.03), transparent),
    linear-gradient(-45deg, transparent, rgba(255, 0, 128, 0.03), transparent),
    radial-gradient(circle at 30% 80%, rgba(0, 212, 255, 0.05) 0%, transparent 50%);
  background-size:
    200px 200px,
    150px 150px,
    300px 300px;
  animation: cyber-matrix 15s linear infinite;
  z-index: -1;
  pointer-events: none;
}

@keyframes cyber-matrix {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-100px) rotate(5deg);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-header {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.contact-card {
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

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyber-accent), transparent);
  transition: left 0.6s ease;
}

.contact-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--cyber-primary);
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(0, 255, 159, 0.3);
}

.contact-card:hover::before {
  left: 100%;
}

.contact-icon {
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
    transform: translateY(-5px);
  }
}

.contact-title {
  color: var(--cyber-primary);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 10px var(--cyber-primary);
}

.contact-value {
  color: var(--cyber-accent);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Rajdhani', sans-serif;
  text-shadow: 0 0 5px var(--cyber-accent);
}

.contact-description {
  color: var(--cyber-text-dim);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.contact-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: var(--cyber-primary);
  text-decoration: none;
  border: 2px solid var(--cyber-primary);
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'Rajdhani', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-button::before {
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

.contact-button:hover {
  color: var(--cyber-bg);
  box-shadow: 0 0 20px var(--cyber-primary);
  text-shadow: none;
}

.contact-button:hover::before {
  left: 0;
}

.contact-form {
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
}

.contact-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyber-primary), transparent);
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

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--cyber-primary);
  font-weight: 600;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 5px var(--cyber-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(0, 255, 159, 0.3);
  border-radius: 10px;
  color: var(--cyber-text);
  font-size: 1rem;
  font-family: 'Rajdhani', sans-serif;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--cyber-text-dim);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--cyber-primary);
  box-shadow: 0 0 15px rgba(0, 255, 159, 0.3);
  background: rgba(0, 0, 0, 0.7);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #ff6b6b;
  box-shadow: 0 0 15px rgba(255, 107, 107, 0.3);
}

.error-message {
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  display: block;
  font-family: 'Rajdhani', sans-serif;
  text-shadow: 0 0 5px #ff6b6b;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  width: 100%;
  padding: 1.2rem;
  background: transparent;
  color: var(--cyber-primary);
  border: 2px solid var(--cyber-primary);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Orbitron', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-button::before {
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

.submit-button:hover:not(:disabled) {
  color: var(--cyber-bg);
  box-shadow: 0 0 30px var(--cyber-primary);
  text-shadow: none;
}

.submit-button:hover:not(:disabled)::before {
  left: 0;
}

.submit-button:disabled {
  background: rgba(0, 0, 0, 0.3);
  border-color: var(--cyber-text-dim);
  color: var(--cyber-text-dim);
  cursor: not-allowed;
  box-shadow: none;
}

.social-section {
  margin-bottom: 4rem;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.social-card {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 159, 0.3);
  padding: 2rem;
  border-radius: 15px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(0, 255, 159, 0.1);
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.social-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--cyber-accent), transparent);
  transition: left 0.5s ease;
}

.social-card:hover {
  transform: translateY(-8px) scale(1.05);
  border-color: var(--cyber-primary);
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.4),
    0 0 25px rgba(0, 255, 159, 0.3);
}

.social-card:hover::before {
  left: 100%;
}

.social-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px var(--cyber-accent));
  animation: float 3s ease-in-out infinite;
}

.social-name {
  color: var(--cyber-primary);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 5px var(--cyber-primary);
}

.social-description {
  color: var(--cyber-text-dim);
  font-size: 0.9rem;
  line-height: 1.4;
}

.faq-section {
  margin-bottom: 4rem;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 159, 0.3);
  border-radius: 15px;
  margin-bottom: 1rem;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(0, 255, 159, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.faq-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--cyber-accent), transparent);
  transition: left 0.5s ease;
}

.faq-item:hover {
  border-color: var(--cyber-primary);
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.4),
    0 0 25px rgba(0, 255, 159, 0.2);
}

.faq-item:hover::before {
  left: 100%;
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
}

.faq-question:hover {
  background: rgba(0, 255, 159, 0.05);
}

.faq-question h3 {
  margin: 0;
  color: var(--cyber-primary);
  font-size: 1.1rem;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 0 5px var(--cyber-primary);
  letter-spacing: 0.5px;
}

.faq-toggle {
  font-size: 1.5rem;
  color: var(--cyber-accent);
  transition: all 0.3s ease;
  text-shadow: 0 0 10px var(--cyber-accent);
  font-family: 'Orbitron', monospace;
}

.faq-toggle.active {
  transform: rotate(45deg);
  color: var(--cyber-primary);
  text-shadow: 0 0 15px var(--cyber-primary);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer.active {
  max-height: 200px;
}

.faq-answer p {
  padding: 0 1.5rem 1.5rem;
  margin: 0;
  color: var(--cyber-text-dim);
  line-height: 1.6;
  font-family: 'Rajdhani', sans-serif;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-cards {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .social-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
