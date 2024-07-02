<script setup>
import { useData } from 'vitepress/dist/client/theme-default/composables/data'
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'

const { frontmatter: fm } = useData()
</script>

<template>
  <h2>{{fm.devFeaturesTitle}}</h2>

  <VPFeatures
    v-if="fm.devFeatures"
    class="devFeatures"
    :features="fm.devFeatures"
  />
</template>

<style scoped>
  h2 {
    max-width: 1152px;
    margin: 48px auto 32px;
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 24px;
    letter-spacing: -0.02em;
    line-height: 32px;
    font-size: 24px;
    font-weight: 600;
  }
</style>
