<template>
  <div>
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-background">
        <img 
          src="https://th.bing.com/th/id/R.4a0bcc040d839558a4cb580481bcafb4?rik=xQuWft%2f40kvRbw&riu=http%3a%2f%2fwww.eas.ufma.br%2fwp-content%2fuploads%2f2020%2f11%2fcropped-educao-e-sociedade-ambiental-1024x614.jpg&ehk=sRfboHSWfEcu4iQM44RDZwfnnquRHH5y1nkWZY8L5NE%3d&risl=&pid=ImgRaw&r=0" 
          alt="Equipe de engenheiros ambientais trabalhando em campo"
          class="hero-image"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title animate-fade-in-up">Sobre a EcoBrasil</h1>
          <p class="hero-subtitle animate-fade-in-up">
            Especialistas em consultoria ambiental com anos de experiência no mercado.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-content">
          <div class="mission-text">
            <h2>Nossa Missão</h2>
            <p>
              Garantir que empresas de todos os portes mantenham-se em conformidade com as regulamentações ambientais, 
              oferecendo soluções personalizadas e eficientes que protegem tanto o meio ambiente quanto os interesses comerciais.
            </p>
            <p>
              Nossa equipe de especialistas trabalha com dedicação para simplificar processos complexos e manter 
              sua empresa sempre em dia com todas as exigências legais.
            </p>
            <div class="mission-stats">
              <div class="stat-item green">
                <div class="stat-number">500+</div>
                <div class="stat-label">Empresas Atendidas</div>
              </div>
              <div class="stat-item blue">
                <div class="stat-number">100%</div>
                <div class="stat-label">Taxa de Aprovação</div>
              </div>
              <div class="stat-item green">
                <div class="stat-number">8+</div>
                <div class="stat-label">Anos de Experiência</div>
              </div>
            </div>
          </div>
          <div class="mission-image">
              <div class="overlay-content">
                <Shield />
                <h3>Compromisso com a Excelência</h3>
                <p>Mais de 500 empresas atendidas com 100% de aprovação em licenciamentos.</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Por que nos escolher?</h2>
          <p class="section-subtitle">
            Nossos diferenciais que garantem o sucesso dos seus projetos
          </p>
        </div>
        
        <div class="features-grid">
          <div 
            v-for="feature in features" 
            :key="feature.title"
            :class="`feature-card ${feature.color}`"
          >
            <div class="feature-icon">
              <component :is="feature.icon" />
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossa História</h2>
          <p class="section-subtitle">
            Uma trajetória de crescimento e conquistas
          </p>
        </div>
        
        <div class="timeline">
          <div 
            v-for="milestone in timeline" 
            :key="milestone.year"
            class="timeline-item"
          >
            <div :class="`timeline-marker ${milestone.color}`">
              {{ milestone.year }}
            </div>
            <div class="timeline-content">
              <h4>{{ milestone.title }}</h4>
              <p>{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossa Equipe</h2>
          <p class="section-subtitle">
            Profissionais qualificados e experientes
          </p>
        </div>
        
        <div class="team-grid">
          <div class="team-card">
            <div class="team-image">
            </div>
            <div class="team-info">
              <h3>João Silva</h3>
              <p class="team-role">Diretor Técnico</p>
              <p class="team-description">
                Engenheiro Ambiental com 15 anos de experiência em licenciamento.
              </p>
            </div>
          </div>
          
          <div class="team-card">
            <div class="team-image">
            </div>
            <div class="team-info">
              <h3>Maria Santos</h3>
              <p class="team-role">Gerente de Projetos</p>
              <p class="team-description">
                Especialista em gestão ambiental e processos de conformidade.
              </p>
            </div>
          </div>
          
          <div class="team-card">
            <div class="team-image">
            </div>
            <div class="team-info">
              <h3>Carlos Oliveira</h3>
              <p class="team-role">Consultor Sênior</p>
              <p class="team-description">
                Biólogo especializado em estudos de impacto ambiental.
              </p>
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
          <h2>Pronto para trabalhar conosco?</h2>
          <p>
            Entre em contato e descubra como podemos ajudar sua empresa 
            a alcançar a conformidade ambiental.
          </p>
          <div class="cta-actions">
            <router-link to="/contatos" class="btn btn-secondary">
              Fale Conosco
            </router-link>
            <router-link to="/servicos" class="btn btn-outline">
              Nossos Serviços
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { type Component } from 'vue'
import { Shield, Users, Award, Clock } from 'lucide-vue-next'

interface Feature {
  title: string
  description: string
  icon: Component
  color: string
}

interface TimelineMilestone {
  year: string
  title: string
  description: string
  color: string
}

const features: Feature[] = [
  {
    title: 'Equipe Especializada',
    description: 'Profissionais qualificados e experientes em consultoria ambiental',
    icon: Users,
    color: 'blue'
  },
  {
    title: 'Qualidade Garantida',
    description: 'Processos certificados ISO 14001 e resultados comprovados',
    icon: Award,
    color: 'green'
  },
  {
    title: 'Agilidade',
    description: 'Prazos cumpridos e atendimento eficiente em todos os projetos',
    icon: Clock,
    color: 'blue'
  }
]

const timeline: TimelineMilestone[] = [
  {
    year: '2015',
    title: 'Fundação da EcoBrasil',
    description: 'Início das atividades com foco em licenciamento ambiental',
    color: 'green'
  },
  {
    year: '2018',
    title: 'Expansão dos Serviços',
    description: 'Inclusão de serviços de vistoria e controle de licenças',
    color: 'blue'
  },
  {
    year: '2021',
    title: 'Certificação ISO',
    description: 'Obtenção da certificação ISO 14001 para gestão ambiental',
    color: 'green'
  },
  {
    year: '2024',
    title: 'Mais de 500 Clientes',
    description: 'Marco de 500 empresas atendidas com sucesso',
    color: 'blue'
  }
]
</script>

<style scoped>
.about-hero {
  position: relative;
  padding: var(--spacing-16) 0;
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

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 169, 87, 0.8),
    rgba(18, 50, 86, 0.7)
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--text-light);
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  margin-bottom: var(--spacing-6);
  color: var(--text-light);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: 0;
  opacity: 0.95;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.mission-section {
  padding: var(--spacing-20) 0;
  background: linear-gradient(135deg, var(--primary-50), var(--secondary-50));
}

