<template>
  <header class="header" :class="{ 'scrolled': isScrolled, 'menu-open': mobileMenuOpen }">
    <div class="header-container">
      <router-link to="/" class="header-logo">
        <img src="../public/logo-ecobrasil.jpg" alt="Ecobrasil Logo" class="logo-image" />
        <span class="logo-text">Ecobrasil</span>
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
      <Teleport to="body">
        <transition name="fade">
          <div v-if="mobileMenuOpen" class="mobile-nav-overlay" @click="closeMobileMenu">
            <div class="mobile-sidebar" @click.stop>
              <nav class="mobile-links">
                <router-link 
                  v-for="item in menuItems" 
                  :key="item.name" 
                  :to="item.path"
                  @click="closeMobileMenu"
                  class="mobile-link"
                  active-class="active"
                >
                  {{ item.name }}
                </router-link>
              </nav>
            </div>
          </div>
        </transition>
      </Teleport>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import type { MenuItem } from '@/types'

const mobileMenuOpen = ref<boolean>(false)
const isScrolled = ref<boolean>(false)

const menuItems: MenuItem[] = [
  { name: 'Início', path: '/' },
  { name: 'Ambiental', path: '/ambiental' },
  { name: 'Compliance', path: '/compliance' },
  { name: 'Acessibilidade', path: '/acessibilidade' },
  { name: 'Consultoria', path: '/consultoria' },
  { name: 'Quem Somos', path: '/quem-somos' }
]

const toggleMobileMenu = (): void => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = (): void => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 20px 0;
  background: transparent;
}

.header.scrolled {
  background: rgba(7, 20, 14, 0.98);
  backdrop-filter: blur(12px);
  padding: 15px 0;
  box-shadow: 0 4px 30px rgba(0,0,0,0.5);
  border-bottom: 1px solid rgba(212, 182, 128, 0.3);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.logo-image {
  width: 35px;
  height: 35px;
  margin-right: 12px;
  border-radius: 4px;
}

.header-nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  text-decoration: none;
  color: #cbd5e1;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover, .nav-link.active {
  color: #d4b680;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 2px;
  background: #d4b680;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  z-index: 3000; /* Garante que o botão fique sobre o overlay */
}

@media (max-width: 768px) {
  .header-nav { display: none; }
  .mobile-menu-button { display: block; }
  
  .mobile-nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.85);
    z-index: 2000;
  }
  
  .mobile-sidebar {
    position: fixed;
    top: 80px;
    right: 20px;
    width: auto;
    min-width: 240px;
    height: auto;
    background: #0a1a12;
    padding: 30px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
    display: block; /* Garante visibilidade */
    border-radius: 12px;
    border: 1px solid rgba(212, 182, 128, 0.2);
  }
  
  .mobile-links {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  
  .mobile-link {
    text-decoration: none;
    color: #cbd5e1;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    transition: all 0.3s ease;
  }
  
  .mobile-link.active {
    color: #d4b680;
  }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
