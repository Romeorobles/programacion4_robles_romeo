// Datos del mp de router-app (tema LigaPro)
export interface Equipo {
  id: string
  nombre: string
  ciudad: string
  estadio: string
  puntos: number
}

export const EQUIPOS: Equipo[] = [
  { id: '1', nombre: 'Liga de Quito', ciudad: 'Quito',     estadio: 'Rodrigo Paz Delgado',  puntos: 64 },
  { id: '2', nombre: 'Barcelona SC',  ciudad: 'Guayaquil', estadio: 'Monumental',           puntos: 55 },
  { id: '3', nombre: 'Emelec',        ciudad: 'Guayaquil', estadio: 'George Capwell',       puntos: 47 },
  { id: '4', nombre: 'Aucas',         ciudad: 'Quito',     estadio: 'Gonzalo Pozo Ripalda', puntos: 40 },
]
