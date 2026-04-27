<template>
  <div class="home-modern">
    <!-- Hero Section -->
    <section class="hero-section full-height">
      <div class="container">
        <div class="hero-content reveal">
          <h1 class="hero-title static">Se você chegou até aqui, certamente temos a solução que você precisa!</h1>
          <h2 class="hero-subtitle-dynamic">
            O foco do seu negócio é <span class="gradient-text">{{ displayText }}</span>.
          </h2>
          <p class="hero-subtitle">
            Somos uma empresa de consultoria em engenharia voltada ao seu empreendimento nas fases de implantação, regularização e manutenção das condições legais.
          </p>
          <div class="hero-actions">
            <a href="mailto:comercial@ecobrasilambiental.com.br" class="apple-btn primary">Iniciar Projeto</a>
            <router-link to="/quem-somos" class="apple-btn secondary">Sobre a Ecobrasil</router-link>
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
            <span class="stat-number">20+ Anos</span>
            <span class="stat-label">de Expertise</span>
          </div>
          <div class="stat-item reveal">
            <span class="stat-number">1.200.000 m²</span>
            <span class="stat-label">Área Licenciada nos últimos 05 anos</span>
          </div>
          <div class="stat-item reveal">
            <span class="stat-number">250.000 m²</span>
            <span class="stat-label">Laudos e Projetos de Acessibilidade</span>
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
              Nossa metodologia foca na agilidade e precisão técnica. Cuidamos de todo o processo para que você foque no que realmente importa: seu negócio. Garantimos que toda a documentação esteja impecável para uma aprovação sem retornos.
            </p>
            <router-link to="/quem-somos" class="text-link">Conheça nossa abordagem →</router-link>
          </div>
          <div class="split-image animation-container">
            <div class="floating-text left">
              <span class="highlight-box">Licenciamento sem dor de cabeça</span>
            </div>
            <div class="contract-wrapper">
              <svg viewBox="0 0 400 500" class="contract-svg">
                <!-- Papel do Contrato -->
                <rect x="50" y="20" width="300" height="460" rx="10" fill="white" stroke="#d4b680" stroke-width="2" />
                
                <!-- Linhas de texto simuladas -->
                <g class="contract-lines" stroke="#e2e8f0" stroke-width="4" stroke-linecap="round">
                  <line x1="80" y1="70" x2="320" y2="70" />
                  <line x1="80" y1="100" x2="280" y2="100" />
                  <line x1="80" y1="130" x2="320" y2="130" />
                  <line x1="80" y1="160" x2="300" y2="160" />
                  <line x1="80" y1="220" x2="320" y2="220" stroke="#cbd5e1" />
                  <line x1="80" y1="250" x2="320" y2="250" stroke="#cbd5e1" />
                  <line x1="80" y1="280" x2="200" y2="280" stroke="#cbd5e1" />
                </g>

                <!-- Área da Assinatura -->
                <line x1="80" y1="420" x2="320" y2="420" stroke="#0a1a12" stroke-width="2" />
                <text x="80" y="445" font-family="Inter" font-size="12" fill="#64748b">Assinatura Digital Certificada</text>

                <!-- O caminho da Assinatura (o que será animado) -->
                <path id="signature-path" 
                  d="M100,400 C120,380 140,410 160,390 C180,370 200,420 230,395 C260,370 280,410 310,385" 
                  fill="none" 
                  stroke="#0a1a12" 
                  stroke-width="3" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                />

                <!-- Novo Lápis (SVG importado) -->
                <g id="pen" transform="scale(1.5)">
                  <path d="M11.4001 18.1612L11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.6582 15.4697 8.53068C14.342 7.40298 13.6537 6.21058 13.2348 5.2039L5.83882 12.5999L5.83879 12.5999C5.26166 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z" fill="#1C274C"/>
                  <path d="M20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3999 4.03882C14.4121 4.0755 14.4246 4.11268 14.4377 4.15035C14.7628 5.0875 15.3763 6.31601 16.5303 7.47002C17.6843 8.62403 18.9128 9.23749 19.85 9.56262C19.8875 9.57563 19.9245 9.58817 19.961 9.60026L20.8482 8.71306Z" fill="#1C274C"/>
                </g>
              </svg>
            </div>
            <div class="floating-text right">
              <span class="highlight-box">Sua empresa regularizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Highlights -->
    <section class="services-highlight section-lg bg-soft">
      <div class="container">
        <div class="section-header text-center reveal">
          <h2 class="section-title">Nossos Serviços em Destaque</h2>
          <p class="section-subtitle">Soluções completas em conformidade ambiental, licenciamento e vistoria técnica.</p>
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
          <router-link to="/ambiental" class="apple-btn outline">Ver Licenciamento Ambiental</router-link>
        </div>
      </div>
    </section>

    <!-- Content Expansion 2 -->
    <section class="benefits-section section-lg">
      <div class="container">
        <h2 class="section-title text-center mb-16">Por que escolher a Ecobrasil Engenharia?</h2>
        <div class="benefits-grid">
          <div class="benefit-item reveal">
            <h3 class="benefit-title">Conformidade e Segurança</h3>
            <p>Garantimos que sua edificação e seu negócio estejam em total conformidade legal, protegendo seu investimento e garantindo a segurança das operações.</p>
          </div>
          <div class="benefit-item reveal">
            <h3 class="benefit-title">Expertise Comprovada</h3>
            <p>Com mais de 20 anos de atuação, nossa equipe técnica possui o conhecimento necessário para resolver desafios complexos de engenharia e regularização.</p>
          </div>
          <div class="benefit-item reveal">
            <h3 class="benefit-title">Foco em Resultados</h3>
            <p>Nossa abordagem é voltada para a eficiência nas fases de implantação e manutenção, assegurando agilidade nos processos junto aos órgãos competentes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof (Carousel) -->
    <div class="reveal section-lg">
      <div class="container">
        <h2 class="section-title text-center mb-12">Empresas que Confiam na Ecobrasil</h2>
        <ClientCarousel />
      </div>
    </div>

    <!-- Final CTA -->
    <section class="final-cta section-lg">
      <div class="container">
        <div class="cta-card reveal">
          <h2 class="cta-title">Pronto para regularizar seu empreendimento?</h2>
          <p class="cta-text">Fale com um de nossos especialistas em engenharia hoje mesmo e garanta a segurança jurídica e operacional do seu negócio.</p>
          <div class="cta-actions">
            <a href="mailto:comercial@ecobrasilambiental.com.br" class="apple-btn primary lg">Solicitar Consultoria Agora</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useHead } from '@vueuse/head'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import ClientCarousel from '@/components/ClientCarousel.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import { services } from '@/data/services'
