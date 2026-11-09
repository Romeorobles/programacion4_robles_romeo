const val MAX_EQUIPOS_LIGAPRO = 16

fun main() {
    var puntosLDU = 30
    println("Puntos iniciales de Liga de Quito: $puntosLDU")
    puntosLDU = 33
    println("Puntos tras ganar la fecha: $puntosLDU")

    println("Tipos de variables en la LigaPro")

    // Int
    val golesTemporada: Int = 45
    println("Goles en la temporada: $golesTemporada")

    // Long
    val asistenciaTotal: Long = 1250000L
    println("Asistencia total del torneo: $asistenciaTotal")

    // Float
    val promedioGoles: Float = 2.6f
    println("Promedio de goles por partido: $promedioGoles")

    // Double
    val valorPlantilla: Double = 15750000.50
    println("Valor de la plantilla: $valorPlantilla")

    // Char
    val grupo: Char = 'A'
    println("Grupo: $grupo")

    // Boolean
    val clasificaLibertadores: Boolean = true
    println("Clasifica a Libertadores: $clasificaLibertadores")

    // String
    val equipo: String = "Barcelona SC"
    val estadio: String = "Monumental"
    println("Equipo: $equipo , estadio: $estadio")

    // Constantes
    val campeonActual = "Independiente del Valle"
    val fechasRestantes = 5
    println("Campeón actual: $campeonActual")
    println("Fechas restantes: $fechasRestantes")
    println("Máximo de equipos: $MAX_EQUIPOS_LIGAPRO")
}
