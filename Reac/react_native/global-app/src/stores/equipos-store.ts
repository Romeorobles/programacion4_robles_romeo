// Store de equipos (mp LigaPro)
import { create } from 'zustand'

export interface Equipo {
  id: string
  nombre: string
  puntos: number
}

interface EquiposState {
  equipos: Equipo[]
  cargando: boolean
  error: string | null
  agregar: (nombre: string) => void
  eliminar: (id: string) => void
  sumarVictoria: (id: string) => void
  cargarEquipos: () => Promise<void>
}

const INICIALES: Equipo[] = [
  { id: '1', nombre: 'Liga de Quito', puntos: 64 },
  { id: '2', nombre: 'Barcelona SC', puntos: 55 },
]

// Simula la respuesta de una API
const pedirEquipos = () =>
  new Promise<Equipo[]>((resolve) =>
    setTimeout(
      () => resolve([...INICIALES, { id: '3', nombre: 'Emelec', puntos: 47 }, { id: '4', nombre: 'Aucas', puntos: 40 }]),
      1500,
    ),
  )

export const useEquiposStore = create<EquiposState>()((set) => ({
  equipos: INICIALES,
  cargando: false,
  error: null,
  agregar: (nombre) =>
    set((s) => ({
      equipos: [
        ...s.equipos,
        { id: String(Math.max(0, ...s.equipos.map((e) => Number(e.id))) + 1), nombre, puntos: 0 },
      ],
    })),
  eliminar: (id) => set((s) => ({ equipos: s.equipos.filter((e) => e.id !== id) })),
  sumarVictoria: (id) =>
    set((s) => ({ equipos: s.equipos.map((e) => (e.id === id ? { ...e, puntos: e.puntos + 3 } : e)) })),
  cargarEquipos: async () => {
    set({ cargando: true, error: null })
    try {
      set({ equipos: await pedirEquipos() })
    } catch {
      set({ error: 'No se pudo cargar la tabla' })
    } finally {
      set({ cargando: false })
    }
  },
}))
