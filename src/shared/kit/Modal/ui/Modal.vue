<script setup lang="ts">
import type { ModalProps } from '../model/types'
import { ref } from 'vue'
const props = withDefaults(defineProps<ModalProps>(), {
  size: 'medium'
})
const open = defineModel('open')
const modalRef = ref()

// const emit = defineEmits<{
//   (e: 'onClose'): void
// }>()

function onCloseModal(e: Event) {
  if (!e.composedPath().includes(modalRef.value)) {
    open.value = false
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        @click="onCloseModal"
        v-if="props.open"
        class="modal"
        :class="[props.size, { open: props.open }]"
      >
        <div class="modal-content" ref="modalRef">
          <header class="modal-header">
            <slot name="header"></slot>
          </header>
          <slot name="content"></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1101;

  &-header {
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 600px;
    padding: 20px;
    background: var(--basic_white);
    border-radius: 8px;
  }

  &.open {
    pointer-events: auto;
  }
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
