<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/" class="header-logo">
        <img src="../public/logo-ecobrasil.jpg" alt="EcoBrasil Logo" class="logo-image" />
        EcoBrasil
      </router-link>
      
      <!-- Desktop Navigation -->
      <nav class="header-nav">
        <router-link 
          v-for="item in menuItems" 
          :key="item.name"
          :to="item.path"
          class="nav-link"
          active-class="active"
        >
          {{ item.name }}
        </router-link>
      </nav>

      <!-- Mobile menu button -->
      <button 
        @click="toggleMobileMenu" 
        class="mobile-menu-button"
        aria-label="Toggle mobile menu"
      >
        <Menu v-if="!mobileMenuOpen" />
        <X v-else />
      </button>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
        <nav class="mobile-nav">
          <router-link 
            v-for="item in menuItems" 
            :key="item.name"
            :to="item.path"
            @click="closeMobileMenu"
            class="nav-link"
            active-class="active"
          >
            {{ item.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </header>
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

<style scoped>
 .logo-image {
   width: 40px;
   height: auto;
   margin-right: 0.5rem;
 }
 </style>