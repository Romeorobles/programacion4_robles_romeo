class Boxeador {
    golpear(): void {
        console.log("Golpeando con fuerza");

    }
}
class Rocky extends Boxeador {
    golpeEspecial(): void {
        console.log("Rocky lanza un poderoso gancho ");

    }
}



class Apollo extends Boxeador {
    golpeRapido(): void {
        console.log("Apollo lanza un golpe veloz");

    }
}

const rocky =new Rocky();
rocky.golpear();
rocky.golpeEspecial();
const apolloCreek = new Apollo();
apolloCreek.golpear();
apolloCreek.golpeRapido();




class Gerrero extends Boxeador {
    golpeRapido(): void {
        console.log("El gerrero realiza un ataque basico");


    }
}

const Goku = new Gerrero();
