import { onMounted, onUnmounted, ref } from 'vue'

export enum BreakpointEnum {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xL'
}

export function useBreakpoint() {
  const breakpoint = ref<BreakpointEnum>(BreakpointEnum.MD)

  function update() {
    const windowWidth = window.innerWidth
    if (windowWidth <= 575) {
      breakpoint.value = BreakpointEnum.XS
    }
    if (windowWidth >= 576 && windowWidth <= 767) {
      breakpoint.value = BreakpointEnum.SM
    }
    if (windowWidth >= 768 && windowWidth <= 992) {
      breakpoint.value = BreakpointEnum.MD
    }
    if (windowWidth >= 992 && windowWidth <= 1199) {
      breakpoint.value = BreakpointEnum.LG
    }
    if (windowWidth >= 1200) {
      breakpoint.value = BreakpointEnum.XL
    }
  }

  onMounted(() => window.addEventListener('resize', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return {
    breakpoint
  }
}
