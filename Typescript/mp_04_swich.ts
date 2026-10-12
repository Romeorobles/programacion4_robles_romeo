type Equipo =
| "Barcelona SC"
| "Emelec"
| "Liga de Quito"
| "Independiente del Valle"
| "Aucas"

let equipo = "Liga de Quito" as Equipo;

switch (equipo) {
    case "Barcelona SC":
        console.log("Barcelona SC tiene 16 títulos nacionales");
        break;
    case "Emelec":
        console.log("Emelec tiene 14 títulos nacionales");
        break;
    case "Liga de Quito":
        console.log("Liga de Quito tiene 12 títulos nacionales");
        break;
    case "Independiente del Valle":
        console.log("Independiente del Valle tiene 2 títulos nacionales");
        break;
    case "Aucas":
        console.log("Aucas tiene 1 título nacional");
        break;
    default:
        console.log("Equipo desconocido");
}

type Posicion = "Delantero" | "Mediocampista" | "Defensa";

let posicion = "Delantero" as Posicion;
let golesTemporada: number = 18;
let esTitular: boolean = true;

switch (posicion) {
    case "Delantero":
        if (golesTemporada > 15 && esTitular) {
            console.log("El delantero es goleador del torneo");
        } else {
            console.log("El delantero no es goleador del torneo");
        }
        break;
    case "Mediocampista":
        if (golesTemporada > 8 && esTitular) {
            console.log("El mediocampista tiene gran aporte goleador");
        } else {
            console.log("El mediocampista no tiene gran aporte goleador");
        }
        break;
    case "Defensa":
        if (golesTemporada > 3 && esTitular) {
            console.log("El defensa es un goleador sorpresa");
        } else {
            console.log("El defensa cumple su función defensiva");
        }
        break;
}
