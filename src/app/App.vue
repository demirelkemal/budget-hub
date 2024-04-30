<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/widgets/NavBar/NavBar.vue'
import MainLayout from '@/app/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <template #content>
      <RouterView />
    </template>
  </MainLayout>
</template>

<style scoped lang="scss"></style>
