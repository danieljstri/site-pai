<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <Leaf class="h-8 w-8 text-green-600 mr-2" />
              <span class="text-xl font-bold text-gray-800">EcoConsult</span>
            </div>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <button 
              v-for="item in menuItems" 
              :key="item.id"
              @click="currentPage = item.id"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                currentPage === item.id 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              ]"
            >
              {{ item.name }}
            </button>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700">
              <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
              <X v-else class="h-6 w-6" />
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <button 
              v-for="item in menuItems" 
              :key="item.id"
              @click="currentPage = item.id; mobileMenuOpen = false"
              :class="[
                'block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors',
                currentPage === item.id 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              ]"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <!-- Homepage -->
      <div v-if="currentPage === 'home'">
        <!-- Hero Section -->
        <section class="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              Consultoria Ambiental Especializada
            </h1>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Garantimos a conformidade ambiental da sua empresa com soluções completas em licenciamento, vistoria e manutenção de licenças.
            </p>
            <button 
              @click="currentPage = 'contatos'"
              class="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Entre em Contato
            </button>
          </div>
        </section>

        <!-- Services Preview -->
        <section class="py-16 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Serviços</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div v-for="service in services.slice(0, 4)" :key="service.title" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <component :is="service.icon" class="h-12 w-12 text-green-600 mb-4" />
                <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ service.title }}</h3>
                <p class="text-gray-600">{{ service.description }}</p>
              </div>
            </div>
            <div class="text-center mt-8">
              <button 
                @click="currentPage = 'servicos'"
                class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Ver Todos os Serviços
              </button>
            </div>
          </div>
        </section>

        <!-- Client Carousel -->
        <section class="py-16 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Clientes</h2>
            <div class="relative overflow-hidden">
              <div 
                class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
              >
                <div 
                  v-for="(slide, index) in clientSlides" 
                  :key="index"
                  class="w-full flex-shrink-0"
                >
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                    <div 
                      v-for="client in slide" 
                      :key="client.name"
                      class="bg-gray-100 p-6 rounded-lg w-32 h-20 flex items-center justify-center"
                    >
                      <span class="text-gray-600 font-semibold text-sm text-center">{{ client.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Carousel Controls -->
              <button 
                @click="prevSlide"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
              >
                <ChevronLeft class="h-6 w-6 text-gray-600" />
              </button>
              <button 
                @click="nextSlide"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
              >
                <ChevronRight class="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </section>
      </div>

      <!-- Services Page -->
      <div v-if="currentPage === 'servicos'" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold text-center text-gray-800 mb-4">Nossos Serviços</h1>
          <p class="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Oferecemos soluções completas em consultoria ambiental para garantir a conformidade da sua empresa.
          </p>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div v-for="service in services" :key="service.title" class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <component :is="service.icon" class="h-16 w-16 text-green-600 mb-6" />
              <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ service.title }}</h3>
              <p class="text-gray-600 mb-4">{{ service.description }}</p>
              <ul class="space-y-2">
                <li v-for="item in service.details" :key="item" class="flex items-start">
                  <Check class="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- About Page -->
      <div v-if="currentPage === 'sobre'" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Sobre a EcoConsult</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Especialistas em consultoria ambiental com anos de experiência no mercado.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
              <p class="text-gray-600 mb-6">
                Garantir que empresas de todos os portes mantenham-se em conformidade com as regulamentações ambientais, 
                oferecendo soluções personalizadas e eficientes que protegem tanto o meio ambiente quanto os interesses comerciais.
              </p>
              <p class="text-gray-600">
                Nossa equipe de especialistas trabalha com dedicação para simplificar processos complexos e manter 
                sua empresa sempre em dia com todas as exigências legais.
              </p>
            </div>
            <div class="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-lg">
              <Shield class="h-24 w-24 text-green-600 mx-auto mb-6" />
              <h3 class="text-2xl font-bold text-center text-gray-800 mb-4">Compromisso com a Excelência</h3>
              <p class="text-center text-gray-600">
                Mais de 500 empresas atendidas com 100% de aprovação em licenciamentos.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <Users class="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 class="text-xl font-bold text-gray-800 mb-2">Equipe Especializada</h3>
              <p class="text-gray-600">Profissionais qualificados e experientes</p>
            </div>
            <div class="text-center">
              <Award class="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 class="text-xl font-bold text-gray-800 mb-2">Qualidade Garantida</h3>
              <p class="text-gray-600">Processos certificados e resultados comprovados</p>
            </div>
            <div class="text-center">
              <Clock class="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 class="text-xl font-bold text-gray-800 mb-2">Agilidade</h3>
              <p class="text-gray-600">Prazos cumpridos e atendimento eficiente</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Accessibility Page -->
      <div v-if="currentPage === 'acessibilidade'" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Laudo de Acessibilidade</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Garantimos que seu estabelecimento esteja em conformidade com as normas de acessibilidade.
            </p>
          </div>

          <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-12">
            <div class="flex items-center mb-6">
              <Accessibility class="h-12 w-12 mr-4" />
              <h2 class="text-3xl font-bold">Por que é importante?</h2>
            </div>
            <p class="text-lg">
              O laudo de acessibilidade é obrigatório para diversos tipos de estabelecimentos e garante que pessoas 
              com deficiência ou mobilidade reduzida tenham acesso adequado às instalações.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-6">O que analisamos:</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <Check class="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-800">Acessos e Circulação</h4>
                    <p class="text-gray-600">Rampas, corredores, portas e passagens</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <Check class="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-800">Sanitários Adaptados</h4>
                    <p class="text-gray-600">Banheiros com equipamentos adequados</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <Check class="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-800">Sinalização</h4>
                    <p class="text-gray-600">Placas em braile e sinalização visual</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <Check class="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-gray-800">Estacionamento</h4>
                    <p class="text-gray-600">Vagas reservadas e adequadas</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 p-8 rounded-lg">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">Nosso Processo:</h3>
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Vistoria Técnica</h4>
                    <p class="text-gray-600">Análise completa das instalações</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Relatório Detalhado</h4>
                    <p class="text-gray-600">Documentação de conformidades e não-conformidades</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Emissão do Laudo</h4>
                    <p class="text-gray-600">Documento oficial com validade legal</p>
                  </div>
                </div>
              </div>

              <div class="mt-8 p-4 bg-blue-50 rounded-lg">
                <p class="text-blue-800 font-semibold">
                  💡 Dica: O laudo deve ser renovado periodicamente conforme a legislação local.
                </p>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <button 
              @click="currentPage = 'contatos'"
              class="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-colors"
            >
              Solicite seu Laudo de Acessibilidade
            </button>
          </div>
        </div>
      </div>

      <!-- Contact Page -->
      <div v-if="currentPage === 'contatos'" class="py-16">
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
                  class="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
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
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <Leaf class="h-8 w-8 text-green-400 mr-2" />
              <span class="text-xl font-bold">EcoConsult</span>
            </div>
            <p class="text-gray-300">
              Sua parceira em consultoria ambiental, garantindo conformidade e sustentabilidade.
            </p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Serviços</h4>
            <ul class="space-y-2 text-gray-300">
              <li>Licenciamento Ambiental</li>
              <li>Vistoria Ambiental</li>
              <li>Controle de Licenças</li>
              <li>Laudo de Acessibilidade</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Empresa</h4>
            <ul class="space-y-2 text-gray-300">
              <li><button @click="currentPage = 'sobre'" class="hover:text-green-400">Sobre Nós</button></li>
              <li><button @click="currentPage = 'servicos'" class="hover:text-green-400">Serviços</button></li>
              <li><button @click="currentPage = 'contatos'" class="hover:text-green-400">Contato</button></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Contato</h4>
            <div class="space-y-2 text-gray-300">
              <p>(11) 9999-9999</p>
              <p>contato@ecoconsult.com.br</p>
              <p>São Paulo - SP</p>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 EcoConsult. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { 
  Leaf, Menu, X, Check, Shield, Users, Award, Clock, Phone, Mail, MapPin,
  ChevronLeft, ChevronRight, FileText, Eye, Settings, Accessibility
} from 'lucide-vue-next'

