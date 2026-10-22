// app/paso3semuna.tsx — Paso 3: suma de dos números con useRef
import { useRef, useState, useEffect } from 'react'
import {
    StyleSheet, Text, TextInput, View, Pressable
} from 'react-native'
import type { TextInputInstance } from 'react-native'

export default function Paso3Semuna() {
    // ── useRef: referencias a los TextInput para mover el foco ──────────
    const inputNumero1Ref = useRef<TextInputInstance>(null)
    const inputNumero2Ref = useRef<TextInputInstance>(null)

    // ── useState: lo que se muestra en pantalla ─────────────────────────
    const [numero1, setNumero1] = useState<string>('')
    const [numero2, setNumero2] = useState<string>('')
    const [resultado, setResultado] = useState<string>('—')

 
    const sumasRealizadasRef = useRef<number>(0)

    useEffect(() => {
        inputNumero1Ref.current?.focus()
    }, [])

    function sumar() {
        const a = Number(numero1)
        const b = Number(numero2)

        if (numero1 === '' || numero2 === '' || isNaN(a) || isNaN(b)) {
            setResultado('Ingresa dos números válidos')
            return
        }

        sumasRealizadasRef.current += 1   // muta sin re-render
        setResultado(`${a} + ${b} = ${a + b}  (suma #${sumasRealizadasRef.current})`)
    }

    function limpiar() {
        setNumero1('')
        setNumero2('')
        setResultado('—')
        inputNumero1Ref.current?.focus()
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Suma de dos numeros</Text>

            <View style={styles.formulario}>
                <Text style={styles.etiqueta}>Número 1</Text>
                <TextInput
                    ref={inputNumero1Ref}
                    style={styles.input}
                    value={numero1}
                    onChangeText={setNumero1}
                    placeholder="0"
                    placeholderTextColor="#64748b"
                    keyboardType="numeric"
                    returnKeyType="next"
                    onSubmitEditing={() => inputNumero2Ref.current?.focus()}
                />

                <Text style={styles.etiqueta}>Número 2</Text>
                <TextInput
                    ref={inputNumero2Ref}
                    style={styles.input}
                    value={numero2}
                    onChangeText={setNumero2}
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
                <Text style={styles.textoBoton}>Sumar</Text>
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
        backgroundColor: '#0f172a',
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
        backgroundColor: '#1e293b',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: '#334155',
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
        backgroundColor: '#0f172a',
        borderWidth: 1,
        borderColor: '#334155',
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
        backgroundColor: '#2563eb',
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
