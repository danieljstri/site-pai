<template>
  <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <component :is="iconComponent" class="h-12 w-12 text-green-600 mb-4" />
    <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ service.title }}</h3>
    <p class="text-gray-600 mb-4">{{ service.description }}</p>
    <ul v-if="showDetails" class="space-y-2">
      <li v-for="detail in service.details" :key="detail" class="flex items-start">
        <Check class="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
        <span class="text-gray-700">{{ detail }}</span>
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
