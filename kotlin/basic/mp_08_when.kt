fun main() {
    val posicion = 2
    when (posicion) {
        1 -> println("Campeón de la LigaPro")
        2 -> println("Subcampeón de la LigaPro")
        3 -> println("Tercer lugar")
        else -> println("Fuera del podio")
    }

    println("Ingrese el día de la semana (1-7):")
    val dia = readLine()!!.toInt()
    when (dia) {
        1, 2, 3, 4 -> println("Día de entrenamiento")
        5, 6, 7 -> println("Día de partido")
        else -> println("Día no válido")
    }

    println("Ingrese los puntos del equipo:")
    val puntos = readLine()!!.toInt()
    when (puntos) {
        in 0..29 -> println("Zona de descenso")
        in 30..59 -> println("Media tabla")
        in 60..90 -> println("Zona de copas internacionales")
        else -> println("Puntos no válidos")
    }

    // trabajo con when sin argumento
    val presupuesto = 80
    val jugadorDisponible = true
    val costoFichaje = 40
    /*
    Fichaje de un jugador:
    se revisa el presupuesto y la disponibilidad
    */
    when {
        presupuesto >= costoFichaje && jugadorDisponible -> {
            val restante = presupuesto - costoFichaje
            println("Fichaje realizado")
            println("Presupuesto restante: $restante")
        }
        presupuesto < costoFichaje && jugadorDisponible -> {
            println("Presupuesto insuficiente para fichar")
        }
        presupuesto >= costoFichaje && !jugadorDisponible -> {
            println("Jugador no disponible")
        }
        else -> {
            println("Fichaje no autorizado")
        }
    }
}
