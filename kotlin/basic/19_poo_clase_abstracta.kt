abstract class Dispositivo {
    abstract fun activar()
}

class PortalInterdimensional : Dispositivo(){
    override fun activar() {
        println("Arbiendo portal interdimensional")

    }
}

class Escudo : Dispositivo(){
    override fun activar() {
        println("Activando escudo protector")

    }
}

fun main (){
    val portal = PortalInterdimensional() 
    portal.activar()
    val escudo = Escudo()
    escudo.activar()
}