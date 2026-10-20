abstract class Boxeador {
    abstract atacar(): void;
    descansar(): void {
        console.log("El boxeador descansa en su esquina");
    }
}

class Rocky extends Boxeador {
    atacar(): void {
        console.log("Rocky lanza un poderoso gancho");
    }
}

class Apollo extends Boxeador {
    atacar(): void {
        console.log("Apollo lanza un upper");
    }
}

const boxeadores: Boxeador[] = [
    new Rocky(),
    new Apollo(),
];

console.log(boxeadores);
boxeadores.forEach(boxeador => boxeador.atacar());







abstract class Saiyajin {
    abstract transformarse(): void;
    detectarKi(): void {
        console.log("Detectando el nivel de energía del enemigo...");
    }
}

class Goku extends Saiyajin {
    transformarse(): void {
        console.log("Goku se transforma en Super Saiyajin Blue");
    }
}

class Vegeta extends Saiyajin {
    transformarse(): void {
        console.log("Vegeta alcanza el Ultra Ego");
    }
}

const goku = new Goku();
goku.transformarse();
goku.detectarKi();

const vegeta = new Vegeta();
vegeta.transformarse();
vegeta.detectarKi();