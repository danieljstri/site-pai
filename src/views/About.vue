<template>
  <div class="page-dark">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="hero-content reveal">
          <h1 class="hero-title">Nosso Compromisso com a <span class="accent">Excelência Ambiental</span></h1>
          <p class="hero-subtitle">
            Desde 2015, transformamos desafios ambientais em oportunidades de crescimento sustentável para nossos clientes em todo o estado.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-section section-lg">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-text reveal">
            <h2 class="section-title">Sobre a EcoBrasil Consultoria Ambiental</h2>
            <p>
              Fundada em Aracaju, a EcoBrasil nasceu com o propósito de simplificar a complexidade do licenciamento ambiental e das normas técnicas. Somos uma consultoria que une rigor técnico à agilidade operacional.
            </p>
            <p>
              Nossa missão é garantir que cada empresa atendida opere em total conformidade com a legislação, mitigando riscos e promovendo uma operação segura e ambientalmente responsável.
            </p>
            
            <div class="stats-mini">
              <div class="stat-box">
                <span class="num">500+</span>
                <span class="lab">Clientes Atendidos</span>
              </div>
              <div class="stat-box">
                <span class="num">100%</span>
                <span class="lab">Aprovação Técnica</span>
              </div>
            </div>
          </div>
          <div class="mission-visual reveal">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80" alt="Consultoria Técnica" class="solid-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- History Timeline -->
    <section class="timeline-section section-lg bg-soft">
      <div class="container">
        <div class="section-header text-center reveal">
          <h2 class="section-title">Nossa Trajetória</h2>
          <p class="section-subtitle">Um caminho pavimentado por ética e resultados sólidos.</p>
        </div>
        
        <div class="timeline-modern">
          <div v-for="item in timeline" :key="item.year" class="timeline-item reveal">
            <div class="year">{{ item.year }}</div>
            <div class="content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section section-lg">
      <div class="container">
        <div class="section-header text-center reveal">
          <h2 class="section-title">Liderança Técnica</h2>
          <p class="section-subtitle">Profissionais altamente qualificados liderando cada projeto.</p>
        </div>
        
        <div class="team-grid">
          <div class="team-card reveal" v-for="member in team" :key="member.name">
            <div class="team-img-placeholder">
              <Users :size="48" />
            </div>
            <div class="team-info">
              <h3>{{ member.name }}</h3>
              <span class="role">{{ member.role }}</span>
              <p>{{ member.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="final-cta section-lg">
      <div class="container">
        <div class="cta-banner reveal">
          <h2>Pronto para elevar o padrão da sua empresa?</h2>
          <router-link to="/contatos" class="btn-bronze">Fale Conosco</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
import { Users } from 'lucide-vue-next'

useHead({
  title: 'Sobre a EcoBrasil | Consultoria Ambiental em Aracaju',
  meta: [
    {
      name: 'description',
      content: 'Conheça a história da EcoBrasil, nossa missão de sustentabilidade e nossa equipe de especialistas em licenciamento ambiental e engenharia.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://eco-brasil.vercel.app/sobre'
    }
  ]
})

const timeline = [
  { year: '2015', title: 'Fundação', description: 'Início das operações em Sergipe com foco em Licenciamento Ambiental.' },
  { year: '2018', title: 'Expansão', description: 'Novas verticais de Segurança Contra Incêndio e Vistorias Técnicas.' },
  { year: '2021', title: 'Consolidação', description: 'Marco de 300 empresas atendidas com 100% de aprovação técnica.' },
  { year: '2024', title: 'Liderança', description: 'Referência regional em consultoria ambiental e acessibilidade.' }
]

const team = [
  { name: 'João Silva', role: 'Diretor Técnico', desc: 'Engenheiro Ambiental com 15 anos de experiência em licenciamento.' },
  { name: 'Maria Santos', role: 'Gerente de Projetos', desc: 'Especialista em gestão ambiental e processos de conformidade.' },
  { name: 'Carlos Oliveira', role: 'Consultor Sênior', desc: 'Biólogo especializado em estudos de impacto ambiental.' }
]

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

<style scoped>
.page-dark {
  background-color: #0a1a12;
  color: #f0ede5;
}

.section-lg { padding: 120px 0; }
.bg-soft { background-color: #07140e; }

.about-hero {
  height: 50vh;
  background-image: linear-gradient(to bottom, rgba(10, 26, 18, 0.9), rgba(10, 26, 18, 1)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
}

.hero-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: 20px; }
.hero-title .accent { color: #c5a368; }
.hero-subtitle { color: #a8b0ab; font-size: 18px; max-width: 800px; margin: 0 auto; }

.mission-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: center; }
.section-title { font-size: 36px; font-weight: 700; margin-bottom: 30px; position: relative; color: #ffffff; }

/* Adicional: garantir que todos os textos principais estejam em branco */
.mission-text h2, 
.section-header .section-title, 
.team-info h3, 
.cta-banner h2 { 
  color: #ffffff; 
}.section-title::after { content: ''; display: block; width: 50px; height: 3px; background: #c5a368; margin-top: 15px; }

.mission-text p { font-size: 18px; line-height: 1.7; color: #a8b0ab; margin-bottom: 24px; }

.stats-mini { display: flex; gap: 40px; margin-top: 40px; }
.stat-box .num { display: block; font-size: 32px; font-weight: 800; color: #c5a368; }
.stat-box .lab { font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #55605a; }

.solid-img { width: 100%; border-radius: 4px; box-shadow: 0 30px 60px rgba(0,0,0,0.3); }

/* Timeline */
.timeline-modern { max-width: 900px; margin: 0 auto; border-left: 1px solid rgba(197, 163, 104, 0.3); padding-left: 40px; }
.timeline-item { position: relative; margin-bottom: 60px; }
.timeline-item::before { content: ''; position: absolute; left: -45px; top: 10px; width: 10px; height: 10px; background: #c5a368; border-radius: 50%; }

.year { font-size: 24px; font-weight: 800; color: #c5a368; margin-bottom: 10px; }
.content h3 { font-size: 20px; margin-bottom: 10px; color: #ffffff; }
.content p { color: #a8b0ab; line-height: 1.6; }

/* Team */
.team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
.team-card { background: #0d2319; border-radius: 4px; overflow: hidden; transition: transform 0.3s ease; }
.team-card:hover { transform: translateY(-10px); }

.team-img-placeholder { height: 200px; background: #122d21; display: flex; align-items: center; justify-content: center; color: #c5a368; }
.team-info { padding: 30px; text-align: center; }
.team-info h3 { margin-bottom: 5px; font-size: 20px; }
.role { display: block; color: #c5a368; font-size: 14px; font-weight: 700; text-transform: uppercase; margin-bottom: 15px; }
.team-info p { font-size: 14px; color: #a8b0ab; line-height: 1.5; }

/* CTA */
.cta-banner { background: #c5a368; padding: 80px 40px; border-radius: 4px; text-align: center; color: #0a1a12; }
.cta-banner h2 { font-size: 32px; font-weight: 800; margin-bottom: 40px; }
.btn-bronze { background: #0a1a12; color: #ffffff; padding: 16px 40px; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }

/* Reveal */
.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

@media (max-width: 768px) {
  .section-lg { padding: 60px 0; }
  .mission-grid { grid-template-columns: 1fr; gap: 40px; }
  .mission-visual { order: -1; }
  .stats-mini { flex-direction: column; gap: 20px; align-items: center; text-align: center; }
  .hero-title { font-size: clamp(1.8rem, 8vw, 2.5rem); }
  .hero-subtitle { margin-left: auto; margin-right: auto; }
  .timeline-modern { padding-left: 30px; }
  .cta-banner { padding: 60px 20px; }
}
</style>
