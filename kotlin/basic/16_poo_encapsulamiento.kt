class Nave{
    private var energia = 100
    
    fun recargar(cantidad:int){
        if ( cantidad > 0){
            energia += cantidad
        } else{
            println("Cantidad no valida")

        }
    }
    fun mostrarEnergia(){
        println("Energia : $energia")
        
    }
    fun asignarEnergia(cantidad:int){
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