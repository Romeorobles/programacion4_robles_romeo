fun main(){
    val portal = 2
    when(portal){
        1->println("Destino:Tierra")
        2->println("Destino:Marte")
        3->println("Destino:Saturno")
        else->println("Portal no disponible")
    }

    println("Inclusion de los dias de la semana")
    val dia = readLine()!!.toInt()
    when(dia){
        1,2,3,4,5->println("Dia de experimentos")
        6,7->println("Dia de descanso")
        else->println("Dia no valido")
    }
    println("Ingrese la energia del portal")
    val energia = readLine()!!.toInt()
    when(energia){
        in 0..39->println("Energia baja")
        in 40..79->println("Energia media")
        in 80..100->println("Energia alta")
        else->println("Energia no valida")
    }

    //trabajo con when
    val energiaNuclear=80
    val motorActivo=true
    val costoViaje=40
    /*
    Trabajo con condicionales y comentarios
    con when 
    */
    when {
        energiaNuclear >= costoViaje && motorActivo->{
            val restante=energiaNuclear-costoViaje
            println("Viaje Autorizado")
            println("Energia restante: $restante")
        }
        energiaNuclear<costoViaje && motorActivo->{
            println("Energia insuficiente para viajar")
        }
        energiaNuclear>=costoViaje && !motorActivo->{
            println("Motor inactivo")
        }
        else->{
            println("Viaje no autorizado")
        }
    }
}