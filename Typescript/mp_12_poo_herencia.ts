// Herencia
class Jugador {
    constructor(
        public nombre: string,
        public dorsal: number,
    ) {}

    presentarse(): void {
        console.log(`Soy ${this.nombre}, dorsal ${this.dorsal}`);
    }
}

class Delantero extends Jugador {
    constructor(nombre: string, dorsal: number, public goles: number) {
        super(nombre, dorsal);
    }

    anotar(): void {
        this.goles++;
        console.log(`${this.nombre} anotó. Lleva ${this.goles} goles`);
    }
}

class Portero extends Jugador {
    constructor(nombre: string, dorsal: number, public vallasInvictas: number) {
        super(nombre, dorsal);
    }

    atajar(): void {
        console.log(`${this.nombre} atajó el disparo`);
    }
}

const delantero = new Delantero("Alex Arce", 9, 18);
delantero.presentarse(); // heredado de Jugador
delantero.anotar();

const portero = new Portero("Alexander Domínguez", 1, 12);
portero.presentarse();
portero.atajar();
console.log(`Vallas invictas: ${portero.vallasInvictas}`);
