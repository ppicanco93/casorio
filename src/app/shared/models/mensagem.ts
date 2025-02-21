export class Mensagem {
    id: string = '';
    nome: string = '';
    mensagem: string = '';
    id_convite: string = '';
    id_presente: string = '';

    constructor(mensagemDto: Mensagem) {
        this.id = mensagemDto.id;
        this.nome = mensagemDto.nome
        this.mensagem = mensagemDto.mensagem
        this.id_convite = mensagemDto.id_convite
        this.id_presente = mensagemDto.id_presente
    }

}