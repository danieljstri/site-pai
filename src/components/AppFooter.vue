<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-section">
          <div class="footer-logo">
            <Leaf class="footer-icon" />
            EcoConsult
          </div>
          <p class="footer-description">
            Sua parceira em consultoria ambiental, garantindo conformidade e sustentabilidade.
          </p>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Serviços</h4>
          <ul class="footer-list">
            <li v-for="service in servicesList" :key="service">{{ service }}</li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Empresa</h4>
          <ul class="footer-list">
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
          <h4 class="footer-title">Contato</h4>
          <div class="footer-contact">
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

<style scoped>

.footer {
  background-color: var(--berkeley-blue-200);
  color: var();
  padding: 3rem 1rem 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: var();
}

.footer-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}

.footer-description {
  color: var();
  font-size: 0.95rem;
  line-height: 1.4;
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var();
  margin-bottom: 0.5rem;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 0.5rem;
  color: var();
}

.footer-list li a {
  color: var();
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-list li a:hover {
  color: var();
}

.footer-contact p {
  margin: 0.25rem 0;
  color: var();
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  font-size: 0.85rem;
  color: var();
}
</style>
