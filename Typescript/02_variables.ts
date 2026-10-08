//constamntes
const PI : number = 3.1416;
const IVA : number = 15;
const SERVICIO_API : string = "api service";
const ACTIVATE : boolean = true;
console.log("PI: ", PI);
console.log("Iva: ", IVA);

// variables
// let 
// let

let contador: number=0;
console.log(contador);
contador=5;
console.log(contador);
contador++;
console.log(contador);
contador+=5;
console.log(contador);
contador=contador+3;
console.log(contador);
let alumno: string = "Romeo Robles";
let caducado: boolean=false
console.log (alumno);
console.log (caducado);

let equipo: string[] = ["PIKACHU","CHARMANDE","BULBASAUR"];
console.log(equipo);

let pokemonCapturados: string|null=null;
let pokemonInicial:string|undefined;

let experienciaAcumulada: bigint = 98723982737392n;
let pokemon1: symbol = Symbol("Pikachu");
let pokemon2: symbol = Symbol("Pikachu");
console.log(pokemon1 === pokemon2);

let pikachu: {
    nombre: string;
    nivel: number;
    vida: number;
    esLegendario: boolean;
}= {
    nombre: "Pikachu",
    nivel: 5,
    vida: 35,
    esLegendario: false
};
console.log(pikachu);