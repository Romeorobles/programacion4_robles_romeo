class CuentaClub {
    private var presupuesto = 100

    fun ingresar(cantidad: Int) {
        if (cantidad > 0) {
            presupuesto += cantidad
        } else {
            println("Cantidad no válida")
        }
    }

    fun mostrarPresupuesto() {
        println("Presupuesto del club: $presupuesto")
    }

    fun asignarPresupuesto(cantidad: Int) {
        if (cantidad >= 0) {
            presupuesto = cantidad
        } else {
            println("Presupuesto no válido")
        }
    }
}

fun main() {
    val cuenta = CuentaClub()
    cuenta.ingresar(50)
    cuenta.mostrarPresupuesto()
    cuenta.ingresar(-20)
    cuenta.asignarPresupuesto(80)
    cuenta.mostrarPresupuesto()
}
