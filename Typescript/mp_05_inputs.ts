import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// prompt() no existe en Node, por eso usamos readline para leer datos
const rl = createInterface({ input, output });

let equipo = await rl.question("Ingrese equipo (Barcelona, Emelec, Liga, Independiente, Aucas): ");
let partidos = Number(await rl.question("Ingrese partidos jugados (0-38): "));
let goles = Number(await rl.question("Ingrese goles a favor (0-150): "));
rl.close();

if (equipo === "Barcelona" || equipo === "Emelec" || equipo === "Liga" || equipo === "Independiente" || equipo === "Aucas") {
    if (partidos >= 0 && partidos <= 38) {
        if (goles >= 0 && goles <= 150) {
            console.log(`Equipo: ${equipo}, Partidos: ${partidos}, Goles: ${goles}`);
        } else {
            console.log("Cantidad de goles inválida. Debe estar entre 0 y 150.");
        }
    } else {
        console.log("Partidos inválidos. Debe estar entre 0 y 38.");
    }
} else {
    console.log("Equipo desconocido. Ingrese un equipo válido.");
}
