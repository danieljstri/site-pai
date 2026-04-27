<template>
  <div class="page-dark">
    <!-- Hero Section -->
    <section class="licensing-hero">
      <div class="container">
        <div class="hero-content reveal">
          <div class="icon-wrap"><ShieldCheck :size="48" /></div>
          <h1 class="hero-title">Gestão e <span class="accent">Licenciamento Empresarial</span></h1>
          <p class="hero-subtitle">
            Regularize seu negócio e foque no que realmente importa. Cuidamos de todo o processo de licenças para que você tenha tranquilidade e segurança jurídica.
          </p>
        </div>
      </div>
    </section>

    <!-- Detailed Info -->
    <section class="licensing-details section-lg">
      <div class="container">
        <div class="content-grid">
          <div class="text-side reveal">
            <h2 class="section-title">Soluções Completas para Regularização</h2>
            <p>
              Manter as licenças em dia é um desafio constante para qualquer empresa. Nossa consultoria oferece uma solução fim-a-fim: desde a <strong>recuperação de licenças vencidas</strong> até a obtenção de novos alvarás específicos para o seu setor.
            </p>
            <p>
              Com nossa gestão, você elimina o risco de multas, interdições e processos administrativos, garantindo que sua operação nunca pare por burocracia.
            </p>
            
            <div class="feature-list">
              <div class="feature-item" v-for="item in analysisItems" :key="item.title">
                <Check class="check" :size="20" />
                <div>
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="sidebar-side">
            <div class="stat-card reveal">
              <Clock class="icon" :size="32" />
              <h3>Mais Tempo para Você</h3>
              <p>Não perca horas com burocracia. Assumimos o controle de prazos e renovações para que sua equipe foque 100% no core business.</p>
            </div>

            <div class="process-card reveal">
              <h3>Áreas de Atuação</h3>
              <div class="expertise-list">
                <div class="expertise-item" v-for="exp in expertise" :key="exp.type">
                  <div class="exp-icon"><component :is="exp.icon" :size="20" /></div>
                  <div class="exp-txt">
                    <h4>{{ exp.type }}</h4>
                    <p>{{ exp.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sectors Section -->
    <section class="sectors-section section-lg bg-soft">
      <div class="container">
        <div class="section-header text-center reveal">
          <h2 class="section-title">Experiência em Diversos Setores</h2>
          <p class="section-subtitle">Atendemos desde operações industriais complexas até serviços urbanos do dia a dia.</p>
        </div>
        
        <div class="sectors-grid reveal">
          <div class="sector-item" v-for="sector in sectors" :key="sector.title">
            <div class="sector-icon"><component :is="sector.icon" :size="24" /></div>
            <div>
              <strong>{{ sector.title }}</strong>
              <p>{{ sector.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="final-cta section-lg">
      <div class="container">
        <div class="cta-banner reveal">
          <h2>Suas licenças estão vencidas ou próximas do prazo?</h2>
          <p>Evite riscos desnecessários. Deixe a regularização com nossos especialistas.</p>
          <router-link to="/contatos" class="btn-solid">Solicitar Regularização</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
import { 
  ShieldCheck, 
  Check, 
  Clock, 
  Factory, 
  HardHat, 
  Store, 
  Utensils,
  FileWarning,
  ClipboardCheck,
  CalendarClock
} from 'lucide-vue-next'

useHead({
  title: 'Licenciamento e Regularização de Empresas | EcoBrasil',
  meta: [
    {
      name: 'description',
      content: 'Soluções em licenciamento ambiental, sanitário e comercial. Regularizamos licenças vencidas e fazemos o controle de prazos para indústrias, mineração e comércio.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://eco-brasil.vercel.app/licenciamento'
    }
  ]
})

const analysisItems = [
  { 
    title: 'Recuperação de Licenças Vencidas', 
    description: 'Análise de passivos e regularização imediata de licenças expiradas junto aos órgãos competentes.' 
  },
  { 
    title: 'Obtenção de Novas Licenças', 
    description: 'Processos completos para abertura ou expansão de novos negócios em qualquer setor.' 
  },
  { 
    title: 'Controle de Prazos (Deadline)', 
    description: 'Monitoramento ativo para que nenhuma renovação seja esquecida, evitando multas e interdições.' 
  },
  { 
    title: 'Segurança Jurídica', 
    description: 'Garantia de que seu negócio opera 100% dentro das exigências legais municipais, estaduais e federais.' 
  }
]

const expertise = [
  { 
    type: 'Ambiental', 
    description: 'LP, LI, LO e renovações junto a órgãos ambientais.',
    icon: ShieldCheck
  },
  { 
    type: 'Sanitária', 
    description: 'Alvarás e conformidade com a Vigilância Sanitária.',
    icon: ClipboardCheck
  },
  { 
    type: 'Operacional', 
    description: 'Alvarás de funcionamento e licenças de publicidade.',
    icon: FileWarning
  }
]

const sectors = [
  { 
    title: 'Indústrias', 
    description: 'Licenciamento complexo para parques fabris e manufatura.',
    icon: Factory 
  },
  { 
    title: 'Mineração', 
    description: 'Regularização específica para extração e beneficiamento.',
    icon: HardHat 
  },
  { 
    title: 'Serviços Urbanos', 
    description: 'Restaurantes, mercados e estabelecimentos comerciais.',
    icon: Utensils 
  },
  { 
    title: 'Logística', 
    description: 'Licenças para depósitos, galpões e transporte.',
    icon: CalendarClock 
  }
]

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
.page-dark { background-color: #0a1a12; color: #f0ede5; min-height: 100vh; }
.section-lg { padding: 120px 0; }
.bg-soft { background-color: #07140e; }

.licensing-hero {
  height: 50vh;
  min-height: 450px;
  background: linear-gradient(rgba(10, 26, 18, 0.9), rgba(10, 26, 18, 1)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
}

.icon-wrap { color: #c5a368; margin-bottom: 30px; }
.hero-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; margin-bottom: 20px; color: #ffffff; }
.accent { color: #c5a368; }
.hero-subtitle { color: #ffffff; font-size: 20px; max-width: 800px; margin: 0 auto; line-height: 1.5; }

.content-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 100px; }

.section-title { font-size: 36px; font-weight: 700; margin-bottom: 30px; position: relative; color: #ffffff !important; }
.section-title::after { content: ''; display: block; width: 50px; height: 3px; background: #c5a368; margin-top: 15px; }

.feature-list { display: grid; gap: 30px; margin-top: 50px; }
.feature-item { display: flex; gap: 20px; }
.feature-item .check { color: #c5a368; margin-top: 3px; }
.feature-item h4 { font-size: 18px; margin-bottom: 5px; color: #ffffff; }
.feature-item p { color: #cbd5e1; font-size: 15px; line-height: 1.6; }

.sidebar-side { display: flex; flex-direction: column; gap: 30px; }

.stat-card { background: #c5a368; color: #0a1a12; padding: 40px; border-radius: 4px; }
.stat-card .icon { margin-bottom: 20px; }
.stat-card h3 { font-size: 20px; margin-bottom: 15px; font-weight: 800; }
.stat-card p { font-size: 16px; line-height: 1.6; opacity: 0.9; }

.process-card { background: #0d2319; padding: 40px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); }
.process-card h3 { margin-bottom: 30px; color: #ffffff; font-size: 24px; }

.expertise-list { display: flex; flex-direction: column; gap: 25px; }
.expertise-item { display: flex; gap: 20px; }
.exp-icon { color: #c5a368; margin-top: 3px; flex-shrink: 0; }
.exp-txt h4 { font-size: 16px; margin-bottom: 5px; color: #ffffff; }
.exp-txt p { font-size: 14px; color: #cbd5e1; margin: 0; }

.sectors-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.sector-item { display: flex; gap: 20px; background: #0d2319; padding: 30px; border-radius: 4px; align-items: flex-start; }
.sector-icon { color: #c5a368; background: rgba(197, 163, 104, 0.1); padding: 15px; border-radius: 8px; flex-shrink: 0; }
.sector-item p { margin: 0; color: #cbd5e1; font-size: 14px; margin-top: 5px; line-height: 1.5; }
.sector-item strong { color: #ffffff; font-size: 18px; display: block; }

.cta-banner { background: #c5a368; padding: 80px 40px; border-radius: 4px; text-align: center; color: #0a1a12; }
.cta-banner h2 { font-size: 32px; font-weight: 800; margin-bottom: 15px; color: #0a1a12; }
.cta-banner p { margin-bottom: 40px; color: #0a1a12; font-size: 18px; }
.btn-solid { background: #0a1a12; color: #ffffff; padding: 16px 40px; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; display: inline-block; transition: all 0.3s ease; }
.btn-solid:hover { background: #1a3a2a; transform: translateY(-2px); }

.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

@media (max-width: 1024px) {
  .content-grid { grid-template-columns: 1fr; gap: 60px; }
}

@media (max-width: 768px) {
  .section-lg { padding: 60px 0; }
  .hero-title { font-size: clamp(2rem, 8vw, 2.5rem); }
  .hero-subtitle { font-size: 18px; }
  .stat-card, .process-card, .cta-banner { padding: 40px 20px; }
  .section-title { font-size: 28px; }
}
</style>
