<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
import ServiceCard from '@/components/ServiceCard.vue'
import { services } from '@/data/services'

// Meta tags SEO
useHead({
  title: 'Nossos Serviços | Ecobrasil Engenharia e Consultoria',
  meta: [
    {
      name: 'description',
      content: 'Soluções completas em Compliance, Licenciamento Ambiental, Corpo de Bombeiros, Acessibilidade e Consultoria em Engenharia.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ecobrasilambiental.com.br/servicos'
    }
  ]
})

let observer: IntersectionObserver | null = null
onMounted(() => {
  const revealElements = document.querySelectorAll('.reveal')
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active')
    })
  }, { threshold: 0.1 })
  revealElements.forEach(el => observer?.observe(el))
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="page-dark">
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="container">
        <div class="hero-content reveal">
          <h1 class="hero-title">Soluções em Engenharia de <span class="accent">Alta Performance</span></h1>
          <p class="hero-subtitle">
            Consultoria técnica especializada para garantir a conformidade legal e a segurança do seu empreendimento com foco em resultados.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-main section-lg">
      <div class="container">
        <h2 class="section-title text-center mb-16">Nossa Grade de Serviços Especializados</h2>
        <div class="services-grid">
          <ServiceCard 
            v-for="service in services" 
            :key="service.id" 
            :service="service" 
            :show-details="true"
          />
        </div>

        <!-- Process Section -->
        <div class="process-section reveal">
          <div class="section-header">
            <h2 class="section-title">Nossa Metodologia de Trabalho</h2>
            <p class="section-subtitle">
              Processos estruturados que garantem excelência técnica e aprovação junto aos órgãos competentes.
            </p>
          </div>

          <div class="process-grid">
            <div class="process-step">
              <div class="step-num">01</div>
              <h3 class="benefit-title">Diagnóstico Técnico</h3>
              <p>Análise detalhada da situação atual e identificação de todos os requisitos legais e técnicos específicos para seu empreendimento.</p>
            </div>
            <div class="process-step">
              <div class="step-num">02</div>
              <h3 class="benefit-title">Planejamento Estratégico</h3>
              <p>Desenvolvimento do plano de ação personalizado e preparação minuciosa de toda a documentação e projetos necessários.</p>
            </div>
            <div class="process-step">
              <div class="step-num">03</div>
              <h3 class="benefit-title">Execução e Protocolo</h3>
              <p>Acompanhamento rigoroso junto aos órgãos competentes (Corpo de Bombeiros, Órgãos Ambientais, Prefeituras) até a conclusão.</p>
            </div>
            <div class="process-step">
              <div class="step-num">04</div>
              <h3 class="benefit-title">Conformidade Legal</h3>
              <p>Entrega das certificações finais e estabelecimento de cronograma para manutenção contínua das condições legais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="services-cta section-lg">
      <div class="container">
        <div class="cta-box reveal">
          <h2>Pronto para regularizar seu negócio?</h2>
          <p>Fale com nossos especialistas e obtenha um diagnóstico inicial para seu empreendimento.</p>
          <router-link to="/contatos" class="btn-solid">Solicitar Consultoria Técnica</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-dark { background-color: #0a1a12; color: #ffffff; min-height: 100vh; }
.section-lg { padding: 120px 0; }

.services-hero {
  height: 60vh;
  min-height: 500px;
  background-color: #05120b;
  background-image: linear-gradient(rgba(10, 26, 18, 0.9), rgba(10, 26, 18, 0.9)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  text-align: center;
}

.hero-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; margin-bottom: 24px; line-height: 1.1; }
.hero-title .accent { color: #d4b680; }
.hero-subtitle { font-size: 20px; color: #cbd5e1; max-width: 700px; margin: 0 auto; }

.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin-bottom: 120px; }

.section-header { text-align: center; margin-bottom: 80px; }
.section-title { font-size: 42px; font-weight: 700; margin-bottom: 20px; }
.section-subtitle { font-size: 18px; color: #cbd5e1; }

.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px; }
.process-step { background: #0d2319; padding: 40px; border-radius: 4px; border-bottom: 3px solid #d4b680; }
.step-num { font-size: 14px; color: #d4b680; font-weight: 800; margin-bottom: 20px; letter-spacing: 0.2em; }
.process-step h3 { font-size: 20px; margin-bottom: 16px; color: #ffffff; }
.process-step p { font-size: 15px; color: #cbd5e1; line-height: 1.6; }

.cta-box { background: #d4b680; color: #000000; padding: 80px 40px; text-align: center; border-radius: 4px; }
.cta-box h2 { font-size: 36px; font-weight: 800; margin-bottom: 20px; }
.cta-box p { font-size: 18px; margin-bottom: 40px; color: #000000; font-weight: 500; }

.btn-solid { display: inline-block; background: #000000; color: #ffffff; padding: 16px 40px; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; transition: all 0.3s ease; }
.btn-solid:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.4); }

.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

@media (max-width: 768px) { 
  .section-lg { padding: 60px 0; } 
  .services-grid { grid-template-columns: 1fr; gap: 20px; } 
  .hero-title { font-size: clamp(2rem, 8vw, 2.5rem); }
  .hero-subtitle { margin-left: auto; margin-right: auto; }
  .process-grid { grid-template-columns: 1fr; }
  .cta-box { padding: 60px 20px; }
  .section-title { font-size: 32px; }
}
</style>
