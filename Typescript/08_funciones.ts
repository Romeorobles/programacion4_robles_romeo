//Funciones simples
function sumarCreditos(credito1: number, credito2: number): number {
    return credito1 + credito2;
}

const totalCreditos = sumarCreditos(100, 20);
console.log(`Total de créditos: ${totalCreditos}`);



//Sin devolver un valor




 
//Funciones con parámetros opcionales
function entrenarJedi(nombre: string, nivel?: number): void {
    if (nivel !== undefined) {
        console.log(`El jedi ${nombre} está entrenando en el nivel ${nivel}.`);
    } else {
        console.log(`El jedi ${nombre} está entrenando.`);
        nivel = 1;
        console.log(`Nivel de entrenamiento por defecto: ${nivel}.`);
    }
}

entrenarJedi("Luke Skywalker", 5);
entrenarJedi("Yoda");





function entrenarJedi2(nombre: string, nivel: number = 1): void {
    console.log(`El jedi ${nombre} está entrenando en el nivel ${nivel}.`);
}

entrenarJedi2("Leia", 5);
entrenarJedi2("Obi-Wan");


//funciones flecha
const potenciarFuerzaFlecha = (fuerza: number): number => {
    return fuerza * 2;
};
const potenciaFuerzaFlecha = (fuerza: number): number => fuerza * 2;

const fuerzaOriginal = 50;
const fuerzaPotenciada = potenciarFuerzaFlecha(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada: ${fuerzaPotenciada}`);


const fuerzaPotenciadaFlecha : number = potenciaFuerzaFlecha(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada (flecha): ${fuerzaPotenciadaFlecha}`);