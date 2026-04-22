<template>
  <section class="carousel-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Nossos Clientes</h2>
        <p class="section-subtitle">Empresas que confiam em nossos serviços</p>
      </div>
      
      <div class="carousel">
        <div 
          class="carousel-track"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div 
            v-for="(client, index) in clientSlides" 
            :key="client.id"
            class="carousel-slide"
          >
            <div class="carousel-content">
              <div class="client-logo">
                <img 
                  :src="client.logo" 
                  :alt="client.name"
                  class="logo-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Carousel Controls -->
        <button 
          @click="prevSlide"
          class="carousel-controls carousel-prev"
          aria-label="Slide anterior"
        >
          <ChevronLeft />
        </button>
        <button 
          @click="nextSlide"
          class="carousel-controls carousel-next"
          aria-label="Próximo slide"
        >
          <ChevronRight />
        </button>

        <!-- Indicators -->
        <div class="carousel-indicators">
          <button
            v-for="(client, index) in clientSlides"
            :key="client.id"
            @click="goToSlide(index)"
            :class="[
              'carousel-indicator',
              { 'active': currentSlide === index }
            ]"
            :aria-label="`Ir para slide ${index + 1} - ${client.name}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { clients } from '@/data/clients'
import type { Client } from '@/types'

const currentSlide = ref<number>(0)
const carouselInterval = ref<ReturnType<typeof setInterval> | null>(null)

const clientSlides = computed<Client[]>(() => {
  return clients
})

const startCarousel = (): void => {
  carouselInterval.value = setInterval(() => {
    nextSlide()
  }, 4000)
}

const stopCarousel = (): void => {
  if (carouselInterval.value) {
    clearInterval(carouselInterval.value)
    carouselInterval.value = null
  }
}

const nextSlide = (): void => {
  currentSlide.value = (currentSlide.value + 1) % clientSlides.value.length
}

const prevSlide = (): void => {
  currentSlide.value = currentSlide.value === 0 
    ? clientSlides.value.length - 1 
    : currentSlide.value - 1
}

const goToSlide = (index: number): void => {
  currentSlide.value = index
}

onMounted(() => {
  startCarousel()
})

onBeforeUnmount(() => {
  stopCarousel()
})
</script>

<style scoped>
.carousel-section {
  padding: 60px 0;
  background: transparent;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 18px;
  color: #a8b0ab;
  max-width: 600px;
  margin: 0 auto;
}

.carousel {
  position: relative;
  overflow: hidden;
  background: transparent;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  min-width: 100%;
  flex-shrink: 0;
}

.carousel-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 350px; /* Aumentado para dar mais destaque */
  width: 100%;
}

.client-logo {
  width: 100%;
  max-width: 800px; /* Aumentado significativamente */
  height: 300px; /* Aumentado para ocupar mais o bloco */
  background: rgba(255, 255, 255, 0.95); /* Fundo quase branco para destacar logos originais */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.client-logo:hover {
  transform: scale(1.02);
  border-color: #c5a368;
}

.logo-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  opacity: 1; /* Sempre visível */
  filter: none; /* Cores originais sempre */
  transition: transform 0.3s ease;
}

.client-logo:hover .logo-image {
  transform: scale(1.05);
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(197, 163, 104, 0.9); /* Usando a cor bronze do tema */
  border: none;
  border-radius: 4px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #0a1a12;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.carousel-controls:hover {
  background: #ffffff;
  color: #0a1a12;
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 20px 0;
}

.carousel-indicator {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-indicator.active {
  background: #c5a368;
  width: 30px;
}

@media (max-width: 768px) {
  .carousel-content {
    min-height: 250px;
  }
  
  .client-logo {
    height: 200px;
    padding: 20px;
  }
  
  .carousel-controls {
    width: 40px;
    height: 40px;
  }
}
</style>
