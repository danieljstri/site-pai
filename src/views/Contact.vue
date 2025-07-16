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
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
              <input 
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Serviço de Interesse</label>
              <select 
                v-model="form.service"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Selecione um serviço</option>
                <option value="licenciamento">Licenciamento Ambiental</option>
                <option value="vistoria">Vistoria Ambiental</option>
                <option value="controle">Controle de Licenças</option>
                <option value="acessibilidade">Laudo de Acessibilidade</option>
                <option value="consultoria">Consultoria Geral</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
              <textarea 
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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

          <div v-if="submitMessage" class="mt-4 p-4 rounded-lg" :class="submitSuccess ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'">
            {{ submitMessage }}
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <Phone class="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <p class="font-semibold text-gray-800">Telefone</p>
                  <p class="text-gray-600">(11) 9999-9999</p>
                </div>
              </div>
              <div class="flex items-center">
                <Mail class="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <p class="font-semibold text-gray-800">Email</p>
                  <p class="text-gray-600">contato@ecoconsult.com.br</p>
                </div>
              </div>
              <div class="flex items-center">
                <MapPin class="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <p class="font-semibold text-gray-800">Endereço</p>
                  <p class="text-gray-600">Rua das Flores, 123<br>São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Horário de Atendimento</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-600">Segunda a Sexta:</span>
                <span class="font-semibold text-gray-800">8h às 18h</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Sábado:</span>
                <span class="font-semibold text-gray-800">8h às 12h</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Domingo:</span>
                <span class="font-semibold text-gray-800">Fechado</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Atendimento de Emergência</h3>
            <p class="mb-4">Para situações urgentes relacionadas a licenças ambientais:</p>
            <p class="font-semibold">(11) 9999-8888</p>
            <p class="text-sm opacity-90">Disponível 24h para emergências</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Phone, Mail, MapPin } from 'lucide-vue-next'

export default {
  name: 'Contact',
  components: {
    Phone,
    Mail,
    MapPin
  },
  data() {
    return {
      isSubmitting: false,
      submitMessage: '',
      submitSuccess: false,
      form: {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      this.submitMessage = ''
      
      try {
        // Simular envio do formulário
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        this.submitMessage = 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        this.submitSuccess = true
        
        // Limpar formulário
        this.form = {
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        }
      } catch (error) {
        this.submitMessage = 'Erro ao enviar mensagem. Tente novamente.'
        this.submitSuccess = false
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>
