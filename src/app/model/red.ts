export class Red {
    id: number;
    nombre : string;
    url : string;
    icono : string;
    personaid: number;

    constructor(nombre:string, url: string, icono: string, personaid:number) {
        this.nombre = nombre;
        this.url = url;
        this.icono = icono;
        this.personaid = personaid;
}
}
