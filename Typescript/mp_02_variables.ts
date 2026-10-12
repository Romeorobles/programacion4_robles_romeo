// constantes
const PUNTOS_VICTORIA: number = 3;
const PUNTOS_EMPATE: number = 1;
const LIGA: string = "LigaPro Ecuador";
const TEMPORADA_ACTIVA: boolean = true;
console.log("Puntos por victoria: ", PUNTOS_VICTORIA);
console.log("Puntos por empate: ", PUNTOS_EMPATE);
console.log("Liga: ", LIGA);
console.log("Temporada activa: ", TEMPORADA_ACTIVA);

// variables
// let

let goles: number = 0;
console.log(goles);
goles = 2;
console.log(goles);
goles++;
console.log(goles);
goles += 2;
console.log(goles);
goles = goles + 1;
console.log(goles);

let goleador: string = "Romeo Robles";
let lesionado: boolean = false;
console.log(goleador);
console.log(lesionado);

let equipos: string[] = ["BARCELONA SC", "EMELEC", "LIGA DE QUITO", "INDEPENDIENTE DEL VALLE"];
console.log(equipos);

let campeonActual: string | null = null;
let equipoInvitado: string | undefined;
console.log(campeonActual, equipoInvitado);

let aficionadosTotales: bigint = 98723982737392n;
console.log(aficionadosTotales);

let equipo1: symbol = Symbol("Barcelona SC");
let equipo2: symbol = Symbol("Barcelona SC");
console.log(equipo1 === equipo2);

let barcelona: {
    nombre: string;
    partidosJugados: number;
    golesAFavor: number;
    esCampeon: boolean;
} = {
    nombre: "Barcelona SC",
    partidosJugados: 15,
    golesAFavor: 28,
    esCampeon: false
};
console.log(barcelona);
