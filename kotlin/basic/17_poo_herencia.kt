open class Vehiculo(val nombre:string){
    fun mostrarNombre(){
        println("Nombre del vehiculo: $nombre")
    }
}

class NaveEspacial(nombre:string, val energia:int){
    Vehiculo(nombre){
        fun mostrarEnergia(){
            println("Energia de la nave: $energia")
        }
    }
}
fun main(){
    val = naveInterdimensional = NaveEspacial("Nave Interdimensional", 100)
    nave.mostrarNombre()
    nave.mostrarEnergia()
}