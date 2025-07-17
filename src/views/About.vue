<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Sobre a EcoConsult</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Especialistas em consultoria ambiental com anos de experiência no mercado.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
          <p class="text-gray-600 mb-6">
            Garantir que empresas de todos os portes mantenham-se em conformidade com as regulamentações ambientais, 
            oferecendo soluções personalizadas e eficientes que protegem tanto o meio ambiente quanto os interesses comerciais.
          </p>
          <p class="text-gray-600">
            Nossa equipe de especialistas trabalha com dedicação para simplificar processos complexos e manter 
            sua empresa sempre em dia com todas as exigências legais.
          </p>
        </div>
        <div class="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-lg">
          <Shield class="h-24 w-24 text-green-600 mx-auto mb-6" />
          <h3 class="text-2xl font-bold text-center text-gray-800 mb-4">Compromisso com a Excelência</h3>
          <p class="text-center text-gray-600">
            Mais de 500 empresas atendidas com 100% de aprovação em licenciamentos.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="feature in features" 
          :key="feature.title"
          class="text-center"
        >
          <component :is="feature.icon" :class="`h-16 w-16 ${feature.color} mx-auto mb-4`" />
          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Timeline -->
      <div class="bg-gray-50 p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Nossa História</h2>
        <div class="space-y-8">
          <div 
            v-for="milestone in timeline" 
            :key="milestone.year"
            class="flex items-center"
          >
            <div :class="`${milestone.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6`">
              {{ milestone.year }}
            </div>
            <div>
              <h4 class="text-xl font-semibold text-gray-800">{{ milestone.title }}</h4>
              <p class="text-gray-600">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    description: 'Profissionais qualificados e experientes',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    title: 'Qualidade Garantida',
    description: 'Processos certificados e resultados comprovados',
    icon: Award,
    color: 'text-green-600'
  },
  {
    title: 'Agilidade',
    description: 'Prazos cumpridos e atendimento eficiente',
    icon: Clock,
    color: 'text-blue-600'
  }
]

const timeline: TimelineMilestone[] = [
  {
    year: '2015',
    title: 'Fundação da EcoConsult',
    description: 'Início das atividades com foco em licenciamento ambiental',
    color: 'bg-green-600'
  },
  {
    year: '2018',
    title: 'Expansão dos Serviços',
    description: 'Inclusão de serviços de vistoria e controle de licenças',
    color: 'bg-blue-600'
  },
  {
    year: '2021',
    title: 'Certificação ISO',
    description: 'Obtenção da certificação ISO 14001 para gestão ambiental',
    color: 'bg-green-600'
  },
  {
    year: '2024',
    title: 'Mais de 500 Clientes',
    description: 'Marco de 500 empresas atendidas com sucesso',
    color: 'bg-blue-600'
  }
]
</script>
