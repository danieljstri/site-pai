<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Energia renovável - painéis solares em campo verde"
          class="hero-image"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title animate-fade-in-up">
            Consultoria Ambiental Especializada
          </h1>
          <p class="hero-subtitle animate-fade-in-up">
            Garantimos a conformidade ambiental da sua empresa com soluções completas em licenciamento, vistoria e manutenção de licenças.
          </p>
          <div class="hero-actions animate-fade-in-up">
            <router-link to="/contatos" class="btn btn-secondary">
              Entre em Contato
            </router-link>
            <router-link to="/servicos" class="btn btn-outline">
              Nossos Serviços
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card green">
            <div class="feature-icon">
              <Shield />
            </div>
            <h3>100% de Aprovação</h3>
            <p>Mais de 500 licenças aprovadas sem rejeições</p>
          </div>
          <div class="feature-card blue">
            <div class="feature-icon">
              <Clock />
            </div>
            <h3>Agilidade Garantida</h3>
            <p>Processos otimizados para máxima eficiência</p>
          </div>
          <div class="feature-card green">
            <div class="feature-icon">
              <Users />
            </div>
            <h3>Equipe Especializada</h3>
            <p>Profissionais qualificados e experientes</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="services-preview">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossos Serviços</h2>
          <p class="section-subtitle">
            Soluções completas para manter sua empresa em conformidade ambiental
          </p>
        </div>
        
        <div class="services-grid">
          <ServiceCard 
            v-for="service in featuredServices" 
            :key="service.id" 
            :service="service" 
          />
        </div>
        
        <div class="services-cta">
          <router-link to="/servicos" class="btn btn-primary">
            Ver Todos os Serviços
          </router-link>
        </div>
      </div>
    </section>

    <!-- Client Carousel -->
    <ClientCarousel />

    <!-- About Preview -->
    <section class="about-preview">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Por que escolher a EcoBrasil?</h2>
            <p>
              Com mais de 8 anos de experiência no mercado, somos especialistas em 
              consultoria ambiental e temos orgulho de manter 100% de aprovação em 
              todos os processos de licenciamento.
            </p>
            <ul class="about-features">
              <li>
                <Check />
                <span>Mais de 500 empresas atendidas</span>
              </li>
              <li>
                <Check />
                <span>100% de aprovação em licenciamentos</span>
              </li>
              <li>
                <Check />
                <span>Equipe certificada ISO 14001</span>
              </li>
              <li>
                <Check />
                <span>Atendimento 24h para emergências</span>
              </li>
            </ul>
            <router-link to="/sobre" class="btn btn-primary">
              Conheça Nossa História
            </router-link>
          </div>
          <div class="about-image">
            <img src="https://www.contabeis.com.br/assets/img/news/entenda-quais-sao-os-tipos-de-contrato-de-trabalho.png"
            alt="fechando contrato">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-background">
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2>Pronto para começar?</h2>
          <p>
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a manter-se em conformidade ambiental.
          </p>
          <div class="cta-actions">
            <router-link to="/contatos" class="btn btn-secondary">
              Fale Conosco
            </router-link>
            <router-link to="/acessibilidade" class="btn btn-outline">
              Laudo de Acessibilidade
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Shield, Clock, Users, Check } from 'lucide-vue-next'
import ServiceCard from '@/components/ServiceCard.vue'
import ClientCarousel from '@/components/ClientCarousel.vue'
import { services } from '@/data/services'
import type { Service } from '@/types'

const featuredServices = computed<Service[]>(() => services.slice(0, 4))
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 80vh;
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
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  margin-bottom: var(--spacing-6);
  color: var(--text-light);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-8);
  opacity: 0.95;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-actions .btn {
  min-width: 180px;
  font-weight: 600;
}

/* Features Section */
.features-section {
  padding: var(--spacing-20) 0;
  background: linear-gradient(135deg, var(--gray-50), var(--primary-50));
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-8);
  max-width: 1000px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: var(--spacing-8);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  border: 2px solid transparent;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.feature-card.green:hover {
  border-color: var(--primary-200);
}

.feature-card.blue:hover {
  border-color: var(--secondary-200);
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--spacing-6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-full);
}

.feature-card.green .feature-icon {
  background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
  color: var(--primary-600);
}

.feature-card.blue .feature-icon {
  background: linear-gradient(135deg, var(--secondary-100), var(--secondary-200));
  color: var(--secondary-600);
}

.feature-card h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: var(--spacing-4);
}

.feature-card p {
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 0;
}

/* Services Preview */
.services-preview {
  padding: var(--spacing-20) 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-16);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: var(--spacing-4);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-12);
}

.services-cta {
  text-align: center;
}

/* About Preview */
.about-preview {
  padding: var(--spacing-20) 0;
  background: linear-gradient(135deg, var(--primary-50), var(--secondary-50));
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;
}

.about-text h2 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: var(--spacing-6);
}

.about-text p {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: var(--spacing-8);
}

.about-features {
  list-style: none;
  margin-bottom: var(--spacing-8);
}

.about-features li {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-4);
  color: var(--gray-700);
  font-weight: 500;
}

.about-features svg {
  width: 20px;
  height: 20px;
  color: var(--primary-600);
  flex-shrink: 0;
}

.about-image {
  position: relative;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* CTA Section */
.cta-section {
  position: relative;
  padding: var(--spacing-20) 0;
  overflow: hidden;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
  z-index: 1;
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.cta-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--text-light);
}

.cta-content h2 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  color: var(--text-light);
}

.cta-content p {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-8);
  opacity: 0.95;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

.cta-actions .btn {
  min-width: 180px;
}

/* Animações */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Media Queries Responsivos */
@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }

  .about-text {
    order: 2;
  }

  .about-image {
    order: 1;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-6);
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
  }

  .hero-title {
    font-size: var(--font-size-4xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-actions .btn {
    width: 100%;
    max-width: 280px;
  }

  .features-section,
  .services-preview,
  .about-preview,
  .cta-section {
    padding: var(--spacing-16) 0;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }

  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-6);
  }

  .section-title {
    font-size: var(--font-size-2xl);
  }

  .section-subtitle {
    font-size: var(--font-size-base);
  }

  .about-text h2 {
    font-size: var(--font-size-2xl);
  }

  .about-text p {
    font-size: var(--font-size-base);
  }

  .cta-content h2 {
    font-size: var(--font-size-2xl);
  }

  .cta-content p {
    font-size: var(--font-size-base);
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-actions .btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 60vh;
  }

  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-base);
  }

  .feature-card {
    padding: var(--spacing-6);
  }

  .feature-icon {
    width: 56px;
    height: 56px;
  }

  .features-section,
  .services-preview,
  .about-preview,
  .cta-section {
    padding: var(--spacing-12) 0;
  }

  .section-header {
    margin-bottom: var(--spacing-12);
  }

  .services-grid {
    margin-bottom: var(--spacing-8);
  }

  .about-features li {
    margin-bottom: var(--spacing-3);
  }
}
</style>
