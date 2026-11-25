open class Persona(val nombre: String) {
    fun mostrarNombre() {
        println("Nombre: $nombre")
    }
}

class Futbolista(nombre: String, val goles: Int) : Persona(nombre) {
    fun mostrarGoles() {
        println("Goles en la LigaPro: $goles")
    }
}

fun main() {
    val futbolista = Futbolista("Alex Arce", 28)
    futbolista.mostrarNombre()
    futbolista.mostrarGoles()
}
