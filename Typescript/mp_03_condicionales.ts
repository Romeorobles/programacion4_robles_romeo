// condicionales
let puntos: number = 30;
if (puntos < 20) {
    console.log("El equipo está en zona de descenso");
}

// condicionales dobles o dos caminos
if (puntos >= 40) {
    console.log("El equipo clasifica a la Copa Libertadores");
} else {
    console.log("El equipo no clasifica a la Copa Libertadores");
}

// condicionales multiples o varios caminos
if (puntos >= 40) {
    console.log("El equipo clasifica a la Copa Libertadores");
} else if (puntos >= 30) {
    console.log("El equipo clasifica a la Copa Sudamericana");
} else {
    console.log("El equipo no clasifica a ninguna copa internacional");
}

// condicional if con operadores logicos
if (puntos >= 30 && puntos < 40) {
    console.log("El equipo clasifica a la Copa Sudamericana");
} else if (puntos >= 40) {
    console.log("El equipo clasifica a la Copa Libertadores");
} else {
    console.log("El equipo no clasifica a ninguna copa internacional");
}


puntos = 45;
let diferenciaGoles: number = 12;
// condicional if con operadores logicos
if (puntos >= 30 && puntos < 40 && diferenciaGoles >= 10) {
    console.log("El equipo clasifica a la Copa Sudamericana");
} else if (puntos >= 40) {
    console.log("El equipo clasifica a la Copa Libertadores");
} else {
    console.log("El equipo no clasifica a ninguna copa internacional");
}


// condicional if con operador logico or
puntos = 25;
diferenciaGoles = 12;
if (puntos >= 30 || diferenciaGoles >= 10) {
    console.log("El equipo tiene buen rendimiento en la temporada");
} else {
    console.log("El equipo tiene mal rendimiento en la temporada");
}


/*
Trabajo en clases
*/

// Campeonato - condicionales

// datos del club
let partidosJugados: number = 30;
let presupuestoAlDia: boolean = true;
let sancionado: boolean = false;

// estadisticas del equipo
let nombreEquipo: string = "Barcelona SC";
let division: string = "Serie A";
let puntosTotales: number = 62;
let golesAFavor: number = 55;
let golesEnContra: number = 20;
let victorias: number = 19;

if (partidosJugados >= 30 && presupuestoAlDia && !sancionado) {
    console.log("El club puede disputar la fase final del campeonato");
    // condicionales anidados
    if (puntosTotales >= 50) {
        if (golesAFavor > golesEnContra) {
            // condicional con operador logico ||
            if (division === "Serie A" || division === "Serie B") {
                console.log(nombreEquipo + " cumple los requisitos para la fase final");

                // condicionales multiples para clasificar
                if (puntosTotales >= 60 && victorias >= 18 && golesAFavor >= 50) {
                    console.log(nombreEquipo + " es candidato al título");
                } else if (puntosTotales >= 55 && (victorias >= 15 || golesAFavor >= 45)) {
                    console.log(nombreEquipo + " pelea por puestos de Libertadores");
                } else if (puntosTotales >= 50 && golesAFavor > golesEnContra) {
                    console.log(nombreEquipo + " pelea por puestos de Sudamericana");
                } else {
                    console.log(nombreEquipo + " no alcanza ninguna categoría");
                }
            } else {
                console.log(nombreEquipo + " no pertenece a la Serie A ni a la Serie B");
            }
        } else {
            console.log(nombreEquipo + " tiene diferencia de goles negativa");
        }
    } else {
        console.log(nombreEquipo + " necesita mínimo 50 puntos");
    }
} else {
    console.log("El club no puede disputar la fase final del campeonato");

    if (partidosJugados < 30) {
        console.log("Le faltan partidos, necesita al menos 30");
    }
    if (!presupuestoAlDia) {
        console.log("El club tiene deudas pendientes");
    }
    if (sancionado) {
        console.log("El club está sancionado");
    }
}
