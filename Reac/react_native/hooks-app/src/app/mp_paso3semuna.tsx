// mp — Paso 3 (suma): goles totales de dos equipos con useRef
import { useRef, useState, useEffect } from 'react'
import {
    StyleSheet, Text, TextInput, View, Pressable
} from 'react-native'
import type { TextInputInstance } from 'react-native'

export default function Paso3Semuna() {
    // ── useRef: referencias a los TextInput para mover el foco ──────────
    const inputLocalRef = useRef<TextInputInstance>(null)
    const inputVisitanteRef = useRef<TextInputInstance>(null)

    // ── useState: lo que se muestra en pantalla ─────────────────────────
    const [golesLocal, setGolesLocal] = useState<string>('')
    const [golesVisitante, setGolesVisitante] = useState<string>('')
    const [resultado, setResultado] = useState<string>('—')

    const partidosSumadosRef = useRef<number>(0)

    useEffect(() => {
        inputLocalRef.current?.focus()
    }, [])

    function sumar() {
        const a = Number(golesLocal)
        const b = Number(golesVisitante)

        if (golesLocal === '' || golesVisitante === '' || isNaN(a) || isNaN(b)) {
            setResultado('Ingresa goles válidos')
            return
        }

        partidosSumadosRef.current += 1   // muta sin re-render
        setResultado(`${a} + ${b} = ${a + b} goles en el partido  (partido #${partidosSumadosRef.current})`)
    }

    function limpiar() {
        setGolesLocal('')
        setGolesVisitante('')
        setResultado('—')
        inputLocalRef.current?.focus()
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Goles totales del partido</Text>

            <View style={styles.formulario}>
                <Text style={styles.etiqueta}>Goles Liga de Quito</Text>
                <TextInput
                    ref={inputLocalRef}
                    style={styles.input}
                    value={golesLocal}
                    onChangeText={setGolesLocal}
                    placeholder="0"
                    placeholderTextColor="#64748b"
                    keyboardType="numeric"
                    returnKeyType="next"
                    onSubmitEditing={() => inputVisitanteRef.current?.focus()}
                />

                <Text style={styles.etiqueta}>Goles Barcelona SC</Text>
                <TextInput
                    ref={inputVisitanteRef}
                    style={styles.input}
                    value={golesVisitante}
                    onChangeText={setGolesVisitante}
                    placeholder="0"
                    placeholderTextColor="#64748b"
                    keyboardType="numeric"
                    returnKeyType="done"
                    onSubmitEditing={sumar}
                />
            </View>

            <Pressable
                style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
                onPress={sumar}
            >
                <Text style={styles.textoBoton}>Sumar goles</Text>
            </Pressable>

            <Text style={styles.resultado}>{resultado}</Text>

            <Pressable onPress={limpiar}>
                <Text style={styles.detalle}>Limpiar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#0b2015',
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: '700',
        color: '#f8fafc',
        marginBottom: 24,
        letterSpacing: 0.5,
    },
    formulario: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#12301f',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: '#1c4a30',
        gap: 12,
    },
    etiqueta: {
        fontSize: 13,
        fontWeight: '600',
        color: '#94a3b8',
        textTransform: 'uppercase',
        letterSpacing: 0.8,
    },
    input: {
        backgroundColor: '#0b2015',
        borderWidth: 1,
        borderColor: '#1c4a30',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 15,
        color: '#f8fafc',
    },
    boton: {
        width: '100%',
        maxWidth: 360,
        marginTop: 20,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botonActivo: {
        backgroundColor: '#2e7d32',
    },
    textoBoton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    resultado: {
        fontSize: 18,
        fontWeight: '700',
        color: '#f1f1f1',
        marginTop: 20,
        textAlign: 'center',
    },
    detalle: {
        fontSize: 13,
        color: '#64748b',
        marginTop: 12,
        textAlign: 'center',
    },
})
