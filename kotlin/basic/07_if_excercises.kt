data class PistolaPortal(
    val energia: Int,
    val activate: Boolean
)

data class Robot(
    val nombre: String,
    val bateria: Int
)
data class NaveEspacial(
    val energia: Int,
    val motorActivo: Boolean,
    val autorizacion : Boolean
)

fun main(){
    val pistola = PistolaPortal(80, true)
    if (pistola.energia >= 50 && pistola.activate){
        println("Rick puede abrir un portal")
    }

    val radiacion = arrayOf(10, 20, 30, 40, 50)
    if (radiacion[4] >= 50){
        println("!Peligro! Dimension con radiacion")
    } else{
        println("Radiacion moderada")
    }

    val pruebas = arrayOf(80,65,90)
    val suma = pruebas[0] + pruebas[1] + pruebas[2]
    val promedio = suma / 3
    println("Promedio de pruebas: $promedio")
    if (promedio >= 70){
        println("Portal estable")
    } else{
        println("Portal inestable")
    }
    
    val robot = Robot("Wali", 80)
    if (robot.bateria >= 80){
        println("${robot.nombre} tiene un Funcionamiento optimo")
    } else if (robot.bateria >= 50){
        println("Funcionamiento normal")
    } else if (robot.bateria >= 20){
        println("Funcionamiento baja")
    } else{
        println("Funcionamiento critico")
    }

    val nave = NaveEspacial(120, true, false)
    if (nave.energia >=100 ){
        if (nave.motorActivo){
            if (nave.autorizacion){
                println("Viaje autorizado")
            }else{
                println("Morty no tiene autorizacion para viajar")
            }
        }else{
            println("Motor inactivo")
        }
    }else{
        println("Energia insuficiente para viajar")
    }

}