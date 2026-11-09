fun main() {
    println("Compra de entradas - LigaPro")
    println("¿Nombre del hincha?")
    val hincha = readLine()
    println("Cantidad de entradas:")
    val entradas = readLine()!!.toInt()
    println("Precio por entrada:")
    val precio = readLine()!!.toDouble()
    println("Dinero disponible:")
    val dinero = readLine()!!.toDouble()
    val costoTotal = entradas * precio
    val saldo = dinero - costoTotal
    println("Reporte")
    println("Hincha: $hincha")
    println("Entradas: $entradas")
    println("Costo total: $costoTotal")
    println("Saldo: $saldo")
}
