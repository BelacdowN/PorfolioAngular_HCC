export class Estudio {

    id: number;
    estudio : string;
    inicio : string;
    fin : string;
    descripcion : string;
    imagen : string;
    url : string;
    institucion : string;
    personaid : number;

    constructor(estudio:string, inicio: string, fin: string, descripcion:string, imagen:string, url:string, institucion:string, personaid : number) {
        this.estudio = estudio;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.url = url;
        this.institucion = institucion;
        this.personaid = personaid;
    }
}
