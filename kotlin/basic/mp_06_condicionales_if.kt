fun main() {
    println("Condicionales if - LigaPro")
    println("Condicionales simples o un camino")
    var puntos = 60
    if (puntos >= 50) {
        println("El equipo clasifica al hexagonal final")
    }

    println("Condicionales if - else o dos caminos")
    puntos = 30
    if (puntos >= 50) {
        println("El equipo clasifica al hexagonal final")
    } else {
        println("El equipo no clasifica")
    }

    println("Condicionales multiples")
    puntos = 55
    if (puntos >= 70) {
        println("El equipo es campeón de etapa")
    } else if (puntos >= 50) {
        println("El equipo clasifica a Copa Sudamericana")
    } else if (puntos >= 25) {
        println("El equipo se salva del descenso")
    } else {
        println("El equipo desciende a la Serie B")
    }

    println("Condicionales anidados")
    puntos = 75
    val ganoFinal = true
    if (puntos >= 70) {
        println("El equipo jugará la final")
        if (ganoFinal) {
            println("¡Campeón de la LigaPro y clasifica a Libertadores!")
        } else {
            println("Subcampeón, clasifica a Libertadores")
        }
    } else if (puntos >= 50) {
        println("El equipo clasifica a Copa Sudamericana")
    } else {
        println("El equipo no clasifica a torneos internacionales")
    }
}
