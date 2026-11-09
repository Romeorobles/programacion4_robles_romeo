fun main() {
    println("Inputs en la terminal Readline")
    println(" Como te llamas?")
    val nombre = readLine()
    println(" Welcomen a otro universo : $nombre")

    println("Cristales de Rick:")
    val cristalesRick = readLine()!!.toInt()
    println("Cristales de Morty:")
    val cristalesMorty = readLine()!!.toInt()
    val total = cristalesRick + cristalesMorty
    println("Total de Cristales: $total")

    println("Calculadora de Energia")
    println("Energia Inicial")
    val energiaInicial = readLine()!!.toInt()
    println("Energia Consumida:")
    val energiaConsumida = readLine()!!.toInt()
    val energiaRestante = energiaInicial - energiaConsumida
    println("Energía restante $energiaRestante")
}
