open class Vehiculo(val nombre:String){
    fun mostrarNombre(){
        println("Nombre del vehiculo: $nombre")
    }
}

class NaveEspacial(nombre:String, val energia:Int): Vehiculo(nombre){
    fun mostrarEnergia(){
        println("Energia de la nave: $energia")
    }
}
fun main(){
    val nave = NaveEspacial("Nave Interdimensional", 100)
    nave.mostrarNombre()
    nave.mostrarEnergia()
}