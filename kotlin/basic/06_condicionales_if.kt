fun main() {
    println("Condicionales if en kotlin")
    println("Condicionales simples o un camino")
    var energia = 80
    if (energia >= 50) {
        println("Rick puede abrir un portal")
    }

    println("Condicionales if - else o dos caminos")
    energia = 90
    if (energia >= 50){
        println("Rick puede abrir un portal")
    } else {
        println("Rick no puede abrir un portal")
    }

    println("Condicionales multiples")
    energia = 70
    if (energia >=100){
        println("Rick puede abrir un portal")
    } else if (energia >= 50){
        println("Rick puede abrir un portal pero con dificultad")
    } else {
        println("Rick no puede abrir un portal")
    }

    println("Condicionales anidados")
    energia = 70
    val motorActivo = true
    if (energia >=100){
        println("Rick puede abrir un portal")
        if (motorActivo){
            println("El motor esta activo")
        } else {
            println("El motor esta inactivo")
        }
    } else if (energia >= 50){
        println("Rick puede abrir un portal pero con dificultad")
    } else {
        println("Rick no puede abrir un portal")
    }
}
