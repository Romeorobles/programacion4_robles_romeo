fun main() {
    println("Inputs en la terminal - LigaPro")
    println("¿Cuál es tu equipo?")
    val equipo = readLine()
    println("Bienvenido hincha de: $equipo")

    println("Goles de local:")
    val golesLocal = readLine()!!.toInt()
    println("Goles de visita:")
    val golesVisita = readLine()!!.toInt()
    val totalGoles = golesLocal + golesVisita
    println("Total de goles en la temporada: $totalGoles")

    println("Calculadora de Puntos")
    println("Puntos actuales:")
    val puntosActuales = readLine()!!.toInt()
    println("Puntos descontados por sanción:")
    val puntosDescontados = readLine()!!.toInt()
    val puntosFinales = puntosActuales - puntosDescontados
    println("Puntos finales: $puntosFinales")
}
