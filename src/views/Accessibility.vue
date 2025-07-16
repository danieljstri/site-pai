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
            <div class="flex items-start">
              <Check class="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-800">Acessos e Circulação</h4>
                <p class="text-gray-600">Rampas, corredores, portas e passagens</p>
              </div>
            </div>
            <div class="flex items-start">
              <Check class="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-800">Sanitários Adaptados</h4>
                <p class="text-gray-600">Banheiros com equipamentos adequados</p>
              </div>
            </div>
            <div class="flex items-start">
              <Check class="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-800">Sinalização</h4>
                <p class="text-gray-600">Placas em braile e sinalização visual</p>
              </div>
            </div>
            <div class="flex items-start">
              <Check class="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-800">Estacionamento</h4>
                <p class="text-gray-600">Vagas reservadas e adequadas</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 p-8 rounded-lg">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Nosso Processo:</h3>
          <div class="space-y-6">
            <div class="flex items-center">
              <div class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
              <div>
                <h4 class="font-semibold text-gray-800">Vistoria Técnica</h4>
                <p class="text-gray-600">Análise completa das instalações</p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
              <div>
                <h4 class="font-semibold text-gray-800">Relatório Detalhado</h4>
                <p class="text-gray-600">Documentação de conformidades e não-conformidades</p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
              <div>
                <h4 class="font-semibold text-gray-800">Emissão do Laudo</h4>
                <p class="text-gray-600">Documento oficial com validade legal</p>
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
              <li class="flex items-center">
                <FileText class="h-5 w-5 text-green-600 mr-2" />
                <span class="text-gray-700">NBR 9050/2020 - Acessibilidade</span>
              </li>
              <li class="flex items-center">
                <FileText class="h-5 w-5 text-green-600 mr-2" />
                <span class="text-gray-700">Lei 13.146/2015 - Lei Brasileira de Inclusão</span>
              </li>
              <li class="flex items-center">
                <FileText class="h-5 w-5 text-green-600 mr-2" />
                <span class="text-gray-700">Decreto 5.296/2004</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-800 mb-4">Estabelecimentos Obrigatórios:</h4>
            <ul class="space-y-2">
              <li class="flex items-center">
                <Building class="h-5 w-5 text-blue-600 mr-2" />
                <span class="text-gray-700">Edifícios comerciais</span>
              </li>
              <li class="flex items-center">
                <Building class="h-5 w-5 text-blue-600 mr-2" />
                <span class="text-gray-700">Estabelecimentos de saúde</span>
              </li>
              <li class="flex items-center">
                <Building class="h-5 w-5 text-blue-600 mr-2" />
                <span class="text-gray-700">Instituições de ensino</span>
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

<script>
import { Accessibility, Check, FileText, Building } from 'lucide-vue-next'

export default {
  name: 'Accessibility',
  components: {
    Accessibility,
    Check,
    FileText,
    Building
  }
}
</script>
