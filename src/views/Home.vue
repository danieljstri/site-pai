<template>
  <div class="home-modern">
    <!-- Hero Section -->
    <section class="hero-section full-height">
      <div class="container">
        <div class="hero-content reveal">
          <h1 class="hero-title">
            O futuro da sua empresa é <span class="gradient-text">sustentável</span>.
          </h1>
          <p class="hero-subtitle">
            Consultoria ambiental de alta performance com 100% de aprovação técnica e agilidade garantida.
          </p>
          <div class="hero-actions">
            <router-link to="/contatos" class="apple-btn primary">Iniciar Projeto</router-link>
            <router-link to="/servicos" class="apple-btn secondary">Explorar Serviços</router-link>
          </div>
        </div>
      </div>
      <div class="hero-scroll-hint">
        <div class="mouse"></div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section section-lg">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item reveal">
            <span class="stat-number">500+</span>
            <span class="stat-label">Empresas Atendidas</span>
          </div>
          <div class="stat-item reveal">
            <span class="stat-number">100%</span>
            <span class="stat-label">De Aprovação</span>
          </div>
          <div class="stat-item reveal">
            <span class="stat-number">8+</span>
            <span class="stat-label">Anos de Experiência</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual Feature Section -->
    <section class="feature-split-section section-lg">
      <div class="container">
        <div class="split-content">
          <div class="split-text reveal">
            <h2 class="section-title">Licenciamento sem burocracia.</h2>
            <p class="section-description">
              Nossa metodologia foca na agilidade e precisão técnica. Cuidamos de todo o processo para que você foque no que realmente importa: seu negócio.
            </p>
            <router-link to="/sobre" class="text-link">Conheça nossa abordagem →</router-link>
          </div>
          <div class="split-image reveal delay-1">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" alt="Escritório moderno" class="modern-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Highlights -->
    <section class="services-highlight section-lg bg-soft">
      <div class="container">
        <div class="section-header text-center reveal">
          <h2 class="section-title">Serviços Especializados</h2>
          <p class="section-subtitle">Soluções completas em conformidade ambiental e técnica.</p>
        </div>
        <div class="services-grid">
          <ServiceCard 
            v-for="service in featuredServices" 
            :key="service.id" 
            :service="service" 
            class="reveal"
          />
        </div>
        <div class="text-center mt-12 reveal">
          <router-link to="/servicos" class="apple-btn outline">Ver todos os serviços</router-link>
        </div>
      </div>
    </section>

    <!-- Social Proof (Carousel) -->
    <div class="reveal section-lg">
      <div class="container">
        <h2 class="section-title text-center mb-12">Quem confia na EcoBrasil</h2>
        <ClientCarousel />
      </div>
    </div>

    <!-- Final CTA -->
    <section class="final-cta section-lg">
      <div class="container">
        <div class="cta-card reveal">
          <h2 class="cta-title">Vamos construir algo sustentável juntos?</h2>
          <p class="cta-text">Fale com um de nossos especialistas hoje mesmo e garanta sua conformidade.</p>
          <div class="cta-actions">
            <router-link to="/contatos" class="apple-btn primary lg">Solicitar Consultoria</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { Shield, Clock, Users, Check, FileText, Eye, Settings, Accessibility } from 'lucide-vue-next'
import ClientCarousel from '@/components/ClientCarousel.vue'
import { services } from '@/data/services'
import type { Service } from '@/types'

const featuredServices = computed<Service[]>(() => services.slice(0, 4))

const getIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    Shield, Clock, Users, Check, FileText, Eye, Settings, Accessibility
  }
  return icons[iconName] || Shield
}

// Scroll Animation Logic using Intersection Observer
let observer: IntersectionObserver | null = null

onMounted(() => {
  const revealElements = document.querySelectorAll('.reveal')
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  })

  revealElements.forEach(el => observer?.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
/* Design Sólido e Maduro - Consultoria Ambiental Premium com Alto Contraste */
.home-modern {
  --firm-bg: #0a1a12; /* Verde Musgo Profundo */
  --firm-accent: #d4b680; /* Bronze mais claro para melhor contraste */
  --firm-text: #ffffff; /* Branco puro para máximo contraste */
  --firm-subtext: #cbd5e1; /* Cinza claro luminoso para legibilidade (WCAG Compliant) */
  --firm-section-bg: #07140e;
  
  color: var(--firm-text);
  background-color: var(--firm-bg);
  overflow-x: hidden;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.full-height {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.section-lg {
  padding: 120px 0;
}

.bg-soft {
  background-color: var(--firm-section-bg);
}

/* Hero Styles */
.hero-section {
  position: relative;
  text-align: left;
  /* Sobreposição de gradiente mais escura para garantir contraste do texto branco */
  background: linear-gradient(to right, rgba(10, 26, 18, 0.98), rgba(10, 26, 18, 0.7)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.2rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.1;
  margin-bottom: 28px;
  color: #ffffff;
  max-width: 900px;
}

.gradient-text {
  color: var(--firm-accent);
  text-shadow: 0 0 20px rgba(212, 182, 128, 0.2); /* Brilho sutil para destacar */
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: var(--firm-subtext);
  max-width: 650px;
  margin-bottom: 48px;
  line-height: 1.6;
  font-weight: 400;
}

/* Buttons Styles */
.apple-btn {
  display: inline-flex;
  align-items: center;
  padding: 16px 36px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.apple-btn.primary {
  background-color: var(--firm-accent);
  color: #000000; /* Preto puro no bronze claro para legibilidade máxima */
}

.apple-btn.primary:hover {
  background-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
}

.apple-btn.secondary {
  color: #ffffff;
  border: 2px solid #ffffff; /* Borda mais grossa para visibilidade */
  margin-left: 20px;
  background: rgba(255, 255, 255, 0.05);
}

.apple-btn.secondary:hover {
  background: #ffffff;
  color: #0a1a12;
}

.apple-btn.outline {
  border: 2px solid var(--firm-accent);
  color: var(--firm-accent);
}

.apple-btn.outline:hover {
  background-color: var(--firm-accent);
  color: #000000;
}

/* Stats Section */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 60px;
}

.stat-number {
  display: block;
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  color: var(--firm-accent);
  margin-bottom: 12px;
}

.stat-label {
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #ffffff; /* Branco para melhor contraste que o subtext anterior */
  font-weight: 600;
}

/* Feature Split Section */
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 32px;
  color: #ffffff;
}

.section-description {
  font-size: 19px;
  color: var(--firm-subtext);
  line-height: 1.7;
  margin-bottom: 40px;
}

.text-link {
  font-size: 16px;
  color: var(--firm-accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Services Minimal Grid */
.service-minimal-card {
  background: #0d2319;
  padding: 50px;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.05);
  transition: all 0.4s ease;
}

.service-minimal-card h3 {
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
}

.service-minimal-card p {
  color: var(--firm-subtext);
}

/* CTA Card */
.cta-card {
  background: var(--firm-accent);
  color: #000000; /* Texto preto no fundo bronze claro */
  padding: 100px 60px;
  border-radius: 8px;
  text-align: center;
}

.cta-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
}

.cta-text {
  font-size: 20px;
  margin-bottom: 48px;
  color: #000000;
  font-weight: 500;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-card .apple-btn.primary {
  background-color: #000000;
  color: #ffffff;
}

/* Reveal Animation */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section { text-align: center; }
  .apple-btn.secondary { margin-left: 0; margin-top: 15px; }
  .stats-grid { grid-template-columns: 1fr; gap: 40px; }
  .split-content { grid-template-columns: 1fr; }
}
</style>
