<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Clientes</h2>
      <div class="relative overflow-hidden">
        <div 
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div 
            v-for="(slide, index) in clientSlides" 
            :key="index"
            class="w-full flex-shrink-0"
          >
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div 
                v-for="client in slide" 
                :key="client.id"
                class="bg-gray-100 p-6 rounded-lg w-32 h-20 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span class="text-gray-600 font-semibold text-sm text-center">{{ client.name }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Carousel Controls -->
        <button 
          @click="prevSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft class="h-6 w-6 text-gray-600" />
        </button>
        <button 
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          aria-label="Próximo slide"
        >
          <ChevronRight class="h-6 w-6 text-gray-600" />
        </button>

        <!-- Indicators -->
        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(slide, index) in clientSlides"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-3 h-3 rounded-full transition-colors',
              currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
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
  for (let i = 0; i < clients.length; i += 4) {
    slides.push(clients.slice(i, i + 4))
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