export default {
  name: 'EcoConsultApp',
  components: {
    Leaf, Menu, X, Check, Shield, Users, Award, Clock, Phone, Mail, MapPin,
    ChevronLeft, ChevronRight, FileText, Eye, Settings, Accessibility
  },
  data() {
    return {
      currentPage: 'home',
      mobileMenuOpen: false,
      currentSlide: 0,
      carouselInterval: null,
      form: {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      },
      menuItems: [
        { id: 'home', name: 'Início' },
        { id: 'servicos', name: 'Serviços' },
        { id: 'sobre', name: 'Sobre' },
        { id: 'acessibilidade', name: 'Acessibilidade' },
        { id: 'contatos', name: 'Contatos' }
      ],
      services: [
        {
          title: 'Licenciamento Ambiental',
          description: 'Obtenção e renovação de licenças ambientais para sua empresa.',
          icon: 'FileText',
          details: [
            'Licença Prévia (LP)',
            'Licença de Instalação (LI)',
            'Licença de Operação (LO)',
            'Renovação de licenças',
            'Acompanhamento processual'
          ]
        },
        {
          title: 'Vistoria Ambiental',
          description: 'Inspeções técnicas para verificar conformidade ambiental.',
          icon: 'Eye',
          details: [
            'Vistoria de instalações',
            'Avaliação de impactos',
            'Relatórios técnicos',
            'Identificação de não-conformidades',
            'Planos de adequação'
          ]
        },
        {
          title: 'Controle de Licenças',
          description: 'Monitoramento e controle de validade das suas licenças.',
          icon: 'Settings',
          details: [
            'Controle de prazos',
            'Alertas de vencimento',
            'Renovações automáticas',
            'Gestão documental',
            'Relatórios periódicos'
          ]
        },
        {
          title: 'Consultoria de Manutenção',
          description: 'Suporte contínuo para manter sua empresa em conformidade.',
          icon: 'Shield',
          details: [
            'Consultoria preventiva',
            'Treinamento de equipes',
            'Auditorias internas',
            'Planos de emergência',
            'Suporte técnico 24h'
          ]
        },
        {
          title: 'Controle de Extintores',
          description: 'Manutenção e controle de equipamentos de combate a incêndio.',
          icon: 'Shield',
          details: [
            'Inspeção mensal',
            'Manutenção preventiva',
            'Recarga de extintores',
            'Certificação INMETRO',
            'Relatórios de conformidade'
          ]
        },
        {
          title: 'Laudo de Acessibilidade',
          description: 'Avaliação e certificação de acessibilidade em estabelecimentos.',
          icon: 'Accessibility',
          details: [
            'Vistoria técnica completa',
            'Análise de conformidade NBR 9050',
            'Relatório detalhado',
            'Certificado de acessibilidade',
            'Orientações para adequação'
          ]
        }
      ],
      clients: [
        { name: 'Empresa A' },
        { name: 'Empresa B' },
        { name: 'Empresa C' },
        { name: 'Empresa D' },
        { name: 'Empresa E' },
        { name: 'Empresa F' },
        { name: 'Empresa G' },
        { name: 'Empresa H' },
        { name: 'Empresa I' },
        { name: 'Empresa J' },
        { name: 'Empresa K' },
        { name: 'Empresa L' }
      ]
    }
  },
  computed: {
    clientSlides() {
      const slides = []
      for (let i = 0; i < this.clients.length; i += 4) {
        slides.push(this.clients.slice(i, i + 4))
      }
      return slides
    }
  },
  mounted() {
    this.startCarousel()
  },
  beforeUnmount() {
    this.stopCarousel()
  },
  methods: {
    startCarousel() {
      this.carouselInterval = setInterval(() => {
        this.nextSlide()
      }, 4000)
    },
    stopCarousel() {
      if (this.carouselInterval) {
        clearInterval(this.carouselInterval)
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.clientSlides.length
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.clientSlides.length - 1 : this.currentSlide - 1
    },
    submitForm() {
      // Aqui você implementaria o envio do formulário
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      this.form = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
