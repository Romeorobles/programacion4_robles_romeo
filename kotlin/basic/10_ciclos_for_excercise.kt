fun main(){
    var presupuestoTotal = 0.0
    println("Presupuesto de expedicion")
    for(viaje in 1..6){
        val costoOriginal = viaje * 25
        var descuento = 0.0
        if (costoOriginal>=100){
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal-descuento
        println("Viaje: $viaje")
        println("Costo origibal: $costoOriginal")
        println("Descuento: $descuento")
        println("Costo Final: $costoFinal")
        presupuestoTotal += costoFinal
    }
    println("Presupuesto total de la expedicion %1f creditos".format(presupuestoTotal))
}