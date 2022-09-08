export class persona{
    id!: number;
    nombre: string;
    apellido: string;
    img: string;
    titulo: string;
    sobreMi: string;
    banner: string;

    constructor(nombre: string, apellido: string, img: string, titulo: string, sobreMi: string, banner: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo = titulo;
        this.sobreMi = sobreMi;
        this.banner = banner;
    }
}