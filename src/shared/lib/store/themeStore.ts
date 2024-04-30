import { defineStore } from 'pinia'

interface ThemeState {
  theme: Theme
}

enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

const getInitialState = (): Theme => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    return savedTheme as Theme
  }

  return Theme.LIGHT
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => {
    const body = document.querySelector(`body`)
    const initialState = getInitialState()
    if (body) {
      body.className = initialState
    }
    return {
      theme: initialState
    }
  },
  actions: {
    toggleTheme() {
      this.theme = this.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
      localStorage.setItem('theme', this.theme)
    }
  }
})
