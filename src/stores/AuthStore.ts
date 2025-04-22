import { create } from 'zustand'

export type User = {
    id: string
    name: string
    lastname: string
    email: string
    password?: string
    
}

interface AuthStore {
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn:boolean) => void
  user: User | null
  setUser: (user:User) => void
  logout: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn:boolean) => set({ isLoggedIn }),
  user: null,
  setUser: (user:User) => set({ user }),
  logout: () => set({ isLoggedIn: false, user: null }),
}))

export default useAuthStore
