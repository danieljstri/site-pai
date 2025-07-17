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
            class="nav-link focus-visible"
            active-class="nav-link-active"
            :class="'nav-link-inactive'"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMobileMenu" class="text-gray-700">
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
            @click="closeMobileMenu"
            class="block nav-link w-full text-left focus-visible"
            active-class="nav-link-active"
            :class="'nav-link-inactive'"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Leaf, Menu, X } from 'lucide-vue-next'
import type { MenuItem } from '@/types'

const mobileMenuOpen = ref<boolean>(false)

const menuItems: MenuItem[] = [
  { name: 'Início', path: '/' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Acessibilidade', path: '/acessibilidade' },
  { name: 'Contatos', path: '/contatos' }
]

const toggleMobileMenu = (): void => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = (): void => {
  mobileMenuOpen.value = false
}
</script>
