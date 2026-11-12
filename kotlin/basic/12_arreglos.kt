fun main (){
    val energias = arrayOf(30,50,80,100,60)
    println("energias[0]")
    println("energias[2]")
    println("energias[4]")

    energias[4] = 150
    println(energias[4])

    for (energia in energias){
        println("Energia")
        val energiaDouble = energia *2
        println("Energia doble $energiaDouble")
        if (energiaDouble >= 100){
            val energiaReducida = energiaDouble - 70
            println("Energia reducida $energiaReducida")
        }
    }
}

