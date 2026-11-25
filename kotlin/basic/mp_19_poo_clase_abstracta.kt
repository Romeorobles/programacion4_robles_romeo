abstract class Competencia {
    abstract fun iniciar()
}

class TorneoLigaPro : Competencia() {
    override fun iniciar() {
        println("Arranca la fecha 1 de la LigaPro")
    }
}

class CopaEcuador : Competencia() {
    override fun iniciar() {
        println("Arranca la primera ronda de la Copa Ecuador")
    }
}

fun main() {
    val liga = TorneoLigaPro()
    liga.iniciar()
    val copa = CopaEcuador()
    copa.iniciar()
}
