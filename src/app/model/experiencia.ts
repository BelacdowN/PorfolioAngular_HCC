export class Experiencia {
    id: number;
    puesto : string;
    inicio : string;
    fin : string;
    descripcion : string;
    imagen : string;
    url : string;
    empresa : string;
    esTrabajoActual : boolean;
    personaid : number;

    constructor(puesto:string, inicio: string, fin: string, descripcion:string, imagen:string, url:string, empresa:string, esTrabajoActual:boolean, personaid : number) {
        this.puesto = puesto;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.url = url;
        this.empresa = empresa;
        this.esTrabajoActual = esTrabajoActual;
        this.personaid = personaid;
    }
}
