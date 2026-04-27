<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Quem Somos | Ecobrasil Engenharia e Consultoria',
  meta: [
    {
      name: 'description',
      content: 'Conheça a Ecobrasil: mais de 20 anos de experiência em engenharia, compliance e consultoria. Atuação em todo o Brasil com foco em resultados e ética.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ecobrasilambiental.com.br/quem-somos'
    }
  ]
})

// Intersection Observer Logic
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
    <section class="about-hero">
      <div class="container">
        <div class="hero-content reveal">
          <h1 class="hero-title">Mais de 20 Anos de <span class="accent">Autoridade em Engenharia</span></h1>
          <p class="hero-subtitle">
            A Ecobrasil é especialista em soluções corporativas de Compliance e Consultoria, apoiando empreendimentos em todas as fases: da implantação ao monitoramento.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="intro-section section-lg">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-text reveal">
            <h2 class="section-title">Sobre a Ecobrasil</h2>
            <p>
              Somos uma empresa de engenharia voltada ao atendimento de clientes corporativos nas áreas de Compliance e Consultoria. Com mais de duas décadas de atuação, dispomos de uma equipe altamente preparada para apoiar o seu negócio nas fases de implantação, operação, regularização e manutenção das condições legais.
            </p>
            <p>
              Nossa atuação abrange todo o território nacional, atendendo com excelência a indústrias, unidades hospitalares, estabelecimentos comerciais, residenciais e instituições de ensino.
            </p>
            
            <div class="stats-grid-mini">
              <div class="stat-mini-item">
                <span class="num">1.2M m²</span>
                <span class="lab">Licenciados (últimos 05 anos)</span>
              </div>
              <div class="stat-mini-item">
                <span class="num">250k m²</span>
                <span class="lab">Em Projetos de Acessibilidade</span>
              </div>
              <div class="stat-mini-item">
                <span class="num">20+ Anos</span>
                <span class="lab">de Expertise no Mercado</span>
              </div>
            </div>
          </div>
          <div class="intro-visual reveal">
            <div class="experience-badge">
              <span class="big-num">20</span>
              <span class="text">Anos de Ética</span>
            </div>
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80" alt="Consultoria Técnica Ecobrasil" class="solid-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- Culture Section (Mission, Vision, Values) -->
    <section class="culture-section section-lg bg-soft">
      <div class="container">
        <div class="section-header text-center reveal">
          <h2 class="section-title">Nossa Cultura Organizacional</h2>
          <p class="section-subtitle">Valores que norteiam nossa busca por excelência e segurança jurídica.</p>
        </div>
        
        <div class="culture-grid">
          <div class="culture-card reveal">
            <div class="icon">🎯</div>
            <h3>Missão</h3>
            <p>Prestar serviços de consultoria técnica com agilidade e competência, contribuindo para o crescimento sustentável das organizações e da sociedade através de soluções de engenharia.</p>
          </div>
          
          <div class="culture-card reveal">
            <div class="icon">🔭</div>
            <h3>Visão</h3>
            <p>Ser referência em soluções técnicas de consultoria, sendo a primeira opção de contratação pelo mercado pela nossa qualidade e resultados.</p>
          </div>
          
          <div class="culture-card reveal">
            <div class="icon">🤝</div>
            <h3>Valores</h3>
            <p>Prezamos pelo profissionalismo, transparência, ética, confidencialidade, respeito à legislação e às pessoas, sempre com foco em gerar resultados recíprocos.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferenciais -->
    <section class="differentials-section section-lg">
      <div class="container">
        <div class="reveal text-center mb-16">
          <h2 class="section-title">Por que confiar na Ecobrasil?</h2>
        </div>
        <div class="diff-grid">
          <div class="diff-item reveal">
            <h4>Segurança Jurídica</h4>
            <p>Atuamos rigorosamente dentro da legislação, garantindo que seu empreendimento esteja protegido contra sanções e passivos.</p>
          </div>
          <div class="diff-item reveal">
            <h4>Confidencialidade</h4>
            <p>Tratamos as informações e processos de nossos clientes com o mais alto nível de sigilo e responsabilidade profissional.</p>
          </div>
          <div class="diff-item reveal">
            <h4>Abrangência Nacional</h4>
            <p>Capacidade técnica para atender demandas em qualquer região do Brasil, com conhecimento das legislações locais.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="final-cta section-lg bg-soft">
      <div class="container">
        <div class="cta-banner reveal">
          <h2>Pronto para apoiar seu projeto com a nossa expertise?</h2>
          <p class="mb-10 text-lg opacity-80">Conte com uma equipe sênior para a regularização do seu negócio.</p>
          <a href="mailto:comercial@ecobrasilambiental.com.br" class="btn-primary">Fale com Nossos Especialistas</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* (Estilos mantidos) */
