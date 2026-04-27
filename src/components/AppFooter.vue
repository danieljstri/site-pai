<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-section">
          <div class="footer-logo">
            <img src="../public/logo-ecobrasil.jpg" alt="EcoBrasil Logo" class="logo-image" />
            EcoBrasil
          </div>
          <p class="footer-description">
            Consultoria ambiental de alta performance. Excelência técnica e conformidade para o seu negócio desde 2018.
          </p>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Navegação</h4>
          <ul class="footer-list">
            <li><router-link to="/">Início</router-link></li>
            <li><router-link to="/servicos">Serviços</router-link></li>
            <li><router-link to="/sobre">Sobre Nós</router-link></li>
            <li><router-link to="/contatos">Contato</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Serviços</h4>
          <ul class="footer-list">
            <li v-for="service in servicesList" :key="service">{{ service }}</li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">Fale Conosco</h4>
          <div class="footer-contact">
            <p><span class="label">Tel:</span> {{ contactInfo.phone }}</p>
            <p><span class="label">E-mail:</span> {{ contactInfo.email }}</p>
            <p><span class="label">Sede:</span> {{ contactInfo.location }}</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} EcoBrasil - Consultoria Ambiental. Todos os direitos reservados.</p>
        <p class="dev-tag">Solid & Sustainable Consulting</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ContactInfo {
  phone: string
  email: string
  location: string
}

const servicesList: string[] = [
  'Licenciamento Ambiental',
  'Vistoria & Inspeção',
  'Controle de Licenças',
  'Regularização de Licenças'
]

const contactInfo: ContactInfo = {
  phone: '(79) 3024-5555',
  email: 'contato@ecobrasil.com.br',
  location: 'Aracaju - SE'
}

const currentYear = computed<number>(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: #07140e;
  color: #ffffff; /* Branco puro para contraste */
  padding: 100px 0 40px;
  border-top: 1px solid rgba(212, 182, 128, 0.2);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 60px;
  margin-bottom: 80px;
}

.footer-logo {
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
}

.logo-image {
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border-radius: 4px;
}

.footer-description {
  color: #cbd5e1; /* Cinza claro luminoso */
  font-size: 16px;
  line-height: 1.6;
}

.footer-title {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
}

.footer-title::after {
  content: '';
  display: block;
  width: 30px;
  height: 2px;
  background: #d4b680;
  margin-top: 10px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 15px;
  color: #cbd5e1;
  font-size: 15px;
}

.footer-list li a {
  color: #cbd5e1;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-list li a:hover {
  color: #d4b680;
  padding-left: 5px;
}

.footer-contact p {
  margin-bottom: 15px;
  color: #cbd5e1;
  font-size: 15px;
}

.footer-contact .label {
  color: #d4b680;
  font-weight: 700;
  margin-right: 5px;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  font-size: 14px;
  color: #94a3b8;
}

.dev-tag {
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

@media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; } }
@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; gap: 20px; } }
</style>
