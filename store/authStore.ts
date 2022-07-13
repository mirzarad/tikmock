import create from 'zustand'
import {persist} from 'zustand/middleware'
import axois from 'axios'

import { BASE_URL } from '../utils/'
import axios from 'axios'

const authStore = (set: any) => ({
    userProfile:null,

    addUser: (user:any) => set({userProfile: user}),
    removeUser: () => set({userProfile: null}),

    fetchAllUsers: async () => {
      const response = await axios.get(`${BASE_URL}/api/users`)
    }
})

const useAuthStore = create(
  persist(authStore, {
    name: 'auth'
  })
)

export default useAuthStore