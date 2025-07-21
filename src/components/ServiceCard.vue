<template>
  <div class="service-card">
    <component :is="iconComponent" class="service-icon" />
    <h3 class="service-title">{{ service.title }}</h3>
    <p class="service-description">{{ service.description }}</p>
    <ul v-if="showDetails" class="service-details">
      <li v-for="detail in service.details" :key="detail">
        <Check class="check-icon" />
        <span>{{ detail }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import { Check, FileText, Eye, Settings, Shield, Accessibility } from 'lucide-vue-next'
import type { Service, IconName } from '@/types'

interface Props {
  service: Service
  showDetails?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showDetails: false
})

const iconMap: Record<IconName, Component> = {
  FileText,
  Eye,
  Settings,
  Shield,
  Accessibility
}

const iconComponent = computed<Component>(() => {
  return iconMap[props.service.icon as IconName] || Shield
})
</script>

<style scoped>
.service-card {
  background-color: white;
  border: 2px solid var(--pigment-green);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.service-icon {
  color: var(--sgbus-green);
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
}

.service-title {
  color: var(--berkeley-blue);
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.service-description {
  color: var(--muted);
  font-size: 1rem;
  margin-bottom: 1rem;
}

.service-details {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
  text-align: left;
}

.service-details li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.check-icon {
  color: var(--green-custom);
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}
</style>
