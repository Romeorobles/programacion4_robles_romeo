data class EstadioLigaPro(
    val capacidad: Int,
    val habilitado: Boolean
)

data class JugadorLigaPro(
    val nombre: String,
    val estadoFisico: Int
)

data class ClubLigaPro(
    val presupuesto: Int,
    val plantillaCompleta: Boolean,
    val licencia: Boolean
)

fun main() {
    val estadio = EstadioLigaPro(41000, true)
    if (estadio.capacidad >= 20000 && estadio.habilitado) {
        println("El estadio puede recibir la final")
    }

    val tarjetas = arrayOf(1, 2, 3, 4, 5)
    if (tarjetas[4] >= 5) {
        println("¡Atención! Jugador suspendido por tarjetas amarillas")
    } else {
        println("Jugador habilitado")
    }

    val goles = arrayOf(3, 1, 2)
    val suma = goles[0] + goles[1] + goles[2]
    val promedio = suma / 3.0
    println("Promedio de goles: $promedio")
    if (promedio >= 2) {
        println("Ataque efectivo")
    } else {
        println("Ataque por mejorar")
    }

    val jugador = JugadorLigaPro("Alex Arce", 80)
    if (jugador.estadoFisico >= 80) {
        println("${jugador.nombre} está listo para ser titular")
    } else if (jugador.estadoFisico >= 50) {
        println("${jugador.nombre} puede entrar como suplente")
    } else if (jugador.estadoFisico >= 20) {
        println("${jugador.nombre} entrena diferenciado")
    } else {
        println("${jugador.nombre} está lesionado")
    }

    val club = ClubLigaPro(120000, true, false)
    if (club.presupuesto >= 100000) {
        if (club.plantillaCompleta) {
            if (club.licencia) {
                println("Club inscrito en el campeonato")
            } else {
                println("El club no tiene licencia para competir")
            }
        } else {
            println("Plantilla incompleta")
        }
    } else {
        println("Presupuesto insuficiente para competir")
    }
}
