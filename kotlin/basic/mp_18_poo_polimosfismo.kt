open class JugadorCancha {
    open fun jugar() {
        println("Jugando el partido")
    }
}

class Arquero : JugadorCancha() {
    override fun jugar() {
        println("Atajando un penal")
    }
}

class Goleador : JugadorCancha() {
    override fun jugar() {
        println("Anotando un gol")
    }
}

fun main() {
    val jugadores: List<JugadorCancha> = listOf(Arquero(), Goleador(), JugadorCancha())
    for (jugador in jugadores) {
        jugador.jugar()
    }
}
