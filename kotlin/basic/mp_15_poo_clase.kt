class Equipo {
    var nombre = ""
    var puntos = 0
}

class Delantero(var nombre: String, var goles: Int = 0) {
    fun rematar() {
        println("$nombre remata al arco")
    }

    fun roblesPuedeSerGoleador(partidos: Int = 0) {
        val golesProyectados = goles * partidos
        if (golesProyectados >= 20) {
            println("$nombre puede ser goleador de la LigaPro")
        } else {
            println("$nombre no llega a ser goleador")
        }
    }
}

fun main() {
    val equipo = Equipo()
    equipo.nombre = "Barcelona SC"
    val equipo2 = Equipo()
    equipo2.nombre = "Liga de Quito"
    equipo2.puntos = 60
    println("${equipo.nombre}: ${equipo.puntos}")
    println("${equipo2.nombre}: ${equipo2.puntos}")

    val delantero1 = Delantero("Alex Arce", 5)
    val delantero2 = Delantero("Octavio Rivero", 2)
    delantero1.rematar()
    delantero2.rematar()
    delantero1.roblesPuedeSerGoleador(4)
    delantero2.roblesPuedeSerGoleador(5)
}
