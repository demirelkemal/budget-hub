<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { BreakpointEnum, useBreakpoint } from '@/shared/lib/hooks/useBreakpoint'
import { useThemeStore } from '@/shared/lib/store/themeStore'
import { storeToRefs } from 'pinia'

const { breakpoint } = useBreakpoint()
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const { toggleTheme } = themeStore

const isOpenNav = ref(false)
const showMenuBtn = computed(() => {
  return breakpoint.value !== BreakpointEnum.XL
})

const toggleNav = () => {
  isOpenNav.value = !isOpenNav.value
}

watch(isOpenNav, () => {
  const body = document.querySelector(`body`)
  if (body) {
    isOpenNav.value ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto')
  }
})

watch(breakpoint, () => {
  if (!showMenuBtn.value) {
    isOpenNav.value = false
  }
})

watch(theme, () => {
  const body = document.querySelector(`body`)
  if (body) {
    body.className = theme.value
  }
})
</script>

<template>
  <header class="header">
    <h1>Logo</h1>
    <div class="search">
      <input class="search-input" type="text" />
    </div>
    <button v-if="showMenuBtn" @click="toggleNav">Open</button>
    <button @click="toggleTheme">Toggle {{ theme }}</button>
  </header>
  <div class="main">
    <aside class="navigation" :class="{ active: isOpenNav }">
      <ul class="menu">
        <li class="menu-item">
          <RouterLink to="/">Главная</RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/transactions">Транзакции</RouterLink>
        </li>
      </ul>
    </aside>
    <main class="main-content">
      <slot name="content"></slot>
    </main>
    <div class="overlay" :class="{ active: isOpenNav }" @click="toggleNav"></div>
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  display: flex;
  padding: 70px 16px 0 16px;

  &-content {
    width: 100%;

    @media (max-width: 1199px) {
      flex: 1 1 auto;
    }
  }
}

.header {
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  z-index: 10;

  border: 1px solid var(--basic_black_40);
  background-color: var(--basic_black_30);
}

.menu {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;

  &-item {
    font-size: 14px;
    line-height: 16px;

    a {
      text-decoration: none;
    }
  }
}

.navigation {
  display: flex;
  flex: 0 0 250px;
  flex-direction: column;
  height: calc(100vh - 9rem);
  left: 0;
  overflow: auto;
  padding: 0;
  position: sticky;
  top: 6rem;
  transition:
    transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99),
    opacity 0.3s;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  @media (max-width: 1199px) {
    transform: translateX(-100%);
    position: fixed;
    width: 300px;
    top: 0;
    left: 0;
    background: var(--basic_white);

    &.active {
      transform: translateX(0);
      opacity: 1;
      z-index: 15;
      height: 100%;
    }
  }
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;

  &.active {
    display: block;
  }
}
</style>
