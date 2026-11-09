// Interfaces: el contrato que debe cumplir cada equipo de la liga
interface ParticipanteLiga {
    nombre: string;
    puntos: number;
    celebrar(): void;
}

class LigaDeQuito implements ParticipanteLiga {
    nombre = "Liga de Quito";
    puntos = 64;
    celebrar(): void {
        console.log("Liga de Quito celebra en Casa Blanca");
    }
}

class BarcelonaSC implements ParticipanteLiga {
    nombre = "Barcelona SC";
    puntos = 55;
    celebrar(): void {
        console.log("Barcelona SC celebra en el Monumental");
    }
}

const participantes: ParticipanteLiga[] = [new LigaDeQuito(), new BarcelonaSC()];

participantes.forEach(equipo => {
    console.log(`${equipo.nombre}: ${equipo.puntos} puntos`);
    equipo.celebrar();
});
