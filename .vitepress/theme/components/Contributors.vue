<script setup>
import { ref, onMounted } from 'vue'

const contributors = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/data/contributors.json')
    if (!response.ok) throw new Error('Failed to fetch contributors')
    contributors.value = await response.json()
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <ul class="contributors">
    <li v-for="contributor in contributors" :key="contributor.github" class="contributor">
      <a :href="contributor.github" target="_blank" rel="noopener noreferrer">
        <img :src="contributor.avatar" :alt="contributor.name" class="avatar" />
      </a>
    </li>
  </ul>
</template>


<style scoped>
.contributors {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: start;
  padding: 0;
  margin-top: 2rem;
}

.contributor {
  text-align: center;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  transition: transform 0.3s;
}

.avatar:hover {
  transform: scale(1.1);
}
</style>
