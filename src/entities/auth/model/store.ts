import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const userData = ref(null)

  const authSignup = async () => {}
  const authSignin = async () => {}
  const getUserData = async () => {}
  const authSignout = async () => {}
})
