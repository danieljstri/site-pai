<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex-shrink-0 flex items-center">
            <Leaf class="h-8 w-8 text-green-600 mr-2" />
            <span class="text-xl font-bold text-gray-800">EcoConsult</span>
          </router-link>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.path"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
            active-class="text-green-600 bg-green-50"
            :class="'text-gray-700 hover:text-green-600 hover:bg-green-50'"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700">
            <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <router-link 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
            active-class="text-green-600 bg-green-50"
            :class="'text-gray-700 hover:text-green-600 hover:bg-green-50'"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Leaf, Menu, X } from 'lucide-vue-next'

export default {
  name: 'AppHeader',
  components: {
    Leaf,
    Menu,
    X
  },
  data() {
    return {
      mobileMenuOpen: false,
      menuItems: [
        { name: 'Início', path: '/' },
        { name: 'Serviços', path: '/servicos' },
        { name: 'Sobre', path: '/sobre' },
        { name: 'Acessibilidade', path: '/acessibilidade' },
        { name: 'Contatos', path: '/contatos' }
      ]
    }
  }
}
</script>
