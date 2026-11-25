class NaveEncapsulada{
    private var energia = 100
    
    fun recargar(cantidad:Int){
        if ( cantidad > 0){
            energia += cantidad
        } else{
            println("Cantidad no valida")

        }
    }
    fun mostrarEnergia(){
        println("Energia : $energia")
        
    }
    fun asignarEnergia(cantidad:Int){
        energia = cantidad
    }
}

fun main (){
    val nave = NaveEncapsulada()
    nave.recargar(50)
    nave.mostrarEnergia()
    nave.asignarEnergia(50)
    nave.mostrarEnergia()
}