import type { Service } from '@/types'

// Meta tags SEO
useHead({
  title: 'Ecobrasil | Consultoria em Engenharia e Regularização Legal',
  meta: [
    {
      name: 'description',
      content: 'A Ecobrasil é especialista em consultoria em engenharia para implantação, regularização e manutenção legal de empreendimentos. Mais de 20 anos de expertise.'
    },
    {
      property: 'og:title',
      content: 'Ecobrasil | Engenharia e Consultoria'
    },
    {
      property: 'og:description',
      content: 'Consultoria especializada em implantação, regularização e manutenção das condições legais do seu empreendimento.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://ecobrasilambiental.com.br/'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ecobrasilambiental.com.br/'
    }
  ]
})

// Registrar Plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const featuredServices = computed<Service[]>(() => services.slice(0, 5))

// Typing Animation Logic
const words = ['implantação', 'regularização', 'manutenção']
const displayText = ref(words[0])
const currentWordIndex = ref(0)
const isDeleting = ref(false)
const typeSpeed = ref(150)

const handleTyping = () => {
  const currentFullWord = words[currentWordIndex.value]
  
  if (isDeleting.value) {
    displayText.value = currentFullWord.substring(0, displayText.value.length - 1)
    typeSpeed.value = 50
  } else {
    displayText.value = currentFullWord.substring(0, displayText.value.length + 1)
    typeSpeed.value = 150
  }

  if (!isDeleting.value && displayText.value === currentFullWord) {
    isDeleting.value = true
    typeSpeed.value = 2000 // Pause at the end
  } else if (isDeleting.value && displayText.value === '') {
    isDeleting.value = false
    currentWordIndex.value = (currentWordIndex.value + 1) % words.length
    typeSpeed.value = 500
  }

  typingTimeout = setTimeout(handleTyping, typeSpeed.value)
}

