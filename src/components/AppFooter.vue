<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-section">
          <div class="footer-logo">
            <Leaf />
            EcoConsult
          </div>
          <p>
            Sua parceira em consultoria ambiental, garantindo conformidade e sustentabilidade.
          </p>
        </div>
        
        <div class="footer-section">
          <h4>Serviços</h4>
          <ul>
            <li v-for="service in servicesList" :key="service">{{ service }}</li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Empresa</h4>
          <ul>
            <li>
              <router-link to="/sobre">Sobre Nós</router-link>
            </li>
            <li>
              <router-link to="/servicos">Serviços</router-link>
            </li>
            <li>
              <router-link to="/contatos">Contato</router-link>
            </li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Contato</h4>
          <div>
            <p>{{ contactInfo.phone }}</p>
            <p>{{ contactInfo.email }}</p>
            <p>{{ contactInfo.location }}</p>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
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
