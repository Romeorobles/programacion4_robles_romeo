data class PistolaPortal(
    val energia:Int,
    val activa: Boolean
)
fun main(){
    println("Ciclo for con rango")
    for (i in 1..5){
        println("Visitando la dimension $i")
    }
    
    println("Ciclo for en kotlin con downTo")
    for (i in 10 downTo(2)){
        println("Visitando la dimension $i")
    }

    println("Ciclo for en kotlin con step")
    for (i in 1..20 step 2){
        println("Visitando la dimension $i")
    }

    println("Ciclo for en kotlin con variables")
    for (i in 1..10){
        val resultado = 3 * i
        println("3 * $i = $resultado")
        println("3 * $i = ${i*3}")
    }
}