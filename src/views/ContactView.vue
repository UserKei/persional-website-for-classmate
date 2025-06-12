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
    value: 'student@example.com',
    description: '工作日内24小时回复',
    icon: '📧',
    link: 'mailto:student@example.com',
    buttonText: '发送邮件',
    external: false,
  },
  {
    type: 'wechat',
    title: '微信',
    value: 'your-wechat-id',
    description: '扫码添加好友',
    icon: '💬',
    link: '#',
    buttonText: '添加微信',
    external: false,
  },
  {
    type: 'phone',
    title: '电话',
    value: '+86 138-0000-0000',
    description: '工作时间：9:00-18:00',
    icon: '📱',
    link: 'tel:+8613800000000',
    buttonText: '拨打电话',
    external: false,
  },
  {
    type: 'location',
    title: '位置',
    value: '北京市海淀区',
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
    link: 'https://github.com/username',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    description: '职业社交网络',
    link: 'https://linkedin.com/in/username',
  },
  {
    name: '知乎',
    icon: '💡',
    description: '技术文章分享',
    link: 'https://zhihu.com/people/username',
  },
  {
    name: 'CSDN',
    icon: '📝',
    description: '技术博客文章',
    link: 'https://blog.csdn.net/username',
  },
  {
    name: 'B站',
    icon: '🎬',
    description: '编程教学视频',
    link: 'https://space.bilibili.com/username',
  },
  {
    name: 'QQ',
    icon: '🐧',
    description: '即时通讯',
    link: 'tencent://message/?uin=123456789',
  },
])

const faqs = ref<FAQ[]>([
  {
    id: 1,
    question: '您目前在寻找实习机会吗？',
    answer:
      '是的，我正在寻找Web开发相关的实习机会，特别是前端开发或全栈开发岗位。我希望能够在实际项目中应用所学知识，并学习行业最佳实践。',
    isOpen: false,
  },
  {
    id: 2,
    question: '您最擅长哪种技术栈？',
    answer:
      '我最熟悉的是JavaScript生态系统，包括Vue.js、React、Node.js等。同时也在学习Python和Java后端开发。我相信持续学习新技术是程序员必备的素质。',
    isOpen: false,
  },
  {
    id: 3,
    question: '您有团队合作经验吗？',
    answer:
      '有的，我在学校参与了多个团队项目，包括课程设计和课外项目。我熟悉Git协作流程，具备良好的沟通能力，能够与团队成员有效配合。',
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
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-title {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.contact-value {
  color: #3498db;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.contact-description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.contact-button {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.3s ease;
}

.contact-button:hover {
  background: #2980b9;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  color: #2c3e50;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
}

.form-group input.error,
.form-group textarea.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  display: block;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background: #2980b9;
}

.submit-button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
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
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.social-card:hover {
  transform: translateY(-5px);
}

.social-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.social-name {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.social-description {
  color: #666;
  font-size: 0.85rem;
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
  background: white;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;
}

.faq-question:hover {
  background: #f8f9fa;
}

.faq-question h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.faq-toggle {
  font-size: 1.5rem;
  color: #3498db;
  transition: transform 0.3s ease;
}

.faq-toggle.active {
  transform: rotate(45deg);
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
  color: #666;
  line-height: 1.6;
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
