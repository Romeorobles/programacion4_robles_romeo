// Paso 5 mp — Tema local/visitante con la LigaPro (useColorScheme + Context)
import { createContext, useCallback, useContext, useState } from 'react'
import { Pressable, ScrollView, Text, useColorScheme, View } from 'react-native'

// ── Paleta centralizada: uniforme local (claro) y visitante (oscuro) ─
const PALETA = {
  claro: {
    fondo:      '#f0fdf4',
    superficie: '#ffffff',
    texto:      '#14532d',
    textoSutil: '#6b7280',
    primario:   '#15803d',
    borde:      '#d1fae5',
    victoria:   '#15803d',
    empate:     '#d97706',
    derrota:    '#b91c1c',
  },
  oscuro: {
    fondo:      '#052e16',
    superficie: '#14532d',
    texto:      '#ecfdf5',
    textoSutil: '#a7f3d0',
    primario:   '#facc15',
    borde:      '#166534',
    victoria:   '#4ade80',
    empate:     '#fbbf24',
    derrota:    '#f87171',
  },
} as const

type ColoresTema = Record<keyof typeof PALETA.claro, string>

type ContextoTema = {
  colores: ColoresTema
  temaForzado: 'claro' | 'oscuro' | null
  alternarTema: () => void
}

const TemaContext = createContext<ContextoTema | null>(null)

function ProveedorTema({ children }: { children: React.ReactNode }) {
  const esquemaSistema = useColorScheme()
  const [temaForzado, setTemaForzado] = useState<'claro' | 'oscuro' | null>(null)

  const temaActivo = temaForzado ?? (esquemaSistema === 'dark' ? 'oscuro' : 'claro')
  const colores = PALETA[temaActivo]

  const alternarTema = useCallback(() => {
    setTemaForzado((prev) => {
      if (prev === null) return temaActivo === 'claro' ? 'oscuro' : 'claro'
      return prev === 'claro' ? 'oscuro' : 'claro'
    })
  }, [temaActivo])

  return (
    <TemaContext.Provider value={{ colores, temaForzado, alternarTema }}>
      {children}
    </TemaContext.Provider>
  )
}

function useTema(): ContextoTema {
  const ctx = useContext(TemaContext)
  if (!ctx) throw new Error('useTema debe usarse dentro de ProveedorTema')
  return ctx
}

export function Paso5mp() {
  return (
    <ProveedorTema>
      <PantallaResultados />
    </ProveedorTema>
  )
}

function PantallaResultados() {
  const { colores, temaForzado, alternarTema } = useTema()
  const esquemaSistema = useColorScheme()

  const partidos = [
    { id: '1', local: 'Liga de Quito', visita: 'Aucas',       marcador: '3 - 0', resultado: 'victoria' as const },
    { id: '2', local: 'Emelec',        visita: 'Barcelona SC', marcador: '1 - 1', resultado: 'empate'   as const },
    { id: '3', local: 'Mushuc Runa',   visita: 'IDV',          marcador: '0 - 2', resultado: 'derrota'  as const },
  ]

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colores.fondo }}
      contentContainerStyle={{ padding: 16, gap: 12 }}
    >
      {/* Cabecera con botón de cambio de uniforme */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: colores.texto }}>
          Fecha 15
        </Text>
        <Pressable
          onPress={alternarTema}
          style={{ backgroundColor: colores.primario, paddingVertical: 6, paddingHorizontal: 14, borderRadius: 999 }}
        >
          <Text style={{ color: temaForzado === 'oscuro' ? '#052e16' : '#fff', fontSize: 13, fontWeight: '600' }}>
            {temaForzado === null
              ? `Sistema (${esquemaSistema ?? 'desconocido'})`
              : temaForzado === 'claro' ? 'Local' : 'Visitante'}
          </Text>
        </Pressable>
      </View>

      {/* Partidos con colores del tema (resultado visto desde el local) */}
      {partidos.map((p) => (
        <View
          key={p.id}
          style={{
            backgroundColor: colores.superficie,
            borderRadius: 10,
            padding: 14,
            borderWidth: 1,
            borderColor: colores.borde,
            gap: 4,
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, fontWeight: '700', color: colores.texto }}>
              {p.local} {p.marcador} {p.visita}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: '600', color: colores[p.resultado] }}>
              {p.resultado.toUpperCase()}
            </Text>
          </View>
          <Text style={{ fontSize: 12, color: colores.textoSutil }}>Resultado del local</Text>
        </View>
      ))}

      {/* Mini paleta activa */}
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
        {(Object.entries(colores) as [string, string][]).map(([clave, valor]) => (
          <View key={clave} style={{ alignItems: 'center', gap: 2 }}>
            <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: valor, borderWidth: 1, borderColor: colores.borde }} />
            <Text style={{ fontSize: 9, color: colores.textoSutil }}>{clave}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
