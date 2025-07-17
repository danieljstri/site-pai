<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Oferecemos soluções completas em consultoria ambiental para garantir a conformidade da sua empresa.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <ServiceCard 
          v-for="service in services" 
          :key="service.id" 
          :service="service" 
          :show-details="true"
        />
      </div>

      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            Precisa de um serviço personalizado?
          </h2>
          <p class="text-gray-600 mb-6">
            Nossa equipe está pronta para desenvolver soluções específicas para sua empresa.
          </p>
          <router-link to="/contatos" class="btn-primary">
            Solicitar Orçamento
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/ServiceCard.vue'
import { services } from '@/data/services'
</script>
