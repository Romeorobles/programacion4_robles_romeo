// Encapsulamiento
class TablaEquipo {
    private puntos: number = 0;

    sumarPuntos(cantidad: number): void {
        if (cantidad > 0) {
            this.puntos += cantidad;
        }
    }
    restarPuntos(sancion: number): void {
        if (sancion > 0) {
            this.puntos = Math.max(0, this.puntos - sancion);
        }
    }
    consultarPuntos(): number {
        return this.puntos;
    }
}

const emelec = new TablaEquipo();
emelec.sumarPuntos(10);
emelec.restarPuntos(15); // sanción de la federación, no baja de 0
// emelec.puntos = 100;  // Error: 'puntos' es private
console.log(`Puntos de Emelec: ${emelec.consultarPuntos()}`);
