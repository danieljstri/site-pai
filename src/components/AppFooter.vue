<template>
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
            <li v-for="service in servicesList" :key="service">{{ service }}</li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Empresa</h4>
          <ul class="space-y-2 text-gray-300">
            <li>
              <router-link to="/sobre" class="hover:text-green-400 transition-colors">
                Sobre Nós
              </router-link>
            </li>
            <li>
              <router-link to="/servicos" class="hover:text-green-400 transition-colors">
                Serviços
              </router-link>
            </li>
            <li>
              <router-link to="/contatos" class="hover:text-green-400 transition-colors">
                Contato
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Contato</h4>
          <div class="space-y-2 text-gray-300">
            <p>{{ contactInfo.phone }}</p>
            <p>{{ contactInfo.email }}</p>
            <p>{{ contactInfo.location }}</p>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; {{ currentYear }} EcoConsult. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Leaf } from 'lucide-vue-next'

interface ContactInfo {
  phone: string
  email: string
  location: string
}

const servicesList: string[] = [
  'Licenciamento Ambiental',
  'Vistoria Ambiental',
  'Controle de Licenças',
  'Laudo de Acessibilidade'
]

const contactInfo: ContactInfo = {
  phone: '(11) 9999-9999',
  email: 'contato@ecoconsult.com.br',
  location: 'São Paulo - SP'
}

const currentYear = computed<number>(() => new Date().getFullYear())
</script>
