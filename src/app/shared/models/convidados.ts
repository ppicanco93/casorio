export class Convidados{
    id: string = '';
    nome_convidado: string = '';
    id_convite: string = '';
    status: string = '';
    vegano: string = '';
    visitas_site: number = 0;

    constructor(conviteDto: Convidados) {
        this.id = conviteDto.id;
        this.nome_convidado = conviteDto.nome_convidado
        this.id_convite = conviteDto.id_convite
        this.status = conviteDto.status
        this.vegano = conviteDto.vegano
        this.visitas_site = conviteDto.visitas_site
    }

}