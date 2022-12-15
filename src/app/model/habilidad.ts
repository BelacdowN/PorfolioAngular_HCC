export class Habilidad {
    id: number;
    habilidad : string;
    porcentaje : number;    
    personaid : number;

    constructor(habilidad:string, porcentaje: number, 
        personaid : number) {
        this.habilidad = habilidad;
        this.porcentaje = porcentaje;
        this.personaid = personaid;
}


}
