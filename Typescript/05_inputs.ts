
let personaje = prompt("Ingrese personaje (Luke, Vader, Organa, Han Solo, Yoda):");
let edad = Number(prompt("Ingrese edad del personaje:"));
let fuerza = Number(prompt("Ingrese nivel de fuerza del personaje (0-100):"));

if (personaje === "Luke" || personaje === "Vader" || personaje === "Organa" || personaje === "Han Solo" || personaje === "Yoda") {
    if (edad >= 0 && edad <= 100) {
        if (fuerza >= 0 && fuerza <= 100) {
            console.log(`Personaje: ${personaje}, Edad: ${edad}, Fuerza: ${fuerza}`);
        } else {
            console.log("Nivel de fuerza inválido. Debe estar entre 0 y 100.");
        }
    } else {
        console.log("Edad inválida. Debe estar entre 0 y 100.");
    }
} else {
    console.log("Personaje desconocido. Ingrese un personaje válido.");
}
