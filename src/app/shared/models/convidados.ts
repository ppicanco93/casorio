export class Convidados{
    id: string = '';
    nome_convidado: string = '';
    id_convite: string = '';
    status: string = '';
    idade: string = '';
    sexo: string = '';
    quem_convidou: string = '';
    vegano: string = '';

    constructor(conviteDto: Convidados) {
        this.id = conviteDto.id;
        this.nome_convidado = conviteDto.nome_convidado
        this.id_convite = conviteDto.id_convite
        this.status = conviteDto.status
        this.idade = conviteDto.idade
        this.sexo = conviteDto.sexo
        this.quem_convidou = conviteDto.quem_convidou
        this.vegano = conviteDto.vegano
    }

}