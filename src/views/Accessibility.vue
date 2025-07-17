<template>
  <div class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Laudo de Acessibilidade</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Garantimos que seu estabelecimento esteja em conformidade com as normas de acessibilidade.
        </p>
      </div>

      <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-12">
        <div class="flex items-center mb-6">
          <Accessibility class="h-12 w-12 mr-4" />
          <h2 class="text-3xl font-bold">Por que é importante?</h2>
        </div>
        <p class="text-lg">
          O laudo de acessibilidade é obrigatório para diversos tipos de estabelecimentos e garante que pessoas 
          com deficiência ou mobilidade reduzida tenham acesso adequado às instalações.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 class="text-2xl font-bold text-gray-800 mb-6">O que analisamos:</h3>
          <div class="space-y-4">
            <div 
              v-for="analysis in analysisItems" 
              :key="analysis.title"
              class="flex items-start"
            >
              <Check class="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-800">{{ analysis.title }}</h4>
                <p class="text-gray-600">{{ analysis.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 p-8 rounded-lg">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Nosso Processo:</h3>
          <div class="space-y-6">
            <div 
              v-for="(step, index) in processSteps" 
              :key="step.title"
              class="flex items-center"
            >
              <div :class="`${step.color} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4`">
                {{ index + 1 }}
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ step.title }}</h4>
                <p class="text-gray-600">{{ step.description }}</p>
              </div>
            </div>
          </div>

          <div class="mt-8 p-4 bg-blue-50 rounded-lg">
            <p class="text-blue-800 font-semibold">
              💡 Dica: O laudo deve ser renovado periodicamente conforme a legislação local.
            </p>
          </div>
        </div>
      </div>

      <!-- Normas e Legislação -->
      <div class="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">Normas e Legislação</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-semibold text-gray-800 mb-4">Principais Normas:</h4>
            <ul class="space-y-2">
              <li 
                v-for="norm in norms" 
                :key="norm.code"
                class="flex items-center"
              >
                <FileText class="h-5 w-5 text-green-600 mr-2" />
                <span class="text-gray-700">{{ norm.code }} - {{ norm.description }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-800 mb-4">Estabelecimentos Obrigatórios:</h4>
            <ul class="space-y-2">
              <li 
                v-for="establishment in establishments" 
                :key="establishment"
                class="flex items-center"
              >
                <Building class="h-5 w-5 text-blue-600 mr-2" />
                <span class="text-gray-700">{{ establishment }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center">
        <router-link to="/contatos" class="btn-primary">
          Solicite seu Laudo de Acessibilidade
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Accessibility, Check, FileText, Building } from 'lucide-vue-next'

interface AnalysisItem {
  title: string
  description: string
}

interface ProcessStep {
  title: string
  description: string
  color: string
}

interface Norm {
  code: string
  description: string
}

const analysisItems: AnalysisItem[] = [
  {
    title: 'Acessos e Circulação',
    description: 'Rampas, corredores, portas e passagens'
  },
  {
    title: 'Sanitários Adaptados',
    description: 'Banheiros com equipamentos adequados'
  },
  {
    title: 'Sinalização',
    description: 'Placas em braile e sinalização visual'
  },
  {
    title: 'Estacionamento',
    description: 'Vagas reservadas e adequadas'
  }
]

const processSteps: ProcessStep[] = [
  {
    title: 'Vistoria Técnica',
    description: 'Análise completa das instalações',
    color: 'bg-green-600'
  },
  {
    title: 'Relatório Detalhado',
    description: 'Documentação de conformidades e não-conformidades',
    color: 'bg-blue-600'
  },
  {
    title: 'Emissão do Laudo',
    description: 'Documento oficial com validade legal',
    color: 'bg-green-600'
  }
]

const norms: Norm[] = [
  { code: 'NBR 9050/2020', description: 'Acessibilidade' },
  { code: 'Lei 13.146/2015', description: 'Lei Brasileira de Inclusão' },
  { code: 'Decreto 5.296/2004', description: 'Regulamentação de acessibilidade' }
]

const establishments: string[] = [
  'Edifícios comerciais',
  'Estabelecimentos de saúde',
  'Instituições de ensino'
]
</script>
