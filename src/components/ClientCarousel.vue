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
        >
          <ChevronLeft class="h-6 w-6 text-gray-600" />
        </button>
        <button 
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
        >
          <ChevronRight class="h-6 w-6 text-gray-600" />
        </button>

        <!-- Indicators -->
        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(slide, index) in clientSlides"
            :key="index"
            @click="currentSlide = index"
            :class="[
              'w-3 h-3 rounded-full transition-colors',
              currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
            ]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { clients } from '@/data/clients'

export default {
  name: 'ClientCarousel',
  components: {
    ChevronLeft,
    ChevronRight
  },
  data() {
    return {
      currentSlide: 0,
      carouselInterval: null,
      clients
    }
  },
  computed: {
    clientSlides() {
      const slides = []
      for (let i = 0; i < this.clients.length; i += 4) {
        slides.push(this.clients.slice(i, i + 4))
      }
      return slides
    }
  },
  mounted() {
    this.startCarousel()
  },
  beforeUnmount() {
    this.stopCarousel()
  },
  methods: {
    startCarousel() {
      this.carouselInterval = setInterval(() => {
        this.nextSlide()
      }, 4000)
    },
    stopCarousel() {
      if (this.carouselInterval) {
        clearInterval(this.carouselInterval)
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.clientSlides.length
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.clientSlides.length - 1 : this.currentSlide - 1
    }
  }
}
</script>
