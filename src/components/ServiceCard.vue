<template>
  <div class="service-card reveal">
    <div class="card-header">
      <component :is="iconComponent" class="service-icon" />
      <h3 class="service-title">{{ service.title }}</h3>
    </div>
    <p class="service-description">{{ service.description }}</p>
    <ul v-if="showDetails" class="service-details">
      <li v-for="detail in service.details" :key="detail">
        <div class="bullet"></div>
        <span>{{ detail }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import { FileText, Eye, Settings, Shield, Accessibility } from 'lucide-vue-next'
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
  background-color: #0d2319;
  border: 1px solid rgba(197, 163, 104, 0.1);
  border-radius: 4px;
  padding: 40px;
  text-align: left;
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  background-color: #122d21;
  border-color: #c5a368;
  transform: translateY(-8px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.service-icon {
  color: #c5a368;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.service-title {
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}

.service-description {
  color: #a8b0ab;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
}

.service-details {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid rgba(197, 163, 104, 0.1);
  padding-top: 24px;
}

.service-details li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  color: #f0ede5;
  font-size: 14px;
}

.bullet {
  width: 6px;
  height: 6px;
  background: #c5a368;
  border-radius: 50%;
  margin-top: 7px;
  margin-right: 12px;
  flex-shrink: 0;
}

/* Intersection Observer support (optional if parent handles it) */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
