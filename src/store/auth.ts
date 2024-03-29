import { defineStore } from 'pinia'
import { authRoutes } from '~/router'

export const useAuthStore = defineStore('auth', () => {
  return {
    authRoutes,
  }
})
