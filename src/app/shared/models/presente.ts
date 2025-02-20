export class Presente {
    id: string = '';
    nome_presente: string = '';
    link_imagem: string = '';
    descricao: string = '';
    valor: string = '';
    link_pix: string = '';

    constructor(presenteDto: Presente) {
        this.id = presenteDto.id;
        this.nome_presente = presenteDto.nome_presente
        this.link_imagem = presenteDto.link_imagem
        this.descricao = presenteDto.descricao
        this.valor = presenteDto.valor
        this.link_pix = presenteDto.link_pix
    }



} 