// Scroll Animation Logic using Intersection Observer
let observer: IntersectionObserver | null = null
let typingTimeout: any = null
let gsapContext: any = null

onMounted(() => {
  handleTyping()

  // GSAP Contract Animation
  gsapContext = gsap.context(() => {
    const path = document.querySelector('#signature-path') as SVGPathElement
    if (path) {
      const pathLength = path.getTotalLength()
      
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.feature-split-section',
          start: 'center center',
          end: '+=1000',
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      })

      tl.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        duration: 1
      })
      .to('#pen', {
        motionPath: {
          path: '#signature-path',
          align: '#signature-path',
          alignOrigin: [0.096, 0.904],
          autoRotate: true
        },
        ease: 'none',
        duration: 1
      }, 0)
      
      .to('.floating-text.left', { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.1 
      }, 0.4) 
      .to('.floating-text.right', { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.1 
      }, 0.7)
    }
  })

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
  clearTimeout(typingTimeout)
  if (gsapContext) gsapContext.revert()
})
</script>

<style scoped>
/* Estilos para o Contrato Animado */
.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.contract-wrapper {
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.03);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  transform: rotateY(-10deg) rotateX(5deg);
  transition: transform 0.5s ease;
}

.contract-wrapper:hover {
  transform: rotateY(0deg) rotateX(0deg);
}

.contract-svg {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 15px rgba(0,0,0,0.2));
}

/* Floating Text Blocks */
.floating-text {
  position: absolute;
  z-index: 10;
  pointer-events: none;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.floating-text.left {
  top: 15%;
  left: -20%;
}

.floating-text.right {
  bottom: 25%;
  right: -15%;
}

.highlight-box {
  background: var(--firm-accent);
  color: #000000;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  display: inline-block;
}

/* Reveal Delays */
.delay-1 { transition-delay: 0.2s; }
.delay-2 { transition-delay: 0.4s; }

/* Design Sólido e Maduro */
.home-modern {
  --firm-bg: #0a1a12;
  --firm-accent: #d4b680;
  --firm-text: #ffffff;
  --firm-subtext: #cbd5e1;
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
  background: linear-gradient(to right, rgba(10, 26, 18, 0.98), rgba(10, 26, 18, 0.7)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
}

.hero-title {
  font-size: clamp(2.2rem, 5.5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.1;
  margin-bottom: 12px;
  color: #ffffff;
  max-width: 1000px;
}

.hero-subtitle-dynamic {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 600;
  margin-bottom: 32px;
  color: #ffffff;
  min-height: 1.2em; /* Reserva espaço para evitar saltos verticais */
}

.gradient-text {
  color: var(--firm-accent);
  text-shadow: 0 0 20px rgba(212, 182, 128, 0.2);
  position: relative;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: var(--firm-subtext);
  max-width: 800px;
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
  color: #000000;
}

.apple-btn.primary:hover {
  background-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
}

.apple-btn.secondary {
  color: #ffffff;
  border: 2px solid #ffffff;
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
  color: #ffffff;
  font-weight: 600;
}

/* SEO Content Section */
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 32px;
  color: #ffffff;
}

.section-description {
  font-size: 18px;
  color: var(--firm-subtext);
  line-height: 1.7;
  margin-bottom: 24px;
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

/* Benefits Grid */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.benefit-item {
  background: #0d2319;
  padding: 40px;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.05);
}

.benefit-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--firm-accent);
  margin-bottom: 16px;
}

.benefit-item p {
  color: var(--firm-subtext);
  font-size: 16px;
  line-height: 1.6;
}

/* CTA Card */
.cta-card {
  background: var(--firm-accent);
  color: #000000;
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
  max-width: 800px;
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
@media (max-width: 1024px) {
  .benefits-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .section-lg { padding: 60px 0; }
  .hero-section { text-align: center; }
  .hero-title, .hero-subtitle { margin-left: auto; margin-right: auto; }
  .hero-actions { flex-direction: column; gap: 15px; }
  .apple-btn.secondary { margin-left: 0; }
  .stats-grid { grid-template-columns: 1fr; gap: 40px; }
  .split-content { grid-template-columns: 1fr; gap: 40px; }
  .split-image { order: -1; }
  .cta-card { padding: 60px 20px; }
}
</style>
