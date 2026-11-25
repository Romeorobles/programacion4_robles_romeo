fun main() {
    val portales = mutableListOf("Tierra", "Marte", "Saturno")

    var option: Int
    do {
        println("Laboratorio de Robles Romeo")
        println("1. Agregar Portal")
        println("2. Mostrar Portales")
        println("3. Modificar Portal")
        println("4. Eliminar Portal")
        println("5. Salir")
        option = readLine()!!.toInt()
        when (option) {
            1 -> {
                val nombre = readLine()!!
                portales.add(nombre)
                println("Portal incluido")


            }

      
            2 -> {
                println("Portales")
                for (portal in portales) {
                    println("Portal: $portal")
                }
            }
            3 -> {
                println("Actualizar")
                println("Indice de modificar")
                for (indice in portales.indices) {
                    println("$indice: ${portales[indice]}")
                }
                val indice = readLine()!!.toInt()
                if (indice in portales.indices) {
                    println("Nuevo nombre del portal")
                    val nuevoNombre = readLine()!!
                    portales[indice] = nuevoNombre
                    println("Portal actualizado")
                } else{
                    println("Indice no valido")
                }   
            }
            4 -> {
                println("Indice a eliminar")
                for (indice in portales.indices) {
                    println("$indice: ${portales[indice]}")
                }
                val indice = readLine()!!.toInt()
                if (indice in portales.indices) {
                    portales.removeAt(indice)
                    println("Portal eliminado")
                } else{
                    println("Indice no valido")
                }
            }
           
        }
    } while (option != 5)
}