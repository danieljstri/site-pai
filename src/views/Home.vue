<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <img 
          src="/placeholder.svg?height=800&width=1200" 
          alt="Consultoria Ambiental" 
          class="hero-image"
        />
      </div>
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title animate-fade-in-up">
            Consultoria Ambiental Especializada
          </h1>
          <p class="hero-subtitle animate-fade-in-up">
            Garantimos a conformidade ambiental da sua empresa com soluções completas em licenciamento, vistoria e manutenção de licenças.
          </p>
          <div class="hero-actions animate-fade-in-up">
            <router-link to="/contatos" class="btn btn-secondary">
              Entre em Contato
            </router-link>
            <router-link to="/servicos" class="btn btn-outline">
              Nossos Serviços
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card green">
            <div class="feature-icon">
              <Shield />
            </div>
            <h3>100% de Aprovação</h3>
            <p>Mais de 500 licenças aprovadas sem rejeições</p>
          </div>
          <div class="feature-card blue">
            <div class="feature-icon">
              <Clock />
            </div>
            <h3>Agilidade Garantida</h3>
            <p>Processos otimizados para máxima eficiência</p>
          </div>
          <div class="feature-card green">
            <div class="feature-icon">
              <Users />
            </div>
            <h3>Equipe Especializada</h3>
            <p>Profissionais qualificados e experientes</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="services-preview">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nossos Serviços</h2>
          <p class="section-subtitle">
            Soluções completas para manter sua empresa em conformidade ambiental
          </p>
        </div>
        
        <div class="services-grid">
          <ServiceCard 
            v-for="service in featuredServices" 
            :key="service.id" 
            :service="service" 
          />
        </div>
        
        <div class="services-cta">
          <router-link to="/servicos" class="btn btn-primary">
            Ver Todos os Serviços
          </router-link>
        </div>
      </div>
    </section>

    <!-- Client Carousel -->
    <ClientCarousel />

    <!-- About Preview -->
    <section class="about-preview">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Por que escolher a EcoConsult?</h2>
            <p>
              Com mais de 8 anos de experiência no mercado, somos especialistas em 
              consultoria ambiental e temos orgulho de manter 100% de aprovação em 
              todos os processos de licenciamento.
            </p>
            <ul class="about-features">
              <li>
                <Check />
                <span>Mais de 500 empresas atendidas</span>
              </li>
              <li>
                <Check />
                <span>100% de aprovação em licenciamentos</span>
              </li>
              <li>
                <Check />
                <span>Equipe certificada ISO 14001</span>
              </li>
              <li>
                <Check />
                <span>Atendimento 24h para emergências</span>
              </li>
            </ul>
            <router-link to="/sobre" class="btn btn-primary">
              Conheça Nossa História
            </router-link>
          </div>
          <div class="about-image">
            <img 
              src="/placeholder.svg?height=400&width=600" 
              alt="Equipe EcoConsult" 
              class="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-background">
        <img 
          src="/placeholder.svg?height=400&width=1200" 
          alt="Meio Ambiente" 
          class="cta-image"
        />
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2>Pronto para começar?</h2>
          <p>
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a manter-se em conformidade ambiental.
          </p>
          <div class="cta-actions">
            <router-link to="/contatos" class="btn btn-secondary">
              Fale Conosco
            </router-link>
            <router-link to="/acessibilidade" class="btn btn-outline">
              Laudo de Acessibilidade
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Shield, Clock, Users, Check } from 'lucide-vue-next'
import ServiceCard from '@/components/ServiceCard.vue'
import ClientCarousel from '@/components/ClientCarousel.vue'
import { services } from '@/data/services'
import type { Service } from '@/types'

const featuredServices = computed<Service[]>(() => services.slice(0, 4))
</script>