.mission-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;
}

.mission-text h2 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: var(--spacing-6);
}

.mission-text p {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: var(--spacing-6);
}

.mission-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
  margin-top: var(--spacing-8);
}

.stat-item {
  text-align: center;
  padding: var(--spacing-6);
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  border: 2px solid transparent;
  position: relative;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
}

.stat-item.green::before {
  background: linear-gradient(90deg, var(--primary-500), var(--primary-600));
}

.stat-item.blue::before {
  background: linear-gradient(90deg, var(--secondary-500), var(--secondary-600));
}

.stat-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.stat-item.green:hover {
  border-color: var(--primary-200);
}

.stat-item.blue:hover {
  border-color: var(--secondary-200);
}

.stat-number {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: var(--spacing-2);
}

.stat-item.green .stat-number {
  color: var(--primary-600);
}

.stat-item.blue .stat-number {
  color: var(--secondary-600);
}

.stat-label {
  color: var(--gray-600);
  font-weight: 500;
}

.mission-image {
  position: relative;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mission-image img {
  width: 100%;
  height: auto;
  display: block;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, 
    rgba(0, 169, 87, 0.9), 
    rgba(18, 50, 86, 0.8)
  );
  color: white;
  padding: var(--spacing-8);
  text-align: center;
}

.overlay-content {
  color: var(--text-light);
}

.overlay-content svg {
  width: 48px;
  height: 48px;
  margin-bottom: var(--spacing-4);
  color: var(--text-light);
}

.overlay-content h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--spacing-2);
  color: var(--text-light);
}

.overlay-content p {
  opacity: 0.95;
  margin-bottom: 0;
  color: var(--text-light);
}

.features-section {
  padding: var(--spacing-20) 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-16);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: var(--spacing-4);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-8);
}

