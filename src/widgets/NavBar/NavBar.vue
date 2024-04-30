<script setup lang="ts">
import Button from '@/shared/kit/Button'
import { inject } from 'vue'

function sayHi() {
  alert('Hi')
}
</script>

<template>
  <nav class="nav-bar">
    <ul class="nav-links">
      <li class="nav-links__item">Главная</li>
      <li class="nav-links__item">Таблица</li>
      <li class="nav-links__item">Графики</li>
    </ul>
    <Button variant="primary" @click="sayHi">Test button</Button>
  </nav>
</template>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
}
</style>
