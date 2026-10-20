abstract class Equipo {
    abstract jugar(): void;
    entrenar(): void {
        console.log("El equipo entrena en el complejo");
    }
}

class LigaDeQuito extends Equipo {
    jugar(): void {
        console.log("Liga de Quito presiona en campo rival");
    }
}

class Emelec extends Equipo {
    jugar(): void {
        console.log("Emelec juega por las bandas");
    }
}

const equipos: Equipo[] = [
    new LigaDeQuito(),
    new Emelec(),
];

// const e = new Equipo(); // Error: no se puede instanciar una clase abstracta
console.log(equipos);
equipos.forEach(equipo => equipo.jugar());


abstract class Estadistica {
    abstract calcular(): number;
    mostrar(): void {
        console.log(`Resultado: ${this.calcular()}`);
    }
}

class PromedioGoles extends Estadistica {
    constructor(private goles: number, private partidos: number) {
        super();
    }
    calcular(): number {
        return Number((this.goles / this.partidos).toFixed(2));
    }
}

class Efectividad extends Estadistica {
    constructor(private puntos: number, private partidos: number) {
        super();
    }
    calcular(): number {
        return Number(((this.puntos / (this.partidos * 3)) * 100).toFixed(1));
    }
}

const promedio = new PromedioGoles(55, 30);
promedio.mostrar();

const efectividad = new Efectividad(64, 30);
efectividad.mostrar();
