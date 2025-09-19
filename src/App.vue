<template>
  <div class="wrapper">
    <TheHeader @toggleModal="isOpen = !isOpen" />
    <main class="main">
      <RouterView />
    </main>
    <TheModal :isOpen="isOpen" @toggleModal="isOpen = !isOpen" />
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheModal from './components/TheModal.vue'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped></style>
