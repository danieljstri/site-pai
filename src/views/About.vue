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
        <div class="text-center">
          <Users class="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h3 class="text-xl font-bold text-gray-800 mb-2">Equipe Especializada</h3>
          <p class="text-gray-600">Profissionais qualificados e experientes</p>
        </div>
        <div class="text-center">
          <Award class="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 class="text-xl font-bold text-gray-800 mb-2">Qualidade Garantida</h3>
          <p class="text-gray-600">Processos certificados e resultados comprovados</p>
        </div>
        <div class="text-center">
          <Clock class="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h3 class="text-xl font-bold text-gray-800 mb-2">Agilidade</h3>
          <p class="text-gray-600">Prazos cumpridos e atendimento eficiente</p>
        </div>
      </div>

      <!-- Timeline -->
      <div class="bg-gray-50 p-8 rounded-lg">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Nossa História</h2>
        <div class="space-y-8">
          <div class="flex items-center">
            <div class="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">
              2015
            </div>
            <div>
              <h4 class="text-xl font-semibold text-gray-800">Fundação da EcoConsult</h4>
              <p class="text-gray-600">Início das atividades com foco em licenciamento ambiental</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">
              2018
            </div>
            <div>
              <h4 class="text-xl font-semibold text-gray-800">Expansão dos Serviços</h4>
              <p class="text-gray-600">Inclusão de serviços de vistoria e controle de licenças</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">
              2021
            </div>
            <div>
              <h4 class="text-xl font-semibold text-gray-800">Certificação ISO</h4>
              <p class="text-gray-600">Obtenção da certificação ISO 14001 para gestão ambiental</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">
              2024
            </div>
            <div>
              <h4 class="text-xl font-semibold text-gray-800">Mais de 500 Clientes</h4>
              <p class="text-gray-600">Marco de 500 empresas atendidas com sucesso</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Shield, Users, Award, Clock } from 'lucide-vue-next'

export default {
  name: 'About',
  components: {
    Shield,
    Users,
    Award,
    Clock
  }
}
</script>
