<script setup lang="ts">
import type { ButtonProps } from '../model/types'
import './button.scss'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'm'
})
</script>

<template>
  <button class="button" :class="[props.variant, props.size, { disabled: props.disabled }]">
    <slot></slot>
  </button>
</template>
