<template>
  <div id="app">
    <router-view />
    <Toast ref="toastRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Toast from './components/Toast.vue'

const toastRef = ref(null)

onMounted(() => {
  if (toastRef.value) {
    window.$toast = toastRef.value
  }
})
</script>

<style>
/* Reset and global styles are handled in main.css */
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
