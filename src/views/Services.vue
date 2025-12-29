<template>
  <div>
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="hero-background">
        <div class="hero-overlay">
          <img 
            src="https://th.bing.com/th/id/R.4057339bff3abfd2b9fa5b0d5f81ddc9?rik=6gkk%2bJMtaPfv0w&pid=ImgRaw&r=0"
            width="1200"
            height="600" 
            alt="Serviços Ambientais" 
            class="hero-image"
          />
        </div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title animate-fade-in-up">Nossos Serviços</h1>
          <p class="hero-subtitle animate-fade-in-up">
            Oferecemos soluções completas em consultoria ambiental para garantir a conformidade da sua empresa.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-content">
      <div class="container">
        <div class="services-grid">
          <ServiceCard 
            v-for="service in services" 
            :key="service.id" 
            :service="service" 
            :show-details="true"
          />
        </div>

        <!-- CTA Section -->
        <div class="services-cta">
          <div class="cta-card">
            <div class="cta-icon">
              <MessageCircle />
            </div>
            <h2>Precisa de um serviço personalizado?</h2>
            <p>
              Nossa equipe está pronta para desenvolver soluções específicas para sua empresa.
            </p>
            <div class="cta-actions">
              <router-link to="/contatos" class="btn btn-primary">
                Solicitar Orçamento
              </router-link>
              <router-link to="/sobre" class="btn btn-secondary">
                Conheça Nossa Equipe
              </router-link>
            </div>
          </div>
        </div>

        <!-- Process Section -->
        <div class="process-section">
          <div class="section-header">
            <h2 class="section-title">Como Trabalhamos</h2>
            <p class="section-subtitle">
              Nosso processo é estruturado para garantir eficiência e qualidade
            </p>
          </div>

          <div class="process-grid">
            <div class="process-step green">
              <div class="step-number">1</div>
              <div class="step-icon">
                <Search />
              </div>
              <h3>Análise Inicial</h3>
              <p>Avaliamos suas necessidades e requisitos específicos</p>
            </div>

            <div class="process-step blue">
              <div class="step-number">2</div>
              <div class="step-icon">
                <FileText />
              </div>
              <h3>Documentação</h3>
              <p>Preparamos toda a documentação necessária</p>
            </div>

            <div class="process-step green">
              <div class="step-number">3</div>
              <div class="step-icon">
                <CheckCircle />
              </div>
              <h3>Aprovação</h3>
              <p>Acompanhamos o processo até a aprovação final</p>
            </div>

            <div class="process-step blue">
              <div class="step-number">4</div>
              <div class="step-icon">
                <Shield />
              </div>
              <h3>Monitoramento</h3>
              <p>Mantemos o controle contínuo da conformidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { MessageCircle, Search, FileText, CheckCircle, Shield } from 'lucide-vue-next'
import ServiceCard from '@/components/ServiceCard.vue'
import { services } from '@/data/services'
</script>

<style scoped>
.services-hero {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 1rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(30px);
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.services-content {
  padding: 6rem 0;
  background: shite;
}

.cta-card {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--pigment-green-100);
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--pigment-green-600), var(--berkeley-blue-600));
}

.cta-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--pigment-green-100), var(--berkeley-blue-100));
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pigment-green-600);
}

.cta-card h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--berkeley-blue-600);
  margin-bottom: 1rem;
}

.cta-card p {
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 2rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.section-title {
  color:  var(--berkeley-blue-500);
}

.section-subtitle {
  color: var(--berkeley-blue-500)
}
.process-section {
  margin-top: 6rem;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.process-step {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid transparent;
}

.process-step::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 1rem 1rem 0 0;
}

.process-step.green::before {
  background: linear-gradient(90deg, var(--pigment-green-500), var(--pigment-green-600));
}

.process-step.blue::before {
  background: linear-gradient(90deg, var(--berkeley-blue-500), var(--berkeley-blue-600));
}

.process-step.green:hover {
  border-color: var(--pigment-green-200);
}

.process-step.blue:hover {
  border-color: var(--berkeley-blue-200);
}

.step-number {
  position: absolute;
  top: -15px;
  right: 1rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  color: white;
}

.process-step.green .step-number {
  background: var(--pigment-green-600);
}

.process-step.blue .step-number {
  background: var(--berkeley-blue-600);
}

.step-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.process-step.green .step-icon {
  background: linear-gradient(135deg, var(--pigment-green-100), var(--pigment-green-200));
  color: var(--pigment-green-600);
}

.process-step.blue .step-icon {
  background: linear-gradient(135deg, var(--berkeley-blue-100), var(--berkeley-blue-200));
  color: var(--berkeley-blue-600);
}

.process-step:hover .step-icon {
  transform: scale(1.1);
}

.process-step h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--berkeley-blue-700);
}

.process-step p {
  color: #666;
  line-height: 1.6;
}
</style>
