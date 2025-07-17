<template>
  <div>
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <img 
          src="/placeholder.svg?height=600&width=1200" 
          alt="Serviços Ambientais" 
          class="hero-image"
        />
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title animate-fade-in-up">Nossos Serviços</h1>
          <p class="hero-subtitle animate-fade-in-up">
            Oferecemos soluções completas em consultoria ambiental para garantir a conformidade da sua empresa.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Services Grid -->
    <section class="services-content">
      <div class="container">
        <div class="services-grid">
          <ServiceCard 
            v-for="service in services" 
            :key="service.id" 
            :service="service" 
            :show-details="true"
          />
        </div>

        <!-- CTA Section -->
        <div class="services-cta">
          <div class="cta-card">
            <div class="cta-icon">
              <MessageCircle />
            </div>
            <h2>Precisa de um serviço personalizado?</h2>
            <p>
              Nossa equipe está pronta para desenvolver soluções específicas para sua empresa.
            </p>
            <div class="cta-actions">
              <router-link to="/contatos" class="btn btn-primary">
                Solicitar Orçamento
              </router-link>
              <router-link to="/sobre" class="btn btn-outline">
                Conheça Nossa Equipe
              </router-link>
            </div>
          </div>
        </div>

        <!-- Process Section -->
        <div class="process-section">
          <div class="section-header">
            <h2 class="section-title">Como Trabalhamos</h2>
            <p class="section-subtitle">
              Nosso processo é estruturado para garantir eficiência e qualidade
            </p>
          </div>
          
          <div class="process-grid">
            <div class="process-step green">
              <div class="step-number">1</div>
              <div class="step-icon">
                <Search />
              </div>
              <h3>Análise Inicial</h3>
              <p>Avaliamos suas necessidades e requisitos específicos</p>
            </div>
            
            <div class="process-step blue">
              <div class="step-number">2</div>
              <div class="step-icon">
                <FileText />
              </div>
              <h3>Documentação</h3>
              <p>Preparamos toda a documentação necessária</p>
            </div>
            
            <div class="process-step green">
              <div class="step-number">3</div>
              <div class="step-icon">
                <CheckCircle />
              </div>
              <h3>Aprovação</h3>
              <p>Acompanhamos o processo até a aprovação final</p>
            </div>
            
            <div class="process-step blue">
              <div class="step-number">4</div>
              <div class="step-icon">
                <Shield />
              </div>
              <h3>Monitoramento</h3>
              <p>Mantemos o controle contínuo da conformidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { MessageCircle, Search, FileText, CheckCircle, Shield } from 'lucide-vue-next'
import ServiceCard from '@/components/ServiceCard.vue'
import { services } from '@/data/services'
</script>

<style scoped>
.services-hero {
  position: relative;
  padding: var(--spacing-20) 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.services-content {
  padding: var(--spacing-20) 0;
  background: linear-gradient(135deg, var(--gray-50), var(--primary-50));
}

.services-cta {
  margin: var(--spacing-20) 0;
}

.cta-card {
  background: white;
  padding: var(--spacing-12);
  border-radius: var(--border-radius-xl);
  text-align: center;
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--primary-100);
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-600), var(--secondary-600));
}

.cta-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-6);
  background: linear-gradient(135deg, var(--primary-100), var(--secondary-100));
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-600);
}

.cta-card h2 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: var(--spacing-4);
}

.cta-card p {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  margin-bottom: var(--spacing-8);
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

.process-section {
  margin-top: var(--spacing-20);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-8);
}

.process-step {
  background: white;
  padding: var(--spacing-8);
  border-radius: var(--border-radius-xl);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  position: relative;
  border: 2px solid transparent;
}

.process-step::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: var(--border-radius-xl) var(--border-radius-xl) 0 0;
}

.process-step.green::before {
  background: linear-gradient(90deg, var(--primary-500), var(--primary-600));
}

.process-step.blue::before {
  background: linear-gradient(90deg, var(--secondary-500), var(--secondary-600));
}

.process-step:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.process-step.green:hover {
  border-color: var(--primary-200);
}

.process-step.blue:hover {
  border-color: var(--secondary-200);
}

.step-number {
  position: absolute;
  top: -15px;
  right: var(--spacing-6);
  width: 30px;
  height: 30px;
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--font-size-sm);
  color: white;
}

.process-step.green .step-number {
  background: var(--primary-600);
}

.process-step.blue .step-number {
  background: var(--secondary-600);
}

.step-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--spacing-4);
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
}

.process-step.green .step-icon {
  background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
  color: var(--primary-600);
}

.process-step.blue .step-icon {
  background: linear-gradient(135deg, var(--secondary-100), var(--secondary-200));
  color: var(--secondary-600);
}

.process-step:hover .step-icon {
  transform: scale(1.1);
}

.process-step h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--spacing-3);
  color: var(--gray-800);
}

.process-step p {
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .services-hero {
    min-height: 50vh;
    padding: var(--spacing-16) 0;
  }

  .services-content {
    padding: var(--spacing-16) 0;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-actions .btn {
    width: 100%;
    max-width: 280px;
  }

  .process-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }

  .cta-card {
    padding: var(--spacing-8);
  }

  .cta-card h2 {
    font-size: var(--font-size-2xl);
  }

  .cta-card p {
    font-size: var(--font-size-base);
  }
}
</style>
