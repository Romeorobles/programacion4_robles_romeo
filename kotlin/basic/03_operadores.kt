const val COMBUSTIBLE_MINIMO = 50

fun  main(){
    println("OPERADORES EN KOTLIN")

    //SUMA
    var n1:Double =10.50
    var n2:Double =20.50
    var suma : Double = n1+n2
    println("suma + :${n1+n2}")
    println("suma + : ${suma}")

    //RESTA
    var resta : Double = n1-n2
    println("resta - : ${n1-n2}")
    println("resta - : ${resta}")

    //MULTIPLICACION
    var multiplicacion : Double = n1*n2
    println("multiplicacion * : ${n1*n2}")
    println("multiplicacion * : ${multiplicacion}")

    //DIVISION
    var division : Double = n1/n2
    println("divisioon / :${n1/n2}")
    println("divisioon / : ${division}")

    //RESIDUO
    var residuo : Double = n1%n2
    println("residuo % : ${n1%n2}")
    println("residuo % : ${residuo}")

    //PRIORIDAD DE LOS OPERADORES ARITMETICOS
    println("prioridad de los operadores aritmeticos")
    println("1 : ()")
    println("2 : *, /, %")
    println("3 : +, -")

    val cristales = 10+5*6+4
    println("Cristales: $cristales")

    val energia = 3/5*5
    println("Energia: $energia")

    val combustible = 100+20/4*3-10%3
    println("Combustible: $combustible")

    //OPERADOPRES DE COMPARACION
    println("OPERADORES DE COMPARACION")
    println("Igual a == ${10==10}")
    println("Igual a == ${10==11}")
    println("Diferente a != ${10!=10}")
    println("Diferente a != ${10!=11}")
    println("Mayor que > ${10>11}")
    println("Mayor que > ${10>9}")
    println("Menor que < ${10<11}")
    println("Menor que < ${10<9}")  
    println("Mayor igual que >= ${10>=10}")
    println("Mayor igual que >= ${10>=9}")
    println("Menor igual que <= ${10<=10}")
    println("Menor igual que <= ${10<=11}")

    //OPERADORES LOGICOS
    println("OPERADORES LOGICOS")
    println("AND && ")
    println("OR || ")
    println("NOT ! ")

    val combustible1 = 80
    val portalActivo = true
    val puedeViajar = combustible1>=50 && portalActivo
    val negado = !portalActivo

    println("¿Puede viajar? $puedeViajar")
    println("Negado: $negado")

    val tieneTarjeta = false
    val autorizadoPorRick = true
    val puedeEntrar = tieneTarjeta || autorizadoPorRick

    println("¿Puede entrar? $puedeEntrar")

    //OPERADORES DE ASIGNACION
    println("Operadores de asignacion")
    println("=, +=, -=, *=, /=, %=")

    println("Control de Nave - Rick Sanchez y Romeo Robles")
    val pilotoNave = "Romeo Robles"
    var combustibleNave = 100
    var portalesUniverso = 5
    val motorActivoNave = true

    println("Piloto: $pilotoNave")
    combustibleNave += 40
    portalesUniverso--
    println("Combustible: $combustibleNave")
    println("Portales restantes: $portalesUniverso")
    val tieneCombustible = combustibleNave >= COMBUSTIBLE_MINIMO
    val tienePortales = portalesUniverso >= 0
    val puedeViajarNave = tieneCombustible && tienePortales && motorActivoNave
    println("¿Tiene combustible? $tieneCombustible")
    println("¿Tiene portales? $tienePortales")
    println("¿Puede viajar? $puedeViajarNave")
}