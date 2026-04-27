<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'

// Meta tags SEO
useHead({
  title: 'Licenciamento Ambiental e Regularização | Ecobrasil Engenharia',
  meta: [
    {
      name: 'description',
      content: 'Especialistas em licenciamento ambiental (LMO, LI, LO), renovações e conformidade normativa. Mais de 1.200.000 m² licenciados nos últimos 5 anos.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ecobrasilambiental.com.br/ambiental'
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
    <section class="environmental-hero">
      <div class="container">
        <div class="hero-content reveal">
          <h1 class="hero-title">Soluções Ambientais com <span class="accent">Autoridade Técnica</span></h1>
          <p class="hero-subtitle">
            Garantimos a regularidade do seu empreendimento com a experiência de quem licenciou mais de <strong>1.200.000 m²</strong> nos últimos 05 anos.
          </p>
        </div>
      </div>
    </section>

    <!-- Authority Stat Section -->
    <section class="stat-highlight section-lg">
      <div class="container">
        <div class="stat-card reveal">
          <div class="stat-header">
            <span class="stat-mark">1.2M m²</span>
            <h2 class="stat-title">Área Licenciada com Sucesso</h2>
          </div>
          <p class="stat-description">
            Nossa trajetória é marcada pelo rigor técnico e pela eficiência na obtenção de licenças para os mais diversos setores, assegurando que cada metro quadrado do seu negócio esteja em conformidade com as exigências dos órgãos ambientais.
          </p>
        </div>
      </div>
    </section>

    <!-- Licenciamento Completo Section -->
    <section class="licensing-section section-lg bg-soft">
      <div class="container">
        <h2 class="section-title text-center mb-16">Licenciamento Completo e Regularização</h2>
        <div class="services-grid">
          <!-- LMO -->
          <div class="service-topic reveal">
            <div class="topic-icon">🏢</div>
            <h3 class="topic-title">LMO</h3>
            <p class="topic-label">Licença Municipal de Operação</p>
            <p class="topic-text">Elaboração técnica de processos para a autorização de funcionamento junto às esferas municipais.</p>
          </div>

          <!-- LI -->
          <div class="service-topic reveal">
            <div class="topic-icon">🏗️</div>
            <h3 class="topic-title">LI</h3>
            <p class="topic-label">Licença de Instalação</p>
            <p class="topic-text">Gestão de requisitos para a fase de construção ou montagem do seu empreendimento.</p>
          </div>

          <!-- LO -->
          <div class="service-topic reveal">
            <div class="topic-icon">⚙️</div>
            <h3 class="topic-title">LO</h3>
            <p class="topic-label">Licença de Operação</p>
            <p class="topic-text">Garantia técnica para o funcionamento pleno da atividade, respeitando as normas ambientais.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Services -->
    <section class="advanced-services section-lg">
      <div class="container">
        <div class="advanced-grid">
          <div class="advanced-item reveal">
            <h3 class="advanced-title">Renovações e Monitoramento</h3>
            <p>Gestão proativa de prazos e procedimentos para a renovação de licenças vigentes, evitando a descontinuidade do negócio.</p>
          </div>
          <div class="advanced-item reveal">
            <h3 class="advanced-title">Tratamento de Passivos</h3>
            <p>Atuação estratégica em casos de autuações ou notificações, buscando a regularização retroativa e mitigação de danos.</p>
          </div>
          <div class="advanced-item reveal">
            <h3 class="advanced-title">Conformidade Normativa</h3>
            <p>Atendimento pleno às Resoluções do CONAMA e legislações ambientais em níveis municipal, estadual e federal.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Foco de Atuação -->
    <section class="focus-section section-lg bg-soft">
      <div class="container">
        <div class="focus-card reveal">
          <h2 class="section-title text-center mb-12">Expertise por Segmento</h2>
          <div class="focus-grid">
            <div class="focus-item">Indústrias</div>
            <div class="focus-item">Subestações</div>
            <div class="focus-item">Empreendimentos Comerciais</div>
            <div class="focus-item">Unidades Hospitalares</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="environmental-cta section-lg">
      <div class="container">
        <div class="cta-card reveal">
          <h2 class="cta-title">Segurança técnica para o seu negócio</h2>
          <p class="cta-text">
            Não deixe a burocracia ambiental travar o seu crescimento. Conte com quem entende de licenciamento de alta performance.
          </p>
          <a href="mailto:comercial@ecobrasilambiental.com.br" class="btn-primary">Regularizar meu Empreendimento</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* (Estilos mantidos iguais) */
.page-dark { background-color: #0a1a12; color: #ffffff; min-height: 100vh; overflow-x: hidden; }
.section-lg { padding: 100px 0; }
.bg-soft { background-color: #07140e; }

.environmental-hero {
  height: 50vh;
  min-height: 450px;
  background-image: linear-gradient(rgba(10, 26, 18, 0.85), rgba(10, 26, 18, 0.85)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  text-align: center;
}

.hero-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: 24px; }
.hero-title .accent { color: #d4b680; }
.hero-subtitle { font-size: clamp(1.1rem, 2.5vw, 1.4rem); color: #cbd5e1; max-width: 850px; margin: 0 auto; line-height: 1.6; }

.stat-card {
  background: linear-gradient(135deg, #0d2319 0%, #0a1a12 100%);
  padding: 80px 60px;
  border-radius: 8px;
  border: 1px solid rgba(212, 182, 128, 0.2);
  text-align: center;
}
.stat-mark {
  display: block;
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 900;
  color: #d4b680;
  line-height: 1;
  margin-bottom: 20px;
}
.stat-title { font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 700; margin-bottom: 24px; color: #ffffff; }
.stat-description { font-size: 18px; color: #cbd5e1; max-width: 800px; margin: 0 auto; line-height: 1.7; }

.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
.service-topic {
  background: #0a1a12;
  padding: 50px 40px;
  border-radius: 4px;
  border-bottom: 4px solid #d4b680;
  transition: transform 0.3s ease;
}
.service-topic:hover { transform: translateY(-10px); }
.topic-icon { font-size: 40px; margin-bottom: 20px; }
.topic-title { font-size: 36px; font-weight: 900; color: #d4b680; margin-bottom: 10px; }
.topic-label { font-size: 14px; font-weight: 700; text-transform: uppercase; color: #ffffff; margin-bottom: 20px; letter-spacing: 0.1em; }
.topic-text { color: #cbd5e1; line-height: 1.6; }

.advanced-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; }
.advanced-item { border-left: 2px solid #d4b680; padding-left: 30px; }
.advanced-title { font-size: 22px; font-weight: 700; color: #d4b680; margin-bottom: 15px; }
.advanced-item p { color: #cbd5e1; line-height: 1.6; }

.focus-card { background: rgba(255,255,255,0.02); padding: 60px; border-radius: 8px; }
.focus-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
.focus-item {
  background: #0a1a12;
  border: 1px solid rgba(212, 182, 128, 0.3);
  color: #cbd5e1;
  padding: 25px;
  text-align: center;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.focus-item:hover { border-color: #d4b680; color: #d4b680; background: rgba(212, 182, 128, 0.05); }

.cta-card { background: #d4b680; color: #000000; padding: 100px 40px; text-align: center; border-radius: 4px; }
.cta-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; margin-bottom: 20px; }
.cta-text { font-size: 20px; margin-bottom: 40px; font-weight: 500; max-width: 700px; margin-left: auto; margin-right: auto; }
.btn-primary {
  display: inline-block;
  background: #000000;
  color: #ffffff;
  padding: 20px 45px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.3); }

.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

@media (max-width: 768px) {
  .section-lg { padding: 60px 0; }
  .stat-card { padding: 40px 20px; }
  .focus-grid { grid-template-columns: 1fr; }
  .cta-card { padding: 60px 20px; }
}
</style>
