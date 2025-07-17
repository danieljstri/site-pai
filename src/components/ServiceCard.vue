<template>
  <div class="service-card">
    <component :is="iconComponent" class="service-icon" />
    <h3 class="service-title">{{ service.title }}</h3>
    <p class="service-description">{{ service.description }}</p>
    <ul v-if="showDetails" class="service-details">
      <li v-for="detail in service.details" :key="detail">
        <Check />
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
