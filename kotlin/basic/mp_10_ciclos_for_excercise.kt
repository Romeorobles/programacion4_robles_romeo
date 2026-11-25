fun main() {
    var recaudacionTotal = 0.0
    println("Recaudación de la LigaPro")
    for (partido in 1..6) {
        val ventaOriginal = partido * 2500
        var impuesto = 0.0
        if (ventaOriginal >= 10000) {
            impuesto = ventaOriginal * 0.20
        }
        val ventaFinal = ventaOriginal - impuesto
        println("Partido: $partido")
        println("Venta original: $ventaOriginal")
        println("Impuesto: $impuesto")
        println("Venta final: $ventaFinal")
        recaudacionTotal += ventaFinal
    }
    println("Recaudación total: %.1f dólares".format(recaudacionTotal))
}
