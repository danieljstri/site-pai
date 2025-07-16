<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Consultoria Ambiental Especializada
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Garantimos a conformidade ambiental da sua empresa com soluções completas em licenciamento, vistoria e manutenção de licenças.
        </p>
        <router-link to="/contatos" class="btn-secondary inline-block">
          Entre em Contato
        </router-link>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Serviços</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            v-for="service in services.slice(0, 4)" 
            :key="service.id" 
            :service="service" 
          />
        </div>
        <div class="text-center mt-8">
          <router-link to="/servicos" class="btn-primary">
            Ver Todos os Serviços
          </router-link>
        </div>
      </div>
    </section>

    <!-- Client Carousel -->
    <ClientCarousel />

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Pronto para começar?</h2>
        <p class="text-xl mb-8">
          Entre em contato conosco e descubra como podemos ajudar sua empresa.
        </p>
        <router-link to="/contatos" class="btn-secondary">
          Fale Conosco
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue'
import ClientCarousel from '@/components/ClientCarousel.vue'
import { services } from '@/data/services'

export default {
  name: 'Home',
  components: {
    ServiceCard,
    ClientCarousel
  },
  data() {
    return {
      services
    }
  }
}
</script>
