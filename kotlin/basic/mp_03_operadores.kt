fun main() {
    println("OPERADORES EN LA LIGAPRO")

    val golesLocal: Int = 3
    val golesVisita: Int = 1

    // SUMA
    val totalGoles = golesLocal + golesVisita
    println("suma + : total de goles del partido: $totalGoles")

    // RESTA
    val diferenciaGoles = golesLocal - golesVisita
    println("resta - : diferencia de goles: $diferenciaGoles")

    // MULTIPLICACION
    val partidosGanados = 10
    val puntosPorVictorias = partidosGanados * 3
    println("multiplicacion * : puntos por victorias: $puntosPorVictorias")

    // DIVISION
    val golesTemporada: Double = 45.0
    val partidosJugados: Double = 18.0
    val promedio = golesTemporada / partidosJugados
    println("division / : promedio de goles por partido: $promedio")

    // RESIDUO
    val jugadoresConvocados = 23
    val jugadoresPorBus = 10
    val sobrantes = jugadoresConvocados % jugadoresPorBus
    println("residuo % : jugadores que van en el último bus: $sobrantes")

    // PRIORIDAD DE LOS OPERADORES ARITMETICOS
    println("Prioridad de los operadores aritméticos")
    println("1 : ()")
    println("2 : *, /, %")
    println("3 : +, -")

    val puntosTotales = 10 * 3 + 4 * 1
    println("Puntos (10 victorias y 4 empates): $puntosTotales")

    val puntosConParentesis = (10 + 4) * 3
    println("Si los 14 partidos fueran victorias: $puntosConParentesis")

    // OPERADORES DE COMPARACION
    println("OPERADORES DE COMPARACION")
    println("Empate == ${golesLocal == golesVisita}")
    println("Hubo ganador != ${golesLocal != golesVisita}")
    println("Ganó el local > ${golesLocal > golesVisita}")
    println("Ganó la visita < ${golesLocal < golesVisita}")
    println("Local hizo al menos 3 >= ${golesLocal >= 3}")
    println("Visita hizo máximo 1 <= ${golesVisita <= 1}")
}
