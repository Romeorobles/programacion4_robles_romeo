fun calcularTotalFichajes(costos: List<Int>): Int {
    var total = 0
    for (costo in costos) {
        total += costo
        if (costo > 150) {
            println("Fichaje costoso: $costo")
        }
    }
    return total
}

fun main() {
    val equipos = listOf("Barcelona SC", "Liga de Quito", "Independiente del Valle")
    var posicion = 1
    for (equipo in equipos) {
        println("Equipo $posicion: $equipo")
        posicion++
    }
    val costos = listOf(100, 150, 200, 80, 120)
    val totalCostos = calcularTotalFichajes(costos)
    println("Costo total de los fichajes de Romeo Robles: $totalCostos")
}
