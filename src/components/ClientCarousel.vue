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
  padding: var(--spacing-20) 0;
  background: linear-gradient(135deg, var(--gray-50), var(--primary-50));
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

.carousel {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-xl);
  background: white;
  box-shadow: var(--shadow-lg);
}

.carousel-track {
  display: flex;
  transition: transform var(--transition-normal);
}

.carousel-slide {
  min-width: 100%;
  flex-shrink: 0;
}

.carousel-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8);
  min-height: 300px;
  width: 100%;
}

.client-logo {
  width: 100%;
  max-width: 600px;
  height: 250px;
  background: white;
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  border: 2px solid var(--gray-100);
  overflow: hidden;
}

.client-logo:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-200);
}

.logo-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all var(--transition-normal);
}

.client-logo:hover .logo-image {
  filter: grayscale(0%);
  opacity: 1;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: 2px solid var(--gray-200);
  border-radius: var(--border-radius-full);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--gray-600);
  box-shadow: var(--shadow-md);
  z-index: 10;
}

.carousel-controls:hover {
  background: var(--primary-600);
  color: white;
  border-color: var(--primary-600);
  transform: translateY(-50%) scale(1.1);
}

.carousel-prev {
  left: var(--spacing-4);
}

.carousel-next {
  right: var(--spacing-4);
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-6);
  background: var(--gray-50);
}

.carousel-indicator {
  width: 12px;
  height: 12px;
  border-radius: var(--border-radius-full);
  border: none;
  background: var(--gray-300);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.carousel-indicator.active {
  background: var(--primary-600);
  transform: scale(1.2);
}

.carousel-indicator:hover {
  background: var(--primary-400);
}

/* Responsividade */
@media (max-width: 1024px) {
  .carousel-content {
    padding: var(--spacing-6);
    min-height: 250px;
  }
  
  .client-logo {
    max-width: 500px;
    height: 200px;
    padding: var(--spacing-6);
  }
}

@media (max-width: 768px) {
  .carousel-section {
    padding: var(--spacing-16) 0;
  }

  .carousel-content {
    padding: var(--spacing-4);
    min-height: 200px;
  }
  
  .client-logo {
    max-width: 400px;
    height: 160px;
    padding: var(--spacing-4);
  }

  .section-title {
    font-size: var(--font-size-2xl);
  }

  .section-subtitle {
    font-size: var(--font-size-base);
  }

  .carousel-controls {
    width: 40px;
    height: 40px;
  }

  .carousel-prev {
    left: var(--spacing-2);
  }

  .carousel-next {
    right: var(--spacing-2);
  }
}

@media (max-width: 480px) {
  .carousel-content {
    padding: var(--spacing-3);
    min-height: 150px;
  }

  .client-logo {
    max-width: 100%;
    height: 120px;
    padding: var(--spacing-3);
  }
}
</style>
