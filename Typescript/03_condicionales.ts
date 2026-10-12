// condicionales 
let nivel: number = 5;
if (nivel < 5) {
    console.log("El charmander puede evolucionar aCharmeleon");
}

// condicionales dobles o dos caminos
if (nivel >=16) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a Charizard");
}

// condicionales multiples o varios caminos
if (nivel >= 16) {
    console.log("El charmander puede evolucionar a Charizard");
} else if (nivel >= 8) {
    console.log("El charmander puede evolucionar a Charmeleon");
} else {
    console.log("El charmander no puede evolucionar a Charmeleon ni a");
}

// condicional anidados
// condicional if con operadores logicos
if (nivel >= 8 && nivel < 16) {
    console.log("El charmander puede evolucionar a Charmeleon");
} else if (nivel >= 16) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a Charmeleon ni a Charizard");
}


nivel= 20;
let poder: number =25
// condicional if con operadores logicos
if (nivel >= 8 && nivel < 16 && poder >= 20) {
    console.log("El charmander puede evolucionar a Charmeleon");
} else if (nivel >= 16) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a Charmeleon ni a Charizard");
}



//Condicional if con operadores logics or 
nivel = 5;
poder = 25;
if (nivel >= 8 && poder >= 20) {
    console.log("El charmander puede evolucionar a Charmeleon");
} else if (nivel >= 16) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a Charmeleon ni a Charizard");
}


/*
Trabajo en clases


*/

// Liga Pokemon - condicionales

// datos del entrenador
let medallas: number = 8;
let edad: number = 15;
let suspendido: boolean = false;

// datos del pokemon
let nombrePokemon: string = "Charizard";
let tipo: string = "Fuego";
let nivelPokemon: number = 85;
let vida: number = 120;
let ataque: number = 95;
let defensa: number = 70;

if (medallas >= 8 && edad >= 12 && !suspendido) {
    console.log("El entrenador puede participar en la Liga Pokemon");
// condicionales anidados
    if (nivelPokemon >= 40) {
        if (vida > 0) {
            // condicional con operador logico ||
            if (tipo === "Fuego" || tipo === "Agua" || tipo === "Electrico") {
                console.log(nombrePokemon + " cumple los requisitos para la liga");

                // condicionales multiples para clasificar
                if (nivelPokemon >= 80 && ataque >= 90 && vida >= 100) {
                    console.log(nombrePokemon + " es de categoria Maestro");
                } else if (nivelPokemon >= 60 && (ataque >= 75 || defensa >= 80)) {
                    console.log(nombrePokemon + " es de categoria Elite");
                } else if (nivelPokemon >= 40 && ataque >= 50 && vida > 0) {
                    console.log(nombrePokemon + " es de categoria Avanzado");
                } else {
                    console.log(nombrePokemon + " no alcanza ninguna categoria");
                }
            } else {
                console.log(nombrePokemon + " no es de tipo Fuego, Agua o Electrico");
            }
        } else {
            console.log(nombrePokemon + " no tiene vida, no puede combatir");
        }
    } else {
        console.log(nombrePokemon + " necesita nivel minimo 40");
    }
} else {
    console.log("El entrenador no puede participar en la Liga Pokemon");

    if (medallas < 8) {
        console.log("Le faltan medallas, necesita al menos 8");
    }
    if (edad < 12) {
        console.log("Debe tener al menos 12 años");
    }
    if (suspendido) {
        console.log("El entrenador esta suspendido");
    }
}