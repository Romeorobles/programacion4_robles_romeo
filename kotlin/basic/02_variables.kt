const val MAX_PORTALES = 10
fun main(){
    var energia = 100 
    println(energia)
    println("Autor: Romeo Robles")
    energia=90
    println("Energia")
    println(energia)
    
    // Tipos de variables
    println("Tipos de variables en Kotlin")
    //Enteros, int
    var edad: Int =19
    println("Edad: $edad")

    var portales: Int = 1000
    println("Portales: $portales")
  
    //long
    var edadLarga: Long =191854L
    println("Edad: $edadLarga")
  
    //float
    var portalesFloat: Float = 1000.5f
    println("Portales: $portalesFloat")
  
    //double
    var portalesDouble: Double = 1000.5
    println("Portales: $portalesDouble")
    
    //char
    var inicial: Char = 'A'
    println("Nombre: $inicial")

    //boolean
    var portalActivo: Boolean = true
    println("Activo: $portalActivo")

    //Manejo de strings
    var nombre: String = "Rick"
    var dimension: String = "C-137"
    println("Nombre: $nombre , dimension : $dimension")

    //Manejo de constantes
    val cientifico = "Rick"
    var portalesDisponibles = 5
    println("Cientifico: $cientifico")
    println("Portales disponibles: $portalesDisponibles")
    println("Max portales: $MAX_PORTALES")
}