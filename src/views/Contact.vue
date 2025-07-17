<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h1>
        <p class="text-xl text-gray-600">
          Estamos prontos para ajudar sua empresa com soluções ambientais personalizadas.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="form-group">
              <label class="form-label">Nome Completo</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="form-input focus-visible"
              >
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="form-input focus-visible"
              >
            </div>
            <div class="form-group">
              <label class="form-label">Telefone</label>
              <input 
                v-model="form.phone"
                type="tel"
                class="form-input focus-visible"
              >
            </div>
            <div class="form-group">
              <label class="form-label">Serviço de Interesse</label>
              <select 
                v-model="form.service"
                class="form-select focus-visible"
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
                class="form-textarea focus-visible"
              ></textarea>
            </div>
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50"
            >
              {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
            </button>
          </form>

          <div 
            v-if="submitMessage" 
            class="mt-4 alert" 
            :class="submitSuccess ? 'alert-success' : 'alert-error'"
          >
            {{ submitMessage }}
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
            <div class="space-y-4">
              <div 
                v-for="contact in contactInfo" 
                :key="contact.type"
                class="flex items-center"
              >
                <component :is="contact.icon" :class="`h-6 w-6 ${contact.color} mr-4`" />
                <div>
                  <p class="font-semibold text-gray-800">{{ contact.label }}</p>
                  <p class="text-gray-600" v-html="contact.value"></p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Horário de Atendimento</h3>
            <div class="space-y-2">
              <div 
                v-for="schedule in scheduleInfo" 
                :key="schedule.day"
                class="flex justify-between"
              >
                <span class="text-gray-600">{{ schedule.day }}:</span>
                <span class="font-semibold text-gray-800">{{ schedule.hours }}</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Atendimento de Emergência</h3>
            <p class="mb-4">Para situações urgentes relacionadas a licenças ambientais:</p>
            <p class="font-semibold">{{ emergencyContact.phone }}</p>
            <p class="text-sm opacity-90">{{ emergencyContact.availability }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, type Component } from 'vue'
import { Phone, Mail, MapPin } from 'lucide-vue-next'
import type { ContactForm } from '@/types'

interface ServiceOption {
  value: string
  label: string
}

interface ContactInfo {
  type: string
  label: string
  value: string
  icon: Component
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
    color: 'text-green-600'
  },
  {
    type: 'email',
    label: 'Email',
    value: 'contato@ecoconsult.com.br',
    icon: Mail,
    color: 'text-blue-600'
  },
  {
    type: 'address',
    label: 'Endereço',
    value: 'Rua das Flores, 123<br>São Paulo - SP',
    icon: MapPin,
    color: 'text-green-600'
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
