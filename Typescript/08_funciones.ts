//funciones simples
function sumarCreditos(credito1: number, credito2: number): number {
    return credito1 + credito2;
}

const totalCreditos = sumarCreditos(100, 200);
console.log(`Total de créditos: ${totalCreditos}`);
function mostrarCentroDeEntretenimiento(nombre: string, ubicacion: string): void {
    console.log(`Centro de Entretenimiento: ${nombre}, Ubicación: ${ubicacion}`);
    const naves: string[] = ["X-Wing", "TIE Fighter", "Millennium Falcon"];
    for (const nave of naves) {
        console.log(`Nave disponible: ${nave}`);
    }
}

mostrarCentroDeEntretenimiento("Cine Galáctico", "Coruscant");


//funciones con parametros opcionales
function entrenarJedi(nombre: string, nivel?: number): void {
    console.log(`Entrenando al Jedi: ${nombre}, Nivel de Fuerza: ${nivel}`);
    if (nivel) {
        console.log(`${nombre} tiene un sable de luz.`);
    } else {
        console.log(`${nombre} no tiene un sable de luz.`);
        nivel=1;
        console.log(`Nivel de entrenamiento por defecto: ${nivel}.`);
    }
}

entrenarJedi("Luke Skywalker", 90);
entrenarJedi("Leia Organa");
function entrenarJedi2(nombre: string, nivel: number=1): void {
    console.log(`El Jedi: ${nombre} esta entrenando en el nivel ${nivel}.`);
    
}
entrenarJedi2("Luke Skywalker", 90);
entrenarJedi2("Leia Organa");

//funciones flechas

//funcion normal 
function potenciarFuerza(fuerza: number): number{
    return fuerza * 2;
};
//funcion fecha
const potenciarFuerzaflecha = (fuerza: number): number => fuerza * 2;

const fuerzaOriginal = 50;
const fuerzaPotenciada:number = potenciarFuerza(fuerzaOriginal);
console.log(`Fuerza Original: ${fuerzaOriginal}, Fuerza Potenciada: ${fuerzaPotenciada}`);

const fuerzaPotenciadaFlecha:number = potenciarFuerzaflecha(fuerzaOriginal);
console.log(`Fuerza Original: ${fuerzaOriginal}, Fuerza Potenciada (Flecha): ${fuerzaPotenciadaFlecha}`);

//FUNCIONES OVERLOADS
function formatear(valor:number): string;
function formatear(valor:string): string;
function formatear(valor:boolean): string;
function formatear(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es.MX", { minimumFractionDigits: 2 });
    } else if (typeof valor === "boolean") {
        return `Booleano: ${valor ? "si" : "no"}`;
    }
    return `"${valor}"`;
}
console.log(formatear(123456.789));
console.log(formatear("Hola Mundo"));
console.log(formatear(true));   
console.log(formatear(false));

//closures
function crearContador(inicio: number=0){
    let cuenta = inicio;
    return {
        incrementar:() => ++cuenta,
        decrementar:() => --cuenta,
        valor:() => cuenta,
        resetear:() => {cuenta = inicio;}
    }
}

const c1=crearContador();
const c2=crearContador(10);

c1.incrementar();
c1.incrementar();
c1.incrementar();
c2.decrementar();

console.log(`Contador 1: ${c1.valor()}`);
console.log(`Contador 2: ${c2.valor()}`);

c1.resetear();
console.log(c1.valor());