.page-dark { background-color: #0a1a12; color: #f0ede5; min-height: 100vh; }
.section-lg { padding: 120px 0; }
.bg-soft { background-color: #07140e; }

.about-hero {
  height: 60vh;
  min-height: 500px;
  background-image: linear-gradient(rgba(10, 26, 18, 0.85), rgba(10, 26, 18, 0.85)), url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  text-align: center;
}

.hero-title { font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 800; margin-bottom: 24px; color: #ffffff; }
.hero-title .accent { color: #d4b680; }
.hero-subtitle { color: #cbd5e1; font-size: clamp(1.1rem, 2.5vw, 1.4rem); max-width: 900px; margin: 0 auto; line-height: 1.6; }

.intro-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 80px; align-items: center; }
.section-title { font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 700; margin-bottom: 30px; color: #ffffff; position: relative; }
.section-title::after { content: ''; display: block; width: 60px; height: 3px; background: #d4b680; margin-top: 15px; }

.intro-text p { font-size: 18px; line-height: 1.7; color: #cbd5e1; margin-bottom: 24px; }

.stats-grid-mini { display: grid; grid-template-columns: 1fr; gap: 30px; margin-top: 40px; }
.stat-mini-item .num { display: block; font-size: 36px; font-weight: 900; color: #d4b680; line-height: 1; margin-bottom: 8px; }
.stat-mini-item .lab { font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; font-weight: 600; }

.intro-visual { position: relative; }
.experience-badge {
  position: absolute;
  top: -30px;
  left: -30px;
  background: #d4b680;
  color: #000000;
  padding: 30px;
  border-radius: 4px;
  text-align: center;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}
.experience-badge .big-num { display: block; font-size: 48px; font-weight: 900; line-height: 1; }
.experience-badge .text { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; }

.solid-img { width: 100%; border-radius: 4px; filter: grayscale(20%); box-shadow: 0 30px 60px rgba(0,0,0,0.4); }

.culture-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 60px; }
.culture-card { background: #0d2319; padding: 50px 40px; border-radius: 4px; border: 1px solid rgba(212, 182, 128, 0.1); transition: all 0.3s ease; }
.culture-card:hover { border-color: #d4b680; transform: translateY(-5px); }
.culture-card .icon { font-size: 40px; margin-bottom: 24px; }
.culture-card h3 { font-size: 24px; color: #d4b680; margin-bottom: 20px; font-weight: 700; }
.culture-card p { color: #cbd5e1; line-height: 1.7; font-size: 16px; }

.diff-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; }
.diff-item { border-top: 2px solid #d4b680; padding-top: 30px; }
.diff-item h4 { font-size: 20px; color: #ffffff; margin-bottom: 15px; font-weight: 700; }
.diff-item p { color: #cbd5e1; line-height: 1.6; }

.cta-banner { background: #d4b680; padding: 80px 40px; border-radius: 8px; text-align: center; color: #000000; }
.cta-banner h2 { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; margin-bottom: 20px; color: #000000; }
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
  .intro-grid { grid-template-columns: 1fr; gap: 60px; }
  .intro-visual { order: -1; max-width: 600px; margin: 0 auto; }
}

@media (max-width: 768px) {
  .section-lg { padding: 60px 0; }
  .experience-badge { padding: 20px; top: -20px; left: -20px; }
  .experience-badge .big-num { font-size: 32px; }
  .stats-grid-mini { text-align: center; }
  .cta-banner { padding: 60px 20px; }
}
</style>
