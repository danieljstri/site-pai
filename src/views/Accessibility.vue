<template>
  <div class="page-dark">
    <!-- Hero Section -->
    <section class="accessibility-hero">
      <div class="container">
        <div class="hero-content reveal">
          <div class="icon-wrap"><Accessibility :size="48" /></div>
          <h1 class="hero-title">Laudo de <span class="accent">Acessibilidade</span></h1>
          <p class="hero-subtitle">
            Conformidade com a NBR 9050 e Lei Brasileira de Inclusão para estabelecimentos comerciais e públicos.
          </p>
        </div>
      </div>
    </section>

    <!-- Detailed Info -->
    <section class="access-details section-lg">
      <div class="container">
        <div class="content-grid">
          <div class="text-side reveal">
            <h2 class="section-title">Inclusão e Conformidade Legal</h2>
            <p>
              O Laudo de Acessibilidade é um documento técnico indispensável para a obtenção de alvarás de funcionamento e renovação de licenças. Ele atesta que o imóvel garante autonomia e segurança para pessoas com deficiência ou mobilidade reduzida.
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
              <Shield class="icon" :size="32" />
              <h3>Obrigatoriedade</h3>
              <p>Essencial para shoppings, escolas, hospitais, hotéis e edifícios comerciais conforme o Decreto Federal 5.296/04.</p>
            </div>

            <div class="process-card reveal">
              <h3>Nosso Fluxo</h3>
              <div class="steps">
                <div class="step" v-for="(step, i) in processSteps" :key="i">
                  <span class="step-idx">{{ i + 1 }}</span>
                  <div class="step-txt">
                    <h4>{{ step.title }}</h4>
                    <p>{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Standards Section -->
    <section class="standards-section section-lg bg-soft">
      <div class="container">
        <div class="section-header text-center reveal">
          <h2 class="section-title">Normas Aplicadas</h2>
          <p class="section-subtitle">Trabalhamos rigorosamente dentro das normas brasileiras vigentes.</p>
        </div>
        
        <div class="standards-grid reveal">
          <div class="standard-item" v-for="norm in norms" :key="norm.code">
            <FileText class="icon" :size="24" />
            <div>
              <strong>{{ norm.code }}</strong>
              <p>{{ norm.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="final-cta section-lg">
      <div class="container">
        <div class="cta-banner reveal">
          <h2>Sua empresa está acessível?</h2>
          <p>Evite multas e promova a inclusão. Solicite uma vistoria técnica agora.</p>
          <router-link to="/contatos" class="btn-solid">Agendar Vistoria</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { Accessibility, Check, Shield, FileText } from 'lucide-vue-next'

const analysisItems = [
  { title: 'Rota Acessível', description: 'Rampas, calçadas e circulações internas conforme NBR 9050.' },
  { title: 'Sanitários', description: 'Dimensionamento e instalação de barras de apoio.' },
  { title: 'Sinalização', description: 'Sinalização tátil (piso e placas) e visual.' },
  { title: 'Mobiliário', description: 'Balcões de atendimento e mesas adequadas.' }
]

const processSteps = [
  { title: 'Vistoria Local', description: 'Coleta de medidas e registro fotográfico.' },
  { title: 'Análise Normativa', description: 'Comparação com os requisitos legais.' },
  { title: 'Emissão do Laudo', description: 'Documento técnico com recomendações.' }
]

const norms = [
  { code: 'NBR 9050:2020', description: 'Acessibilidade a edificações, mobiliário e equipamentos.' },
  { code: 'Lei 13.146/2015', description: 'Estatuto da Pessoa com Deficiência (LBI).' },
  { code: 'NBR 16537:2016', description: 'Sinalização tátil no piso - Diretrizes.' }
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

.accessibility-hero {
  height: 50vh;
  min-height: 400px;
  background: linear-gradient(rgba(10, 26, 18, 0.85), rgba(10, 26, 18, 1)), url('https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1920&q=80');
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
.process-card h3 { margin-bottom: 30px; color: #ffffff; }

.steps { display: flex; flex-direction: column; gap: 25px; }
.step { display: flex; gap: 20px; }
.step-idx { width: 24px; height: 24px; background: #c5a368; color: #0a1a12; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 12px; font-weight: 800; flex-shrink: 0; margin-top: 3px; }
.step-txt h4 { font-size: 16px; margin-bottom: 5px; color: #ffffff; }
.step-txt p { font-size: 14px; color: #cbd5e1; }

.standards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.standard-item { display: flex; gap: 20px; background: #0d2319; padding: 30px; border-radius: 4px; align-items: center; }
.standard-item .icon { color: #c5a368; }
.standard-item p { margin: 0; color: #cbd5e1; font-size: 14px; margin-top: 5px; }
.standard-item strong { color: #ffffff; }

.cta-banner { background: #c5a368; padding: 80px 40px; border-radius: 4px; text-align: center; color: #0a1a12; }
.cta-banner h2 { font-size: 32px; font-weight: 800; margin-bottom: 15px; color: #0a1a12; }
.cta-banner p { margin-bottom: 40px; color: #0a1a12; }
.btn-solid { background: #0a1a12; color: #ffffff; padding: 16px 40px; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; display: inline-block; }

.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

@media (max-width: 1024px) {
  .content-grid { grid-template-columns: 1fr; gap: 60px; }
}

@media (max-width: 768px) {
  .section-lg { padding: 60px 0; }
  .hero-title { font-size: clamp(2rem, 8vw, 2.5rem); }
  .hero-subtitle { margin-left: auto; margin-right: auto; }
  .icon-wrap { margin-bottom: 20px; }
  .icon-wrap svg { width: 32px; height: 32px; }
  .stat-card, .process-card, .cta-banner { padding: 40px 20px; }
  .section-title { font-size: 28px; }
}
</style>
