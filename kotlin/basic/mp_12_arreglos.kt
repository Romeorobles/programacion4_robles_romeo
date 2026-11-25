fun main() {
    val asistencias = arrayOf(3000, 5000, 8000, 10000, 6000)
    println(asistencias[0])
    println(asistencias[2])
    println(asistencias[4])

    asistencias[4] = 15000
    println(asistencias[4])

    for (asistencia in asistencias) {
        println("Asistencia: $asistencia")
        val asistenciaDoble = asistencia * 2
        println("Asistencia en el clásico: $asistenciaDoble")
        if (asistenciaDoble >= 20000) {
            val sinEntrada = asistenciaDoble - 20000
            println("Hinchas que se quedan sin entrada: $sinEntrada")
        }
    }
}
