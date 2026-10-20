// Funciones simples
function sumarPuntos(puntosLocal: number, puntosVisita: number): number {
    return puntosLocal + puntosVisita;
}

const totalPuntos = sumarPuntos(40, 24);
console.log(`Total de puntos: ${totalPuntos}`);

function mostrarEstadio(nombre: string, ciudad: string): void {
    console.log(`Estadio: ${nombre}, Ciudad: ${ciudad}`);
    const equipos: string[] = ["Liga de Quito", "Aucas", "El Nacional"];
    for (const equipo of equipos) {
        console.log(`Equipo que juega aquí: ${equipo}`);
    }
}

mostrarEstadio("Rodrigo Paz Delgado", "Quito");


// Funciones con parámetros opcionales
function registrarJugador(nombre: string, goles?: number): void {
    console.log(`Jugador: ${nombre}, Goles: ${goles}`);
    if (goles !== undefined) {
        console.log(`${nombre} ya tiene goles registrados.`);
    } else {
        console.log(`${nombre} no tiene goles registrados.`);
        goles = 0;
        console.log(`Goles por defecto: ${goles}.`);
    }
}

registrarJugador("Alex Arce", 18);
registrarJugador("Pedro Pérez");

// Funciones con parámetros por defecto
function registrarJugador2(nombre: string, goles: number = 0): void {
    console.log(`El jugador ${nombre} lleva ${goles} goles.`);
}
registrarJugador2("Alex Arce", 18);
registrarJugador2("Pedro Pérez");


// Funciones flecha

// función normal
function calcularPuntos(victorias: number): number {
    return victorias * 3;
}
// función flecha
const calcularPuntosFlecha = (victorias: number): number => victorias * 3;

const victorias = 15;
console.log(`Victorias: ${victorias}, Puntos: ${calcularPuntos(victorias)}`);
console.log(`Victorias: ${victorias}, Puntos (Flecha): ${calcularPuntosFlecha(victorias)}`);


// Funciones overloads
function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;
function formatear(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else if (typeof valor === "boolean") {
        return `Clasificado: ${valor ? "sí" : "no"}`;
    }
    return `"${valor}"`;
}
console.log(formatear(1.8333));          // promedio de goles por partido
console.log(formatear("Liga de Quito"));
console.log(formatear(true));
console.log(formatear(false));


// Closures
function crearMarcador(inicio: number = 0) {
    let goles = inicio;
    return {
        anotar: () => ++goles,
        anular: () => --goles,
        valor: () => goles,
        resetear: () => { goles = inicio; }
    };
}

const local = crearMarcador();
const visita = crearMarcador(1);

local.anotar();
local.anotar();
local.anotar();
visita.anular(); // el VAR anuló el gol

console.log(`Local: ${local.valor()} - Visita: ${visita.valor()}`);

local.resetear();
console.log(local.valor());
