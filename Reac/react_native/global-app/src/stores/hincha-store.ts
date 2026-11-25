// Store del hincha (mp LigaPro)
import { create } from 'zustand'

interface HinchaState {
  hincha: string | null
  entrar: (nombre: string) => void
  salir: () => void
}

export const useHinchaStore = create<HinchaState>()((set) => ({
  hincha: null,
  entrar: (nombre) => set({ hincha: nombre }),
  salir: () => set({ hincha: null }),
}))
