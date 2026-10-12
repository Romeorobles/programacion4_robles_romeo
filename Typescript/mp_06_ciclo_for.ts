// Ciclos for
for (let i = 2; i < 50; i += 5) {
    console.log(`Minuto de partido: ${i}`);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Jornada: ${i}`);
}

for (let i = 90; i > 0; i -= 10) {
    if (i == 30) {
        console.log("El partido ha sido suspendido por lluvia");
        break;
    }
    if (i == 60) {
        console.log("Pausa de hidratación");
        continue;
    }
    console.log(`Minutos restantes: ${i}`);
}

const equipos: string[] = ["Barcelona SC", "Emelec", "Liga de Quito", "Independiente del Valle", "Aucas"];
for (let i = 0; i < equipos.length; i++) {
    console.log(`Equipo: ${equipos[i]}`);
}

for (const equipo of equipos) {
    console.log(`Equipo: ${equipo}`);
}

const nombreLiga: string = "LigaPro";
for (const letra of nombreLiga) {
    console.log(`Letra: ${letra}`);
}


interface EstadisticaEquipo {
    nombre: string;
    partidosJugados: number;
    golesAFavor: number;
    golesEnContra: number;
    puntos: number;
}

const tablaPosiciones: EstadisticaEquipo[] = [
    { nombre: "Liga de Quito", partidosJugados: 30, golesAFavor: 55, golesEnContra: 22, puntos: 64 },
    { nombre: "Independiente del Valle", partidosJugados: 30, golesAFavor: 50, golesEnContra: 25, puntos: 60 },
    { nombre: "Barcelona SC", partidosJugados: 30, golesAFavor: 45, golesEnContra: 28, puntos: 55 },
    { nombre: "Emelec", partidosJugados: 30, golesAFavor: 38, golesEnContra: 30, puntos: 47 },
    { nombre: "Aucas", partidosJugados: 30, golesAFavor: 30, golesEnContra: 35, puntos: 40 }
];

for (const estadistica of tablaPosiciones) {
    const diferencia = estadistica.golesAFavor - estadistica.golesEnContra;
    console.log(`Equipo: ${estadistica.nombre}, PJ: ${estadistica.partidosJugados}, GF: ${estadistica.golesAFavor}, GC: ${estadistica.golesEnContra}, DG: ${diferencia}, Pts: ${estadistica.puntos}`);
}
