<template>
  <div>
    <!-- Hero Section -->
    <section class="accessibility-hero">
      <div class="hero-background">
        <img 
          src="https://img.freepik.com/fotos-gratis/pessoa-com-deficiencia-viajando-na-cidade_23-2149494533.jpg?semt=ais_hybrid&w=740" 
          alt="Rampa de acessibilidade em edifício moderno"
          class="hero-image"
        />
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-icon">
            <Accessibility />
          </div>
          <h1 class="hero-title animate-fade-in-up">Laudo de Acessibilidade</h1>
          <p class="hero-subtitle animate-fade-in-up">
            Garantimos que seu estabelecimento esteja em conformidade com as normas de acessibilidade e inclusão.
          </p>
        </div>
      </div>
    </section>

    <!-- Importance Section -->
    <section class="importance-section">
      <div class="container">
        <div class="importance-card">
          <div class="importance-header">
            <Shield class="importance-icon" />
            <h2>Por que é importante?</h2>
          </div>
          <p>
            O laudo de acessibilidade é obrigatório para diversos tipos de estabelecimentos e garante que pessoas 
            com deficiência ou mobilidade reduzida tenham acesso adequado às instalações, promovendo inclusão e igualdade.
          </p>
        </div>
      </div>
    </section>

    <!-- Analysis Section -->
    <section class="analysis-section">
      <div class="container">
        <div class="analysis-content">
          <div class="analysis-text">
            <h3 class="section-title">O que analisamos:</h3>
            <div class="analysis-grid">
              <div 
                v-for="analysis in analysisItems" 
                :key="analysis.title"
                class="analysis-item"
              >
                <Check class="analysis-check" />
                <div>
                  <h4>{{ analysis.title }}</h4>
                  <p>{{ analysis.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="process-card">
            <h3 class="section-title">Nosso Processo:</h3>
            <div class="process-steps">
              <div 
                v-for="(step, index) in processSteps" 
                :key="step.title"
                class="process-step"
              >
                <div :class="`process-number ${step.color}`">
                  {{ index + 1 }}
                </div>
                <div class="process-content">
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
                </div>
              </div>
            </div>

            <div class="process-tip">
              <p>
                💡 <strong>Dica:</strong> O laudo deve ser renovado periodicamente conforme a legislação local.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Norms Section -->
    <section class="norms-section">
      <div class="container">
        <div class="norms-card">
          <h3 class="section-title">Normas e Legislação</h3>
          <div class="norms-content">
            <div class="norms-column">
              <h4>Principais Normas:</h4>
              <ul class="norms-list">
                <li 
                  v-for="norm in norms" 
                  :key="norm.code"
                >
                  <FileText />
                  <span>{{ norm.code }} - {{ norm.description }}</span>
                </li>
              </ul>
            </div>
            <div class="establishments-column">
              <h4>Estabelecimentos Obrigatórios:</h4>
              <ul class="establishments-list">
                <li 
                  v-for="establishment in establishments" 
                  :key="establishment"
                >
                  <Building />
                  <span>{{ establishment }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-background">
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2>Precisa de um Laudo de Acessibilidade?</h2>
          <p>
            Nossa equipe especializada está pronta para ajudar sua empresa a garantir 
            a conformidade com todas as normas de acessibilidade.
          </p>
          <router-link to="/contatos" class="btn btn-secondary">
            Solicite seu Laudo de Acessibilidade
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Accessibility, Check, FileText, Building, Shield } from 'lucide-vue-next'

interface AnalysisItem {
  title: string
  description: string
}

interface ProcessStep {
  title: string
  description: string
  color: string
}

interface Norm {
  code: string
  description: string
}

const analysisItems: AnalysisItem[] = [
  {
    title: 'Acessos e Circulação',
    description: 'Rampas, corredores, portas e passagens'
  },
  {
    title: 'Sanitários Adaptados',
    description: 'Banheiros com equipamentos adequados'
  },
  {
    title: 'Sinalização',
    description: 'Placas em braile e sinalização visual'
  },
  {
    title: 'Estacionamento',
    description: 'Vagas reservadas e adequadas'
  },
  {
    title: 'Elevadores e Plataformas',
    description: 'Equipamentos de acesso vertical'
  },
  {
    title: 'Mobiliário Adaptado',
    description: 'Balcões, mesas e equipamentos acessíveis'
  }
]

const processSteps: ProcessStep[] = [
  {
    title: 'Vistoria Técnica',
    description: 'Análise completa das instalações por profissional qualificado',
    color: 'green'
  },
  {
    title: 'Relatório Detalhado',
    description: 'Documentação de conformidades e não-conformidades encontradas',
    color: 'blue'
  },
  {
    title: 'Emissão do Laudo',
    description: 'Documento oficial com validade legal e recomendações',
    color: 'green'
  }
]

const norms: Norm[] = [
  { code: 'NBR 9050/2020', description: 'Acessibilidade a edificações' },
  { code: 'Lei 13.146/2015', description: 'Lei Brasileira de Inclusão' },
  { code: 'Decreto 5.296/2004', description: 'Regulamentação de acessibilidade' },
  { code: 'NBR 16537/2016', description: 'Sinalização tátil no piso' }
]

const establishments: string[] = [
  'Edifícios comerciais e de serviços',
  'Estabelecimentos de saúde',
  'Instituições de ensino',
  'Centros de compras',
  'Edifícios residenciais multifamiliares',
  'Espaços culturais e de lazer'
]
</script>

<style scoped>
/* Hero Section */
.accessibility-hero {
  position: relative;
  padding: var(--spacing-20) 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}


.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  backdrop-filter: blur(10px);
}

.hero-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-6);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius-full);
  backdrop-filter: blur(10px);
}

