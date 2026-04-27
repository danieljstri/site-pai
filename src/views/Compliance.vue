<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'

// Meta tags SEO
useHead({
  title: 'Compliance e Segurança Jurídica | Ecobrasil Engenharia',
  meta: [
    {
      name: 'description',
      content: 'O Compliance é o nosso pilar de sustentabilidade e conformidade legal. Atuamos com foco em ESG, segurança jurídica e mitigação de riscos ambientais.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ecobrasilambiental.com.br/compliance'
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
    <section class="compliance-hero">
      <div class="container">
        <div class="hero-content reveal">
          <h1 class="hero-title">Compliance: <span class="accent">Sustentabilidade e Segurança Jurídica</span></h1>
          <p class="hero-subtitle">
            O pilar central da Ecobrasil para garantir que seu empreendimento opere em total conformidade legal, fundamentado nos conceitos de ESG.
          </p>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="intro-section section-lg">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-text reveal">
            <h2 class="section-title">Nossa Abordagem ESG</h2>
            <p class="section-description">
              Atuamos como parceiros estratégicos do seu negócio, assegurando que todas as etapas — da implantação ao monitoramento contínuo — estejam alinhadas às melhores práticas de Governança Ambiental, Social e Corporativa (ESG).
            </p>
            <p class="section-description">
              Nosso foco é mitigar riscos e proporcionar segurança jurídica, permitindo que sua empresa cresça de forma sustentável e livre de sanções administrativas ou judiciais.
            </p>
          </div>
          <div class="intro-badge-container reveal">
            <div class="esg-badge">
              <span class="badge-letter">E</span>
              <span class="badge-letter">S</span>
              <span class="badge-letter">G</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Cards -->
    <section class="compliance-services section-lg bg-soft">
      <div class="container">
        <h2 class="section-title text-center mb-16">Eixos de Atuação em Compliance</h2>
        <div class="services-grid">
          <!-- Licenciamento -->
          <div class="compliance-card reveal">
            <div class="card-icon">📋</div>
            <h3 class="card-title">Licenciamento Ambiental</h3>
            <p class="card-text">
              Elaboração e gestão técnica de processos para obtenção de:
            </p>
            <ul class="card-list">
              <li>LMO (Licença Municipal de Operação)</li>
              <li>LI (Licença de Instalação)</li>
              <li>LO (Licença de Operação)</li>
              <li>Renovações periódicas</li>
            </ul>
          </div>

          <!-- Conformidade Legal -->
          <div class="compliance-card reveal">
            <div class="card-icon">⚖️</div>
            <h3 class="card-title">Conformidade Legal</h3>
            <p class="card-text">
              Monitoramento e atendimento rigoroso aos requisitos técnicos exigidos por:
            </p>
            <ul class="card-list">
              <li>Resoluções do CONAMA</li>
              <li>Legislações Municipais aplicáveis</li>
              <li>Normas Técnicas de Engenharia</li>
              <li>Condicionantes Ambientais</li>
            </ul>
          </div>

          <!-- Gestão de Riscos -->
          <div class="compliance-card reveal">
            <div class="card-icon">🛡️</div>
            <h3 class="card-title">Gestão de Riscos</h3>
            <p class="card-text">
              Mitigação de passivos e proteção estratégica do empreendimento:
            </p>
            <ul class="card-list">
              <li>Identificação de riscos ambientais</li>
              <li>Defesa técnica em autuações</li>
              <li>Acompanhamento de notificações</li>
              <li>Planos de contingência</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Público-Alvo -->
    <section class="target-section section-lg">
      <div class="container">
        <div class="target-box reveal">
          <h2 class="section-title text-center">Atendimento Especializado</h2>
          <p class="text-center mb-12">Nossas soluções de Compliance são moldadas para setores de alto impacto e exigência regulatória:</p>
          <div class="target-grid">
            <div class="target-item">Indústrias</div>
            <div class="target-item">Unidades Hospitalares</div>
            <div class="target-item">Comércios</div>
            <div class="target-item">Instituições de Ensino</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferencial CTA -->
    <section class="diferencial-cta section-lg">
      <div class="container">
        <div class="cta-box reveal">
          <h2 class="cta-title">Por que o Compliance da Ecobrasil é fundamental?</h2>
          <p class="cta-text">
            Garantimos que seu empreendimento opere rigorosamente dentro de todas as normas legais vigentes. Nossa consultoria especializada evita sanções, multas e paralisações, assegurando a continuidade e a reputação do seu negócio no mercado.
          </p>
          <a href="mailto:comercial@ecobrasilambiental.com.br" class="btn-solid">Falar com um Especialista em Compliance</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-dark { background-color: #0a1a12; color: #ffffff; min-height: 100vh; overflow-x: hidden; }
.section-lg { padding: 100px 0; }
.bg-soft { background-color: #07140e; }

.compliance-hero {
  height: 50vh;
  min-height: 400px;
  background-image: linear-gradient(rgba(10, 26, 18, 0.85), rgba(10, 26, 18, 0.85)), url('https://images.unsplash.com/photo-1450175847910-d99ea44227ab?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  text-align: center;
}

.hero-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: 24px; }
.hero-title .accent { color: #d4b680; }
.hero-subtitle { font-size: 20px; color: #cbd5e1; max-width: 800px; margin: 0 auto; line-height: 1.6; }

.intro-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; }
.section-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; margin-bottom: 30px; }
.section-description { font-size: 18px; color: #cbd5e1; line-height: 1.7; margin-bottom: 20px; }

.esg-badge {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.badge-letter {
  font-size: 80px;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #d4b680;
  opacity: 0.3;
}

.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.compliance-card {
  background: #0d2319;
  padding: 40px;
  border-radius: 4px;
  border: 1px solid rgba(212, 182, 128, 0.1);
  transition: all 0.3s ease;
}
.compliance-card:hover { transform: translateY(-10px); border-color: #d4b680; }
.card-icon { font-size: 40px; margin-bottom: 20px; }
.card-title { font-size: 22px; color: #d4b680; margin-bottom: 15px; font-weight: 700; }
.card-text { color: #cbd5e1; margin-bottom: 20px; font-size: 16px; }
.card-list { list-style: none; padding: 0; }
.card-list li {
  padding-left: 20px;
  position: relative;
  margin-bottom: 10px;
  color: #ffffff;
  font-size: 15px;
}
.card-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #d4b680;
}

.target-box { background: rgba(255,255,255,0.02); padding: 60px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); }
.target-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
.target-item {
  background: #0a1a12;
  border: 1px solid #d4b680;
  color: #d4b680;
  padding: 20px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 4px;
}

.cta-box { background: #d4b680; color: #000000; padding: 80px 60px; text-align: center; border-radius: 4px; }
.cta-title { font-size: 32px; font-weight: 800; margin-bottom: 20px; }
.cta-text { font-size: 18px; margin-bottom: 40px; max-width: 900px; margin-left: auto; margin-right: auto; line-height: 1.6; font-weight: 500; }
.btn-solid {
  display: inline-block;
  background: #000000;
  color: #ffffff;
  padding: 18px 40px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.btn-solid:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.3); }

.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

@media (max-width: 1024px) { .intro-grid { grid-template-columns: 1fr; text-align: center; } .esg-badge { margin-top: 40px; } }
@media (max-width: 768px) { 
  .section-lg { padding: 60px 0; }
  .cta-box { padding: 40px 20px; }
  .target-grid { grid-template-columns: 1fr; }
}
</style>
