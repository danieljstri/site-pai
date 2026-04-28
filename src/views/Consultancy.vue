<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'

// Meta tags SEO
useHead({
  title: 'Consultoria Especializada em Engenharia | Ecobrasil',
  meta: [
    {
      name: 'description',
      content: 'Soluções sob medida em engenharia e consultoria ambiental. Projetos de combate a incêndio, inteligência local, pareceres hospitalares e operações críticas.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ecobrasilambiental.com.br/consultoria'
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
    <section class="consultancy-hero">
      <div class="container">
        <div class="hero-content reveal">
          <h1 class="hero-title">Consultoria: <span class="accent">Soluções Sob Medida</span></h1>
          <p class="hero-subtitle">
            Atuação estratégica e técnica para as necessidades específicas do seu negócio em serviços especializados de engenharia.
          </p>
        </div>
      </div>
    </section>

    <!-- Intro Strategy Section -->
    <section class="strategy-section section-lg">
      <div class="container">
        <div class="strategy-grid">
          <div class="strategy-text reveal">
            <h2 class="section-title">Da Análise Estratégica à Execução</h2>
            <p class="section-description">
              A equipe da Ecobrasil está preparada para criar soluções personalizadas, integrando o conhecimento técnico de engenharia com a inteligência normativa necessária para viabilizar o seu empreendimento.
            </p>
            <p class="section-description">
              Seja na implantação de novos negócios ou em operações críticas de alta complexidade, nossa consultoria garante segurança jurídica e eficiência operacional em cada etapa do projeto.
            </p>
          </div>
          <div class="strategy-visual reveal">
            <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=800&q=80" alt="Consultoria Estratégica" class="visual-image">
          </div>
        </div>
      </div>
    </section>

    <!-- Consultancy Cases Grid -->
    <section class="consultancy-cases section-lg bg-soft">
      <div class="container">
        <h2 class="section-title text-center mb-16">Nossas Áreas de Consultoria Técnica</h2>
        <div class="cases-grid">
          <!-- Novos Empreendimentos -->
          <div class="case-card reveal">
            <div class="case-icon">🏗️</div>
            <h3 class="case-title">Novos Empreendimentos</h3>
            <p class="case-text">
              Apoio completo na implantação, com elaboração de projetos e gestão de liberações junto a órgãos e concessionárias.
            </p>
          </div>

          <!-- Inteligência Local -->
          <div class="case-icon-card reveal">
            <div class="case-icon">📍</div>
            <h3 class="case-title">Inteligência Local</h3>
            <p class="case-text">
              Checklists de ações, contratações e licenças necessárias baseadas na legislação local para novos negócios na região.
            </p>
          </div>

          <!-- Projetos de Engenharia -->
          <div class="case-card reveal">
            <div class="case-icon">📐</div>
            <h3 class="case-title">Projetos de Engenharia</h3>
            <p class="case-text">
              Projetos de prevenção e combate a incêndio, tratamento de esgotos e sistemas necessários ao licenciamento.
            </p>
          </div>

          <!-- Parecer Técnico Hospitalar -->
          <div class="case-icon-card reveal">
            <div class="case-icon">🏥</div>
            <h3 class="case-title">Parecer Técnico Hospitalar</h3>
            <p class="case-text">
              Análise de utilidades hospitalares, atualização de plantas e cadastramento completo de instalações de saúde.
            </p>
          </div>

          <!-- Levantamento Cadastral -->
          <div class="case-card reveal">
            <div class="case-icon">📋</div>
            <h3 class="case-title">Levantamento Cadastral</h3>
            <p class="case-text">
              Atualização de edificações diversas: indústrias, hospitais, centros comerciais e instituições de ensino.
            </p>
          </div>

          <!-- Operações Críticas -->
          <div class="case-icon-card reveal">
            <div class="case-icon">⚡</div>
            <h3 class="case-title">Operações Críticas</h3>
            <p class="case-text">
              Consultoria técnica especializada para reformas e ampliações em empreendimentos de operação crítica e alta exigência.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Methodology / Professionalism -->
    <section class="method-section section-lg">
      <div class="container">
        <div class="method-box reveal">
          <h2 class="section-title text-center">Excelência Técnica em Cada Detalhe</h2>
          <div class="method-steps">
            <div class="step">
              <span class="step-label">01</span>
              <h4>Diagnóstico</h4>
              <p>Identificação precisa das carências técnicas e legais do negócio.</p>
            </div>
            <div class="step">
              <span class="step-label">02</span>
              <h4>Solução</h4>
              <p>Desenvolvimento de projetos customizados de engenharia.</p>
            </div>
            <div class="step">
              <span class="step-label">03</span>
              <h4>Entrega</h4>
              <p>Execução e acompanhamento técnico até a conformidade total.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="consultancy-cta section-lg bg-soft">
      <div class="container">
        <div class="cta-card reveal">
          <h2 class="cta-title">Precisa de uma solução técnica específica?</h2>
          <p class="cta-text">
            Nossa equipe está pronta para atuar nos desafios de engenharia mais complexos do seu empreendimento.
          </p>
          <a href="mailto:comercial@ecobrasilambiental.com.br" class="btn-primary">Solicitar Consultoria Técnica</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-dark { background-color: #0a1a12; color: #ffffff; min-height: 100vh; overflow-x: hidden; }
.section-lg { padding: 100px 0; }
.bg-soft { background-color: #07140e; }

.consultancy-hero {
  height: 50vh;
  min-height: 450px;
  background-image: linear-gradient(rgba(10, 26, 18, 0.85), rgba(10, 26, 18, 0.85)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  text-align: center;
}

.hero-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: 24px; }
.hero-title .accent { color: #d4b680; }
.hero-subtitle { font-size: clamp(1.1rem, 2.5vw, 1.4rem); color: #cbd5e1; max-width: 850px; margin: 0 auto; line-height: 1.6; }

.strategy-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; }
.section-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; margin-bottom: 30px; }
.section-description { font-size: 18px; color: #cbd5e1; line-height: 1.7; margin-bottom: 20px; }

.strategy-visual img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(212, 182, 128, 0.2);
}

.cases-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
.case-card, .case-icon-card {
  background: #0a1a12;
  padding: 45px;
  border-radius: 4px;
  border: 1px solid rgba(212, 182, 128, 0.1);
  transition: all 0.3s ease;
}
.case-card:hover, .case-icon-card:hover { border-color: #d4b680; transform: translateY(-5px); }
.case-icon { font-size: 40px; margin-bottom: 25px; }
.case-title { font-size: 22px; color: #d4b680; margin-bottom: 15px; font-weight: 700; }
.case-text { color: #cbd5e1; line-height: 1.6; font-size: 16px; }

.method-box { background: rgba(255,255,255,0.02); padding: 80px 60px; border-radius: 12px; }
.method-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 60px; }
.step { text-align: center; }
.step-label { font-size: 14px; font-weight: 900; color: #d4b680; letter-spacing: 0.2em; display: block; margin-bottom: 20px; }
.step h4 { font-size: 20px; margin-bottom: 15px; color: #ffffff; }
.step p { color: #cbd5e1; font-size: 15px; line-height: 1.5; }

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

@media (max-width: 1024px) {
  .strategy-grid { grid-template-columns: 1fr; text-align: center; }
  .strategy-visual { display: none; }
  .method-steps { grid-template-columns: 1fr; gap: 60px; }
}

@media (max-width: 768px) {
  .section-lg { padding: 60px 0; }
  .cases-grid { grid-template-columns: 1fr; }
  .method-box { padding: 40px 20px; }
  .cta-card { padding: 60px 20px; }
}
</style>
