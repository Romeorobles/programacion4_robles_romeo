fun iniciarPartido() {
    println("Equipos en la cancha")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Romeo Robles dio el pitazo inicial")
}

fun jugarPartido(rival: String, golesFavor: Int, golesContra: Int) {
    println("Partido contra $rival: $golesFavor - $golesContra")
}

fun calcularDescuento(precio: Double): Double {
    var descuento = 0.0
    if (precio >= 100) {
        descuento = precio * 0.15
    }
    return descuento
}

fun calcularGolesTotales(goles: Array<Int>): Int {
    var total = 0
    for (gol in goles) {
        total += gol
        if (gol >= 5) {
            println("Goleada: $gol goles")
        }
    }
    return total
}

fun main() {
    iniciarPartido()
    jugarPartido("Emelec", 3, 1)
    jugarPartido("Aucas", 2, 2)
    val descuentoHincha = calcularDescuento(123.5)
    println("El hincha Romeo tiene este descuento: $descuentoHincha")
    val golesPorFecha = arrayOf(3, 2, 5, 1, 0)
    println("Goles totales: ${calcularGolesTotales(golesPorFecha)}")
}
