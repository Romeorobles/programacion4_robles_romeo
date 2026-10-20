// Ciclo while
let golesTemporada = 0;
let metaGoles = 20;
while (golesTemporada < metaGoles) {
    console.log(`Goles en la temporada: ${golesTemporada}`);
    golesTemporada += 4;
}


let jornada = 1;
while (jornada <= 10) {
    console.log(`Jornada: ${jornada}`);
    jornada++;
}


let penalesCobrados = 0;
let penalesAnotados = 0;
while (penalesCobrados < 5) {
    penalesCobrados++;
    let gol = Math.random() < 0.7;
    if (gol) {
        penalesAnotados++;
        console.log(`Penal ${penalesCobrados}: ¡Gol! total de goles: ${penalesAnotados}`);
    } else {
        console.log(`Penal ${penalesCobrados}: Atajado. total de goles: ${penalesAnotados}`);
    }
}


// do...while: se ejecuta al menos una vez
let tiempoExtra = 0;
do {
    tiempoExtra++;
    console.log(`Minuto de tiempo extra: ${tiempoExtra}`);
} while (tiempoExtra < 5);


interface Equipo {
    nombre: string;
    ciudad: string;
    puntos: number;
}

const equiposEscaneados: Equipo[] = [
    { nombre: "Liga de Quito", ciudad: "Quito", puntos: 64 },
    { nombre: "Barcelona SC", ciudad: "Guayaquil", puntos: 55 },
    { nombre: "Emelec", ciudad: "Guayaquil", puntos: 47 },
    { nombre: "Aucas", ciudad: "Quito", puntos: 40 },
];

let indice = 0;
while (indice < equiposEscaneados.length) {
    const equipo = equiposEscaneados[indice];
    if (equipo?.ciudad === "Guayaquil") {
        console.log(`${equipo.nombre} es de Guayaquil con ${equipo.puntos} puntos`);
    }
    indice++;
}
