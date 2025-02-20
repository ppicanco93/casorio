export class Convite {
  id: string = '';
  nome_convite: string = '';
  celular: string = '';
  email: string = '';


  constructor(conviteDto: Convite) {
    this.id = conviteDto.id;
    this.nome_convite = conviteDto.nome_convite;
    this.celular = conviteDto.celular;
    this.email = conviteDto.email;
  }

}