.hero-icon svg {
  width: 48px;
  height: 48px;
  color: var(--text-light);
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  margin-bottom: var(--spacing-6);
  color: var(--text-light);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: 0;
  opacity: 0.95;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Importance Section */
.importance-section {
  padding: var(--spacing-20) 0;
  background: linear-gradient(135deg, var(--primary-50), var(--secondary-50));
}

.importance-card {
  background: white;
  padding: var(--spacing-10);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
  border: 2px solid transparent;
  transition: all var(--transition-normal);
}

.importance-card:hover {
  border-color: var(--primary-200);
  transform: translateY(-4px);
}

.importance-header {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-6);
}

.importance-icon {
  width: 64px;
  height: 64px;
  color: var(--primary-600);
  margin-right: var(--spacing-4);
  padding: var(--spacing-3);
  background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
  border-radius: var(--border-radius-lg);
}

.importance-header h2 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-800);
  margin: 0;
}

.importance-card p {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  line-height: 1.7;
  margin: 0;
}

/* Analysis Section */
.analysis-section {
  padding: var(--spacing-20) 0;
  background: white;
}

.analysis-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: start;
}

.section-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: var(--spacing-8);
}

.analysis-grid {
  display: grid;
  gap: var(--spacing-6);
}

.analysis-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
}

.analysis-check {
  width: 24px;
  height: 24px;
  color: var(--primary-600);
  flex-shrink: 0;
  margin-top: 2px;
}

.analysis-item h4 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: var(--spacing-2);
}

.analysis-item p {
  color: var(--gray-600);
  line-height: 1.6;
  margin: 0;
}

.process-card {
  background: linear-gradient(135deg, var(--gray-50), var(--primary-50));
  padding: var(--spacing-8);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
}

.process-steps {
  display: grid;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-8);
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-4);
}

.process-number {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-weight: 700;
  font-size: var(--font-size-lg);
  flex-shrink: 0;
  box-shadow: var(--shadow-md);
}

.process-number.green {
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
}

.process-number.blue {
  background: linear-gradient(135deg, var(--secondary-500), var(--secondary-600));
}

