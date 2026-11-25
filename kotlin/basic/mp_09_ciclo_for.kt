fun main() {
    println("Ciclo for con rango")
    for (fecha in 1..5) {
        println("Jugando la fecha $fecha")
    }

    println("Ciclo for con downTo")
    for (posicion in 10 downTo 2) {
        println("Equipo en la posición $posicion")
    }

    println("Ciclo for con step")
    for (fecha in 1..20 step 2) {
        println("Partido de local en la fecha $fecha")
    }

    println("Ciclo for con variables")
    for (victorias in 1..10) {
        val puntos = 3 * victorias
        println("3 * $victorias = $puntos puntos")
    }
}
