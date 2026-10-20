let memoriaDroide = 1024;
let memoriaDroideMaxima = 2048;
while (memoriaDroide < memoriaDroideMaxima) {
    console.log(`Memoria del droide: ${memoriaDroide} MB`);
    memoriaDroide += 256;
}


let nivel =1;
while (nivel <= 10) {
    console.log(`Nivel del Jedi: ${nivel}`);
    nivel++;
}


let disparosNave = 0;
let aciertosNave = 0;
while (disparosNave < 10) {
    disparosNave++;
    let acierto = Math.random() < 0.5;
    if (acierto) {
        aciertosNave++;
        console.log(`Disparo ${disparosNave}: ¡Acierto! total de aciertos: ${aciertosNave}`);
    } else {
        console.log(`Disparo ${disparosNave}: Fallo. total de aciertos: ${aciertosNave}`);
    }
}


let guerras = 0;
do {
    guerras++;
    console.log(`Guerras: ${guerras}`);
} while (guerras < 5);






interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const navesEscaneadas: Nave[] = [
    { nombre: "Luke Skywalker", tipo: "X-wing", velocidad: 1500 },
    { nombre: "Darth Vader", tipo: "TIE Fighter", velocidad: 1200 },
    { nombre: "Leia Organa", tipo: "Millennium Falcon", velocidad: 2000 },
];

let indice = 0;
while (indice< navesEscaneadas.length) {
    const nave = navesEscaneadas[indice];
    if (nave?. tipo === "Caza estelar") {

    indice++;
}