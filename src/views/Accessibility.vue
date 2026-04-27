<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'

// Meta tags SEO
useHead({
  title: 'Projetos e Laudos de Acessibilidade | Ecobrasil Engenharia',
  meta: [
    {
      name: 'description',
      content: 'Referência em acessibilidade com mais de 250.000 m² elaborados. Especialistas em NBR 9050, Padrão MEC para instituições de ensino e suporte em TACs.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ecobrasilambiental.com.br/acessibilidade'
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
    <section class="accessibility-hero">
      <div class="container">
        <div class="hero-content reveal">
          <h1 class="hero-title">Acessibilidade: <span class="accent">Espaços Inclusivos e Seguros</span></h1>
          <p class="hero-subtitle">
            Garantimos autonomia e segurança com a autoridade de quem já elaborou mais de <strong>250.000 m²</strong> em laudos e projetos técnicos.
          </p>
        </div>
      </div>
    </section>

    <!-- Authority Stat Section -->
    <section class="stat-highlight section-lg">
      <div class="container">
        <div class="stat-card reveal">
          <div class="stat-header">
            <span class="stat-mark">250k m²</span>
            <h2 class="stat-title">Expertise em Projetos de Acessibilidade</h2>
          </div>
          <p class="stat-description">
            Nosso histórico comprova o domínio técnico das normas de acessibilidade. Atuamos para transformar edificações em ambientes igualitários, em plena conformidade com a <strong>NBR 9050</strong> e o <strong>Decreto Federal nº 9.405/2018</strong>.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="accessibility-services section-lg bg-soft">
      <div class="container">
        <div class="services-grid">
          <!-- Projetos e Laudos -->
          <div class="service-card reveal">
            <div class="card-icon">📏</div>
            <h3 class="card-title">Projetos e Laudos Técnicos</h3>
            <p class="card-text">
              Elaboração detalhada de projetos de adaptação e laudos de conformidade técnica rigorosamente alinhados à <strong>NBR 9050</strong>.
            </p>
          </div>

          <!-- Adaptação de Edificações -->
          <div class="service-card reveal">
            <div class="card-icon">🏗️</div>
            <h3 class="card-title">Adaptação de Edificações</h3>
            <p class="card-text">
              Consultoria técnica para reformas e adaptações inclusivas em indústrias, hospitais, comércios e condomínios.
            </p>
          </div>

          <!-- Suporte em TACs -->
          <div class="service-card reveal">
            <div class="card-icon">⚖️</div>
            <h3 class="card-title">Suporte em TACs</h3>
            <p class="card-text">
              Atuação técnica especializada em processos de Termo de Ajustamento de Conduta (TAC) junto a órgãos públicos e privados.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- MEC Focus Section (Destaque) -->
    <section class="mec-focus section-lg">
      <div class="container">
        <div class="mec-box reveal">
          <div class="mec-content">
            <div class="mec-badge">Especialidade MEC</div>
            <h2 class="section-title">Instituições de Ensino / Padrão MEC</h2>
            <p class="section-description">
              Somos especialistas na adequação de espaços educacionais para processos críticos de <strong>autorização, reconhecimento e renovação de cursos</strong> junto ao Ministério da Educação (MEC).
            </p>
            <ul class="mec-list">
              <li>Adequação de rotas acessíveis</li>
              <li>Sinalização tátil e visual</li>
              <li>Sanitários e mobiliários adaptados</li>
              <li>Laudos para vistorias do MEC</li>
            </ul>
          </div>
          <div class="mec-visual">
            <div class="visual-circle">
              <span class="visual-text">MEC</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="security-section section-lg bg-soft">
      <div class="container">
        <div class="security-grid">
          <div class="security-text reveal">
            <h2 class="section-title">Segurança e Autonomia</h2>
            <p class="section-description">
              Nosso foco vai além da norma: desenvolvemos soluções que garantem o acesso igualitário com autonomia e conforto. O design inclusivo da Ecobrasil assegura que cada indivíduo possa transitar com segurança por todos os espaços do seu empreendimento.
            </p>
          </div>
          <div class="security-features reveal">
            <div class="feature-item">
              <span class="feature-check">✓</span>
              <span>Conformidade NBR 9050</span>
            </div>
            <div class="feature-item">
              <span class="feature-check">✓</span>
              <span>Segurança Jurídica</span>
            </div>
            <div class="feature-item">
              <span class="feature-check">✓</span>
              <span>Responsabilidade Social</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="accessibility-cta section-lg">
      <div class="container">
        <div class="cta-card reveal">
          <h2 class="cta-title">Sua edificação está pronta para todos?</h2>
          <p class="cta-text">
            Evite notificações e multas. Transforme seu espaço em um ambiente acessível e em total conformidade legal.
          </p>
          <a href="mailto:comercial@ecobrasilambiental.com.br" class="btn-primary">Solicitar Laudo de Acessibilidade</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-dark { background-color: #0a1a12; color: #ffffff; min-height: 100vh; overflow-x: hidden; }
.section-lg { padding: 100px 0; }
.bg-soft { background-color: #07140e; }

.accessibility-hero {
  height: 50vh;
  min-height: 450px;
  background-image: linear-gradient(rgba(10, 26, 18, 0.85), rgba(10, 26, 18, 0.85)), url('https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=1920&q=80');
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

.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.service-card {
  background: #0a1a12;
  padding: 40px;
  border-radius: 4px;
  border: 1px solid rgba(212, 182, 128, 0.1);
  transition: all 0.3s ease;
}
.service-card:hover { border-color: #d4b680; transform: translateY(-5px); }
.card-icon { font-size: 40px; margin-bottom: 20px; }
.card-title { font-size: 22px; color: #d4b680; margin-bottom: 15px; font-weight: 700; }
.card-text { color: #cbd5e1; line-height: 1.6; }

.mec-box {
  background: #0d2319;
  border-radius: 12px;
  padding: 60px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
  border: 1px solid rgba(212, 182, 128, 0.2);
}
.mec-badge {
  background: #d4b680;
  color: #000000;
  display: inline-block;
  padding: 6px 16px;
  border-radius: 4px;
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.mec-list { list-style: none; padding: 0; margin-top: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.mec-list li { color: #cbd5e1; font-size: 15px; display: flex; align-items: center; gap: 10px; }
.mec-list li::before { content: '•'; color: #d4b680; font-weight: bold; }

.visual-circle {
  width: 200px;
  height: 200px;
  border: 2px dashed #d4b680;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.visual-text { font-size: 48px; font-weight: 900; color: #d4b680; opacity: 0.5; }

.security-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.feature-item { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; font-size: 20px; font-weight: 600; }
.feature-check { color: #d4b680; font-weight: 900; }

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
  .mec-box { grid-template-columns: 1fr; padding: 40px; }
  .mec-visual { display: none; }
  .security-grid { grid-template-columns: 1fr; gap: 40px; }
}

@media (max-width: 768px) {
  .section-lg { padding: 60px 0; }
  .stat-card { padding: 40px 20px; }
  .mec-list { grid-template-columns: 1fr; }
  .cta-card { padding: 60px 20px; }
}
</style>
