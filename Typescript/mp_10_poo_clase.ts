class Equipo {
    constructor(
        public nombre: string,
        public puntos: number,
        public goles: number,
    ) {}

    ganar(): void {
        this.puntos += 3;
        console.log(`${this.nombre} ganó el partido`);
    }
    empatar(): void {
        this.puntos += 1;
        console.log(`${this.nombre} empató el partido`);
    }
}

const liga = new Equipo("Liga de Quito", 64, 55);
const barcelona = new Equipo("Barcelona SC", 55, 45);

liga.ganar();
console.log(`Puntos de ${liga.nombre}: ${liga.puntos}`);
barcelona.empatar();
console.log(`Puntos de ${barcelona.nombre}: ${barcelona.puntos}`);
