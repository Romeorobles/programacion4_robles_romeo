interface ParticipanteTorneo {
    nombre: string;
    nivelPoder: number;
    presentarTecnica(): void;
}

class Goku implements ParticipanteTorneo {
    nombre = "Goku";
    nivelPoder = 90000;
    presentarTecnica(): void {
        console.log("Goku usa el Kamehameha");
    }
}

class Vegeta implements ParticipanteTorneo {
    nombre = "Vegeta";
    nivelPoder = 90001;
    presentarTecnica(): void {
        console.log("Vegeta usa el Final Flash");
    }
}

const goku = new Goku();
const vegeta = new Vegeta();

goku.presentarTecnica();
vegeta.presentarTecnica();
