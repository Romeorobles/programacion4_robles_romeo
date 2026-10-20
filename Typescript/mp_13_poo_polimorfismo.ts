class Equipo {
    jugar(): void {
        console.log("Juego básico");
    }
}

class LigaDeQuito extends Equipo {
    override jugar(): void {
        console.log("Liga de Quito juega con posesión");
    }
}

class BarcelonaSC extends Equipo {
    override jugar(): void {
        console.log("Barcelona SC juega al contragolpe");
    }
}

const equipos: Equipo[] = [
    new LigaDeQuito(),
    new BarcelonaSC(),
];

console.log(equipos);
equipos.forEach(equipo => equipo.jugar());
