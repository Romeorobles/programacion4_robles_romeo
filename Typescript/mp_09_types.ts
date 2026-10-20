type ID = string | number;
type Apodo = string;
type Marcador = [number, number];
type Posicion = {
    lugar: number;
    puntos: number;
};

const lider: Posicion = { lugar: 1, puntos: 64 };
const idEquipo: ID = 7;
const idEquipo2: ID = "LDU-001";
const apodo: Apodo = "Los Albos";
const finalCopa: Marcador = [2, 1];

console.log(lider, idEquipo, idEquipo2, apodo, finalCopa);

// Intersección: une dos tipos
type PosicionConGoles = Posicion & {
    diferenciaGoles: number;
};

const segundo: PosicionConGoles = { lugar: 2, puntos: 60, diferenciaGoles: 25 };
console.log(segundo);


interface Jugador {
    readonly id: number;
    nombre: string;
    equipo: string;
    dorsal?: number;
}
interface Capitan extends Jugador {
    brazalete: string;
}

const j1: Jugador = {
    id: 1,
    nombre: "Alex Arce",
    equipo: "Liga de Quito"
};
const j2: Jugador = {
    id: 2,
    nombre: "Enner Valencia",
    equipo: "Internacional",
    dorsal: 13
};

console.log(j1);
console.log(j2);

const capitan: Capitan = {
    id: 3,
    nombre: "Moisés Caicedo",
    equipo: "Chelsea",
    brazalete: "Selección Ecuador"
};
console.log(capitan);
