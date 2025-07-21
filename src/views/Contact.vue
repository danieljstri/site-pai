<template>
  <div>
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Escritório moderno - entre em contato conosco"
          class="hero-image"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title animate-fade-in-up">Entre em Contato</h1>
          <p class="hero-subtitle animate-fade-in-up">
            Estamos prontos para ajudar sua empresa com soluções ambientais personalizadas.
          </p>
        </div>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <div class="form-card">
              <div class="form-header">
                <div class="form-icon">
                  <Mail />
                </div>
                <h2>Envie sua Mensagem</h2>
                <p>Preencha o formulário e entraremos em contato em breve</p>
              </div>
              
              <form @submit.prevent="submitForm" class="contact-form">
                <div class="form-group">
                  <label class="form-label">Nome Completo</label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    required
                    class="form-input"
                    placeholder="Seu nome completo"
                  >
                </div>
                
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    required
                    class="form-input"
                    placeholder="seu@email.com"
                  >
                </div>
                
                <div class="form-group">
                  <label class="form-label">Telefone</label>
                  <input 
                    v-model="form.phone"
                    type="tel"
                    class="form-input"
                    placeholder="(11) 99999-9999"
                  >
                </div>
                
                <div class="form-group">
                  <label class="form-label">Serviço de Interesse</label>
                  <select 
                    v-model="form.service"
                    class="form-select"
                  >
                    <option value="">Selecione um serviço</option>
                    <option 
                      v-for="option in serviceOptions" 
                      :key="option.value" 
                      :value="option.value"
                    >
                      {{ option.label }}
                    </option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label class="form-label">Mensagem</label>
                  <textarea 
                    v-model="form.message"
                    rows="4"
                    required
                    class="form-textarea"
                    placeholder="Descreva como podemos ajudar sua empresa..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="btn btn-primary w-full"
                  :class="{ loading: isSubmitting }"
                >
                  <span v-if="!isSubmitting">Enviar Mensagem</span>
                  <span v-else class="flex items-center">
                    <div class="spinner"></div>
                    Enviando...
                  </span>
                </button>
              </form>

              <div 
                v-if="submitMessage" 
                class="alert mt-4" 
                :class="submitSuccess ? 'alert-success' : 'alert-error'"
              >
                {{ submitMessage }}
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="contact-info-section">
            <!-- Contact Details -->
            <div class="info-card">
              <div class="info-header">
                <div class="info-icon green">
                  <Phone />
                </div>
                <h3>Informações de Contato</h3>
              </div>
              
              <div class="contact-items">
                <div 
                  v-for="contact in contactInfo" 
                  :key="contact.type"
                  class="contact-item"
                >
                  <component :is="contact.icon" :class="`contact-icon ${contact.color}`" />
                  <div class="contact-details">
                    <h4>{{ contact.label }}</h4>
                    <p v-html="contact.value"></p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Schedule -->
            <div class="info-card">
              <div class="info-header">
                <div class="info-icon blue">
                  <Clock />
                </div>
                <h3>Horário de Atendimento</h3>
              </div>
              
              <div class="schedule-items">
                <div 
                  v-for="schedule in scheduleInfo" 
                  :key="schedule.day"
                  class="schedule-item"
                >
                  <span class="schedule-day">{{ schedule.day }}:</span>
                  <span class="schedule-hours">{{ schedule.hours }}</span>
                </div>
              </div>
            </div>

            <!-- Emergency Contact -->
            <div class="emergency-card">
              <div class="emergency-header">
                <div class="emergency-icon">
                  <AlertCircle />
                </div>
                <h3>Atendimento de Emergência</h3>
              </div>
              <p>Para situações urgentes relacionadas a licenças ambientais:</p>
              <div class="emergency-contact">
                <Phone />
                <div>
                  <p class="emergency-phone">{{ emergencyContact.phone }}</p>
                  <p class="emergency-availability">{{ emergencyContact.availability }}</p>
                </div>
              </div>
            </div>

            <!-- Location Image -->
            <div class="location-card">
              <div class="location-overlay">
                <MapPin />
                <span>São Paulo - SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-vue-next'
import type { ContactForm } from '@/types'

interface ServiceOption {
  value: string
  label: string
}

interface ContactInfo {
  type: string
  label: string
  value: string
  icon: any
  color: string
}

interface ScheduleInfo {
  day: string
  hours: string
}

interface EmergencyContact {
  phone: string
  availability: string
}

const isSubmitting = ref<boolean>(false)
const submitMessage = ref<string>('')
const submitSuccess = ref<boolean>(false)

