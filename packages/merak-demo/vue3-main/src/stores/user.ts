import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue'
import type { User } from '@/data/userData'
import { Merak } from 'merak-vue'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User | null>(null)

  const setUser = (userParam: User) => {
    user.value = userParam
    // bus.$emit('changeUser', {
    //   user: toRaw(user.value)
    // })
    Merak.namespace.emitter.emit('changeUser', {
      user: toRaw(user.value)
    })
  }

  return { user, setUser }
})
