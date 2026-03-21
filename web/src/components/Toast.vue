<template>
  <div v-if="visible" class="toast" :class="type">
    {{ message }}
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const message = ref('')
const type = ref('info')

const show = (msg, t = 'info', duration = 3000) => {
  message.value = msg
  type.value = t
  visible.value = true
  setTimeout(() => {
    visible.value = false
  }, duration)
}

defineExpose({ show })
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  z-index: 9999;
}
.info { background-color: #2196F3; }
.success { background-color: #4CAF50; }
.error { background-color: #f44336; }
.warning { background-color: #ff9800; }
</style>
