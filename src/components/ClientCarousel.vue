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
            v-for="(slide, index) in clientSlides" 
            :key="index"
            class="carousel-slide"
          >
            <div class="carousel-content">
              <div 
                v-for="client in slide" 
                :key="client.id"
                class="client-logo"
              >
                <span>{{ client.name }}</span>
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
            v-for="(slide, index) in clientSlides"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'carousel-indicator',
              { 'active': currentSlide === index }
            ]"
            :aria-label="`Ir para slide ${index + 1}`"
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
const carouselInterval = ref<NodeJS.Timeout | null>(null)

const clientSlides = computed<Client[][]>(() => {
  const slides: Client[][] = []
  const itemsPerSlide = window.innerWidth < 768 ? 2 : 4
  for (let i = 0; i < clients.length; i += itemsPerSlide) {
    slides.push(clients.slice(i, i + itemsPerSlide))
  }
  return slides
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
