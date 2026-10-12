//Ciclos for
for (let i = 2; i < 50; i+=5) {
    console.log(`Entrenamiento jedi: ${i}`);
}

for (let i = 0; i < 10; i++) {
    console.log(`Entrenamiento jedi: ${i}`);
}

for (let i = 40; i > 0; i-=5) {
    if (i==20){
        console.log("El entyrenamiento jedi ha sido interrumpido");
        break
    }
    if (i==30){
        console.log("El entyrenamiento jedi ha sido interrumpido");
        continue;
    }
    console.log(`Entrenamiento jedi: ${i}`);
}
const personajes: string[] = ["Luke Skywalker", "Darth Vader", "Yoda", "Leia Organa", "Han Solo"];
for (let i = 0; i < personajes.length; i++) {
    console.log(`Personaje: ${personajes[i]}`);
}

for (const personaje of personajes) {
    console.log(`Personaje: ${personaje}`);
}   

const cineMovies: string = "Star Wars: A new Hope";
for (const cineMovie of cineMovies) {
    console.log(`Cine Movie: ${cineMovie}`);
}



interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const naves: Nave[] = [
    { nombre: "Luke Skywalker", tipo: "X-wing", velocidad: 1500 },
    { nombre: "Darth Vader", tipo: "TIE Fighter", velocidad: 1200 },
    { nombre: "Darth Vader", tipo: "TIE Fighter", velocidad: 1200 },
];
for (const nave of naves) {
    console.log(`Nombre de la Nave: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad: ${nave.velocidad}`);

}

const criaturasStarWars: string[] = ["Wookiee", "Ewok", "Rancor", "Tauntaun"];
criaturasStarWars.forEach((criatura, index) => {
    console.log(`Criatura: ${index + 1}: ${criatura}`);
}); 

criaturasStarWars.map((criatura, index) => {
    console.log(`Criatura: ${index + 1}: ${criatura}`);
}); 