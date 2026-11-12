fun activarPortal(){
    println ("Activando portal interdimencional")
    println("Cointeo regresivo")
    println("3")
    println("2")
    println("1")
    println("Romeo Robles activo el Portal")

}


fun viajar(dimension: String, viajes: Int, consumo: Int){
    println("Viajando a $dimension")



}

fun calcularPrecio(precio: Double): Double{
    var descuento: Double =0.0
    if(precio>=1000){
        descuento = precio *0.15
    
    }
    return descuento
}
fun calcularEnergiaTotal(energias: Array<Int>): Int{
    var total = 0
    for (energia in energias){
        total+=energia
        if ( energia>=1000){
            println(" SObre Energi $energia")

        }
    }
    return total
}

fun main(){
    activarPortal()
    activarPortal()
    viajar("Tierra",5,4)
    viajar("Marte",4,7)
    val descuentoCliente = calcularPrecio(123.5)
    println("El cliente Romeo tiene este descuento : $descuentoCliente")
    val totalEnergias = arrayOf (30,50,80,100,60)
    println("Energia total $totalEnergias")

}