const form = reactive<ContactForm>({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const serviceOptions: ServiceOption[] = [
  { value: 'licenciamento', label: 'Licenciamento Ambiental' },
  { value: 'vistoria', label: 'Vistoria Ambiental' },
  { value: 'controle', label: 'Controle de Licenças' },
  { value: 'acessibilidade', label: 'Laudo de Acessibilidade' },
  { value: 'consultoria', label: 'Consultoria Geral' }
]

const contactInfo: ContactInfo[] = [
  {
    type: 'phone',
    label: 'Telefone',
    value: '(11) 9999-9999',
    icon: Phone,
    color: 'primary'
  },
  {
    type: 'email',
    label: 'Email',
    value: 'contato@ecobrasil.com.br',
    icon: Mail,
    color: 'secondary'
  },
  {
    type: 'address',
    label: 'Endereço',
    value: 'Rua das Flores, 123<br>São Paulo - SP',
    icon: MapPin,
    color: 'primary'
  }
]

const scheduleInfo: ScheduleInfo[] = [
  { day: 'Segunda a Sexta', hours: '8h às 18h' },
  { day: 'Sábado', hours: '8h às 12h' },
  { day: 'Domingo', hours: 'Fechado' }
]

const emergencyContact: EmergencyContact = {
  phone: '(11) 9999-8888',
  availability: 'Disponível 24h para emergências'
}

const resetForm = (): void => {
  Object.assign(form, {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
}

const submitForm = async (): Promise<void> => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    submitMessage.value = 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    submitSuccess.value = true
    resetForm()
  } catch (error) {
    submitMessage.value = 'Erro ao enviar mensagem. Tente novamente.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-hero {
  position: relative;
  padding: var(--spacing-16) 0;
  min-height: 50vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 169, 87, 0.8),
    rgba(18, 50, 86, 0.7)
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

.hero-title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  margin-bottom: var(--spacing-4);
  color: var(--text-light);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: var(--font-size-lg);
  margin-bottom: 0;
  opacity: 0.95;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.contact-content {
  padding: var(--spacing-20) 0;
  background: linear-gradient(135deg, var(--gray-50), var(--primary-50));
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: start;
}

.form-card {
  background: white;
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  border: 2px solid var(--primary-100);
}

.form-header {
  background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
  color: white;
  padding: var(--spacing-8);
  text-align: center;
}

.form-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--spacing-4);
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-header h2 {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: var(--spacing-2);
}

.form-header p {
  opacity: 0.9;
  margin-bottom: 0;
}

.contact-form {
  padding: var(--spacing-8);
}

.info-card {
  background: white;
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-6);
  overflow: hidden;
  border: 2px solid transparent;
  transition: all var(--transition-normal);
}

.info-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--primary-100);
}

.info-header {
  padding: var(--spacing-6);
  border-bottom: 1px solid var(--gray-100);
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.info-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.info-icon.green {
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
}

.info-icon.blue {
  background: linear-gradient(135deg, var(--secondary-500), var(--secondary-600));
}

.info-header h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: 0;
}

.contact-items {
  padding: var(--spacing-6);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-4);
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-icon {
  width: 24px;
  height: 24px;
  margin-right: var(--spacing-4);
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-icon.primary {
  color: var(--primary-600);
}

.contact-icon.secondary {
  color: var(--secondary-600);
}

.contact-details h4 {
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: var(--spacing-1);
}

.contact-details p {
  color: var(--gray-600);
  margin-bottom: 0;
  line-height: 1.5;
}

.schedule-items {
  padding: var(--spacing-6);
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-3);
  padding: var(--spacing-2) 0;
  border-bottom: 1px solid var(--gray-100);
}

.schedule-item:last-child {
  margin-bottom: 0;
  border-bottom: none;
}

.schedule-day {
  color: var(--gray-600);
  font-weight: 500;
}

.schedule-hours {
  color: var(--gray-800);
  font-weight: 600;
}

.emergency-card {
  background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
  color: white;
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-8);
  margin-bottom: var(--spacing-6);
  box-shadow: var(--shadow-lg);
}

.emergency-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-4);
}

.emergency-icon {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
}

.emergency-header h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: 0;
}

.emergency-card p {
  opacity: 0.9;
  margin-bottom: var(--spacing-4);
  line-height: 1.6;
}

.emergency-contact {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  background: rgba(255, 255, 255, 0.1);
  padding: var(--spacing-4);
  border-radius: var(--border-radius);
}

.emergency-phone {
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-bottom: var(--spacing-1);
}

.emergency-availability {
  font-size: var(--font-size-sm);
  opacity: 0.8;
  margin-bottom: 0;
}

.location-card {
  position: relative;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.location-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.location-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: var(--spacing-4);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.location-overlay svg {
  width: 20px;
  height: 20px;
}

.w-full {
  width: 100%;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.mt-4 {
  margin-top: var(--spacing-4);
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }

  .contact-form-section {
    order: 2;
  }

  .contact-info-section {
    order: 1;
  }
}

@media (max-width: 768px) {
  .contact-hero {
    min-height: 40vh;
    padding: var(--spacing-12) 0;
  }

  .contact-content {
    padding: var(--spacing-16) 0;
  }

  .contact-grid {
    gap: var(--spacing-6);
  }

  .form-card,
  .info-card,
  .emergency-card {
    margin: 0 var(--spacing-2);
  }

  .form-header,
  .contact-form {
    padding: var(--spacing-6);
  }

  .info-header,
  .contact-items,
  .schedule-items {
    padding: var(--spacing-4);
  }

  .emergency-card {
    padding: var(--spacing-6);
  }

  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-2);
  }

  .contact-icon {
    margin-right: 0;
    margin-top: 0;
  }

  .schedule-item {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-1);
  }

  .emergency-contact {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .form-header h2 {
    font-size: var(--font-size-xl);
  }

  .info-header {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-2);
  }

  .emergency-header {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-2);
  }

  .location-overlay {
    justify-content: center;
  }
}
</style>