.process-content h4 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: var(--spacing-2);
}

.process-content p {
  color: var(--gray-600);
  line-height: 1.6;
  margin: 0;
}

.process-tip {
  padding: var(--spacing-4);
  background: linear-gradient(135deg, var(--secondary-100), var(--secondary-200));
  border-radius: var(--border-radius-lg);
  border-left: 4px solid var(--secondary-500);
}

.process-tip p {
  color: var(--secondary-800);
  margin: 0;
  font-size: var(--font-size-sm);
}

/* Norms Section */
.norms-section {
  padding: var(--spacing-20) 0;
  background: linear-gradient(135deg, var(--gray-50), var(--primary-50));
}

.norms-card {
  background: white;
  padding: var(--spacing-10);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
}

.norms-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-10);
}

.norms-column h4,
.establishments-column h4 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: var(--spacing-6);
}

.norms-list,
.establishments-list {
  list-style: none;
  display: grid;
  gap: var(--spacing-3);
}

.norms-list li,
.establishments-list li {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3);
  background: var(--gray-50);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
}

.norms-list li:hover,
.establishments-list li:hover {
  background: var(--primary-50);
  transform: translateX(4px);
}

.norms-list svg {
  width: 20px;
  height: 20px;
  color: var(--primary-600);
  flex-shrink: 0;
}

.establishments-list svg {
  width: 20px;
  height: 20px;
  color: var(--secondary-600);
  flex-shrink: 0;
}

.norms-list span,
.establishments-list span {
  color: var(--gray-700);
  font-weight: 500;
}

/* CTA Section */
.cta-section {
  position: relative;
  padding: var(--spacing-20) 0;
  overflow: hidden;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
  z-index: 1;
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.cta-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--text-light);
}

.cta-content h2 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  color: var(--text-light);
}

.cta-content p {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-8);
  opacity: 0.95;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-content .btn {
  min-width: 280px;
  font-weight: 600;
}

/* Animações */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Media Queries Responsivos */
@media (max-width: 1024px) {
  .analysis-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }

  .analysis-text {
    order: 2;
  }

  .process-card {
    order: 1;
  }

  .norms-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }

  .analysis-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-4);
  }
}

@media (max-width: 768px) {
  .accessibility-hero {
    min-height: 50vh;
    padding: var(--spacing-16) 0;
  }

  .hero-title {
    font-size: var(--font-size-4xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
  }

  .hero-icon {
    width: 64px;
    height: 64px;
  }

  .hero-icon svg {
    width: 36px;
    height: 36px;
  }

  .importance-section,
  .analysis-section,
  .norms-section,
  .cta-section {
    padding: var(--spacing-16) 0;
  }

  .importance-header {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-4);
  }

  .importance-icon {
    margin-right: 0;
  }

  .importance-header h2 {
    font-size: var(--font-size-2xl);
  }

  .section-title {
    font-size: var(--font-size-xl);
  }

  .analysis-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }

  .process-steps {
    gap: var(--spacing-4);
  }

  .cta-content h2 {
    font-size: var(--font-size-2xl);
  }

  .cta-content p {
    font-size: var(--font-size-base);
  }

  .cta-content .btn {
    width: 100%;
    max-width: 320px;
  }
}

@media (max-width: 480px) {
  .accessibility-hero {
    padding: var(--spacing-12) 0;
  }

  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-base);
  }

  .importance-card,
  .process-card,
  .norms-card {
    padding: var(--spacing-6);
  }

  .importance-section,
  .analysis-section,
  .norms-section,
  .cta-section {
    padding: var(--spacing-12) 0;
  }

  .analysis-item {
    gap: var(--spacing-2);
  }

  .process-step {
    gap: var(--spacing-3);
  }

  .process-number {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-base);
  }

  .norms-list li,
  .establishments-list li {
    padding: var(--spacing-2);
  }
}
</style>
