// Store persistido de favoritos (mp LigaPro)
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface FavoritosState {
  favoritos: string[]
  alternar: (id: string) => void
  limpiar: () => void
}

export const useFavoritosStore = create<FavoritosState>()(
  persist(
    (set) => ({
      favoritos: [],
      alternar: (id) =>
        set((s) => ({
          favoritos: s.favoritos.includes(id) ? s.favoritos.filter((f) => f !== id) : [...s.favoritos, id],
        })),
      limpiar: () => set({ favoritos: [] }),
    }),
    { name: 'ligapro-favoritos', storage: createJSONStorage(() => AsyncStorage) },
  ),
)
