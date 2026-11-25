fun main() {
    val equipos = mutableListOf("Barcelona SC", "Emelec", "Liga de Quito")

    var opcion: Int
    do {
        println("LigaPro de Robles Romeo")
        println("1. Agregar equipo")
        println("2. Mostrar equipos")
        println("3. Modificar equipo")
        println("4. Eliminar equipo")
        println("5. Salir")
        opcion = readLine()!!.toInt()
        when (opcion) {
            1 -> {
                println("Nombre del equipo:")
                val nombre = readLine()!!
                equipos.add(nombre)
                println("Equipo agregado")
            }
            2 -> {
                println("Equipos")
                for (equipo in equipos) {
                    println("Equipo: $equipo")
                }
            }
            3 -> {
                println("Índice del equipo a modificar:")
                for (indice in equipos.indices) {
                    println("$indice: ${equipos[indice]}")
                }
                val indice = readLine()!!.toInt()
                if (indice in equipos.indices) {
                    println("Nuevo nombre del equipo:")
                    val nuevoNombre = readLine()!!
                    equipos[indice] = nuevoNombre
                    println("Equipo actualizado")
                } else {
                    println("Índice no válido")
                }
            }
            4 -> {
                println("Índice del equipo a eliminar:")
                for (indice in equipos.indices) {
                    println("$indice: ${equipos[indice]}")
                }
                val indice = readLine()!!.toInt()
                if (indice in equipos.indices) {
                    val eliminado = equipos.removeAt(indice)
                    println("Equipo eliminado: $eliminado")
                } else {
                    println("Índice no válido")
                }
            }
            5 -> println("Hasta la próxima fecha")
            else -> println("Opción no válida")
        }
    } while (opcion != 5)
}
