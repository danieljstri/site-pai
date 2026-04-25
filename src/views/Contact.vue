<template>
  <div class="page-dark">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content reveal">
          <h1 class="hero-title">Estamos à sua <span class="accent">disposição</span></h1>
          <p class="hero-subtitle">
            Entre em contato para discutir seu projeto ou tirar dúvidas sobre regularização ambiental e licenciamento.
          </p>
        </div>
      </div>
    </section>

    <section class="contact-main section-lg">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-section reveal">
            <div class="form-wrapper">
              <h2 class="form-title">Solicite uma Consultoria Técnica</h2>
              <form @submit.prevent="submitForm" class="modern-form">
                <div class="form-row">
                  <div class="form-group">
                    <label>Nome Completo</label>
                    <input v-model="form.name" type="text" required placeholder="Ex: João Silva">
                  </div>
                  <div class="form-group">
                    <label>E-mail Corporativo</label>
                    <input v-model="form.email" type="email" required placeholder="exemplo@empresa.com">
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <label>Telefone / WhatsApp</label>
                    <input v-model="form.phone" type="tel" placeholder="(00) 00000-0000">
                  </div>
                  <div class="form-group">
                    <label>Assunto</label>
                    <select v-model="form.service">
                      <option value="">Selecione um tema</option>
                      <option v-for="opt in serviceOptions" :key="opt.value" :value="opt.value">
                        {{ opt.label }}
                      </option>
                    </select>
                  </div>
                </div>
                
                <div class="form-group">
                  <label>Como podemos ajudar?</label>
                  <textarea v-model="form.message" rows="5" required placeholder="Descreva brevemente sua necessidade..."></textarea>
                </div>
                
                <button type="submit" :disabled="isSubmitting" class="btn-submit">
                  {{ isSubmitting ? 'Enviando...' : 'Enviar Solicitação' }}
                </button>
              </form>
              <div v-if="submitMessage" class="status-msg" :class="{ success: submitSuccess }">
                {{ submitMessage }}
              </div>
            </div>
          </div>

          <!-- Contact Sidebar -->
          <div class="contact-sidebar">
            <div class="info-card reveal">
              <div class="icon-box"><Phone :size="24" /></div>
              <div class="details">
                <h3>Telefone</h3>
                <p>(79) 3024-5555</p>
                <p>(79) 99999-0000 (WhatsApp)</p>
              </div>
            </div>

            <div class="info-card reveal delay-1">
              <div class="icon-box"><Mail :size="24" /></div>
              <div class="details">
                <h3>E-mail</h3>
                <p>contato@ecobrasil.com.br</p>
                <p>comercial@ecobrasil.com.br</p>
              </div>
            </div>

            <div class="info-card reveal delay-2">
              <div class="icon-box"><MapPin :size="24" /></div>
              <div class="details">
                <h3>Sede</h3>
                <p>Centro Empresarial Jardins<br>Aracaju - Sergipe</p>
              </div>
            </div>

            <div class="emergency-notice reveal">
              <AlertCircle class="alert-icon" />
              <div>
                <h4>Urgência Técnica?</h4>
                <p>Atendimento prioritário para renovação de licenças vencidas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
import { Phone, Mail, MapPin, AlertCircle } from 'lucide-vue-next'

useHead({
  title: 'Contato | EcoBrasil Consultoria Ambiental',
  meta: [
    {
      name: 'description',
      content: 'Entre em contato com a EcoBrasil para solicitar orçamentos de licenciamento ambiental, vistorias e consultoria técnica especializada.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://eco-brasil.vercel.app/contatos'
    }
  ]
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const form = reactive({ name: '', email: '', phone: '', service: '', message: '' })

const serviceOptions = [
  { value: 'licenciamento', label: 'Licenciamento Ambiental' },
  { value: 'vistoria', label: 'Vistoria / Inspeção' },
  { value: 'acessibilidade', label: 'Laudo de Acessibilidade' },
  { value: 'outros', label: 'Outros Assuntos' }
]

const submitForm = async () => {
  isSubmitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  submitSuccess.value = true
  submitMessage.value = 'Recebemos sua mensagem. Um consultor entrará em contato em breve.'
  isSubmitting.value = false
  Object.assign(form, { name: '', email: '', phone: '', service: '', message: '' })
}

let observer: IntersectionObserver | null = null
onMounted(() => {
  const revealElements = document.querySelectorAll('.reveal')
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active')
    })
  }, { threshold: 0.1 })
  revealElements.forEach(el => observer?.observe(el))
})
onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.page-dark { background-color: #0a1a12; color: #f0ede5; min-height: 100vh; }
.section-lg { padding: 120px 0; }

.contact-hero {
  height: 40vh;
  min-height: 350px;
  background: linear-gradient(rgba(10, 26, 18, 0.9), rgba(10, 26, 18, 0.9)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
}

.hero-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; margin-bottom: 20px; }
.accent { color: #c5a368; }
.hero-subtitle { color: #a8b0ab; font-size: 20px; max-width: 700px; margin: 0 auto; }

.contact-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 80px; }

.form-wrapper { background: #0d2319; padding: 60px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); }
.form-title { font-size: 28px; font-weight: 700; margin-bottom: 40px; color: #ffffff; }

.modern-form .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
.form-group { margin-bottom: 25px; display: flex; flex-direction: column; gap: 10px; }
.form-group label { font-size: 14px; font-weight: 600; color: #c5a368; text-transform: uppercase; letter-spacing: 0.1em; }

.form-group input, .form-group select, .form-group textarea {
  background: #0a1a12;
  border: 1px solid #1a3a2a;
  padding: 15px;
  color: #ffffff;
  font-size: 16px;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.form-group input:focus, .form-group textarea:focus { border-color: #c5a368; outline: none; }

.btn-submit {
  background: #c5a368;
  color: #0a1a12;
  border: none;
  padding: 18px 40px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
}

.btn-submit:hover { background: #d4b680; transform: translateY(-2px); }

.status-msg { margin-top: 20px; padding: 15px; border-radius: 4px; font-size: 14px; background: rgba(255,0,0,0.1); color: #ff6b6b; }
.status-msg.success { background: rgba(0,255,0,0.05); color: #00eb7a; border: 1px solid rgba(0,255,0,0.1); }

/* Sidebar Info Cards */
.info-card { background: #0d2319; padding: 30px; border-radius: 4px; display: flex; gap: 20px; margin-bottom: 20px; border-left: 3px solid #c5a368; }
.icon-box { color: #c5a368; }
.info-card h3 { font-size: 18px; margin-bottom: 10px; color: #ffffff; }
.info-card p { color: #a8b0ab; font-size: 15px; line-height: 1.5; margin: 0; }

.emergency-notice { background: rgba(197, 163, 104, 0.1); border: 1px solid #c5a368; padding: 30px; border-radius: 4px; display: flex; gap: 20px; color: #c5a368; margin-top: 40px; }
.emergency-notice h4 { margin-bottom: 5px; font-size: 18px; }
.emergency-notice p { font-size: 14px; margin: 0; opacity: 0.8; }

/* Reveal */
.reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 150ms; }
.delay-2 { transition-delay: 300ms; }

@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; gap: 60px; }
}

@media (max-width: 768px) {
  .section-lg { padding: 60px 0; }
  .hero-title { font-size: clamp(2rem, 8vw, 2.5rem); }
  .hero-subtitle { margin-left: auto; margin-right: auto; }
  .form-wrapper { padding: 40px 20px; }
  .modern-form .form-row { grid-template-columns: 1fr; gap: 20px; }
  .btn-submit { padding: 15px 20px; }
}
</style>
