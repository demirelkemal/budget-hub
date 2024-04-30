<script setup lang="ts">
import Modal from '@/shared/kit/Modal/ui/Modal.vue'
import { provide, ref } from 'vue'
import Button from '@/shared/kit/Button/ui/Button.vue'
const isOpen = ref(false)
const count = ref(1)
provide('count', count)

function openModal() {
  isOpen.value = true
}

function inc() {
  count.value++
}
</script>
<template>
  <div>Home</div>
</template>