.feature-card {
  background: white;
  padding: var(--spacing-8);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  border: 2px solid transparent;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.feature-card.green:hover {
  border-color: var(--primary-200);
}

.feature-card.blue:hover {
  border-color: var(--secondary-200);
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--spacing-6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-full);
}

.feature-card.green .feature-icon {
  background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
  color: var(--primary-600);
}

.feature-card.blue .feature-icon {
  background: linear-gradient(135deg, var(--secondary-100), var(--secondary-200));
  color: var(--secondary-600);
}

.feature-card h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: var(--spacing-4);
}

.feature-card p {
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 0;
}

.timeline-section {
  padding: var(--spacing-20) 0;
  background: linear-gradient(135deg, var(--gray-50), var(--primary-50));
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary-600), var(--secondary-600));
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-12);
  position: relative;
}

.timeline-marker {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-weight: 700;
  font-size: var(--font-size-sm);
  margin-right: var(--spacing-8);
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: var(--shadow-md);
}

.timeline-marker.green {
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
}

.timeline-marker.blue {
  background: linear-gradient(135deg, var(--secondary-500), var(--secondary-600));
}

.timeline-content {
  background: white;
  padding: var(--spacing-6);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  flex: 1;
  border: 2px solid transparent;
  transition: all var(--transition-normal);
}

.timeline-content:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--primary-100);
  transform: translateY(-2px);
}

.timeline-content h4 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: var(--spacing-2);
}

.timeline-content p {
  color: var(--gray-600);
  margin-bottom: 0;
  line-height: 1.6;
}

.team-section {
  padding: var(--spacing-20) 0;
  background: white;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-8);
}

.team-card {
  background: white;
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all var(--transition-normal);
  border: 2px solid transparent;
}

.team-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-8px);
  border-color: var(--primary-100);
}

.team-image {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.team-card:hover .team-image img {
  transform: scale(1.05);
}

.team-info {
  padding: var(--spacing-6);
  text-align: center;
}

.team-info h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--gray-800);
  margin-bottom: var(--spacing-2);
}

.team-role {
  color: var(--primary-600);
  font-weight: 500;
  margin-bottom: var(--spacing-3);
  font-size: var(--font-size-sm);
}

.team-description {
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 0;
}

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

.cta-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

.cta-actions .btn {
  min-width: 160px;
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
  .mission-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }

  .mission-text {
    order: 2;
  }

  .mission-image {
    order: 1;
  }

  .mission-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-4);
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-6);
  }
}

@media (max-width: 768px) {
  .about-hero {
    min-height: 50vh;
    padding: var(--spacing-12) 0;
  }

  .hero-title {
    font-size: var(--font-size-4xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
  }

  .mission-section,
  .features-section,
  .timeline-section,
  .team-section,
  .cta-section {
    padding: var(--spacing-16) 0;
  }

  .mission-stats {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }

  .timeline::before {
    display: none;
  }

  .timeline-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: var(--spacing-8);
  }

  .timeline-marker {
    margin-right: 0;
    margin-bottom: var(--spacing-4);
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }

  .mission-text h2 {
    font-size: var(--font-size-2xl);
  }

  .mission-text p {
    font-size: var(--font-size-base);
  }

  .section-title {
    font-size: var(--font-size-2xl);
  }

  .section-subtitle {
    font-size: var(--font-size-base);
  }

  .cta-content h2 {
    font-size: var(--font-size-2xl);
  }

  .cta-content p {
    font-size: var(--font-size-base);
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-actions .btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .stat-item {
    padding: var(--spacing-4);
  }

  .stat-number {
    font-size: var(--font-size-2xl);
  }

  .timeline-content {
    padding: var(--spacing-4);
  }

  .team-info {
    padding: var(--spacing-4);
  }

  .image-overlay {
    padding: var(--spacing-6);
  }

  .overlay-content h3 {
    font-size: var(--font-size-lg);
  }

  .feature-card {
    padding: var(--spacing-6);
  }

  .feature-icon {
    width: 56px;
    height: 56px;
  }

  .about-hero {
    padding: var(--spacing-8) 0;
  }

  .mission-section,
  .features-section,
  .timeline-section,
  .team-section,
  .cta-section {
    padding: var(--spacing-12) 0;
  }
}
</style>
