type ID = string | number;
type apellido = string;
type Coordenadas = [number, number];
type Punto = {
    x: number;
    y: number;
}

const origen: Punto = {x: 0, y: 0};
const id : ID = 12;
const id2 : ID = "usr-011";

type Forma= Punto & {
    z: number;
}

const punto3D: Forma = {x: 1, y: 2, z: 3};


interface Usuario {
    readonly id : number;
    nombre: string;
    email: string;
    avatar?: string;
}
interface Empleado extends Usuario{
    cargo:string;
}

const u:Usuario = {
    id: 1,
    nombre: "Luke",
    email: "luke@rebelalliance.org"
};
const u2:Usuario = {
    id: 2,
    nombre: "Leia",
    email: "leia@rebelalliance.org",
    avatar: "https://starwars-visualguide.com/assets/img/characters/5.jpg"
};

console.log(u);
console.log(u2);

const docente:Empleado = {
    id: 3,
    nombre: "Obi-Wan Kenobi",
    email: "obi-wan@jedis.org",
    cargo:"Profesor"
};