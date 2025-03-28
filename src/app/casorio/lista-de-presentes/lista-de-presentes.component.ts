import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardPresenteComponent } from "../../shared/card-presente/card-presente.component";
import { CommonModule } from '@angular/common';
import { Presente } from '../../shared/models/presente';

@Component({
  selector: 'app-lista-de-presentes',
  standalone: true,
  imports: [CardPresenteComponent, CommonModule],
  templateUrl: './lista-de-presentes.component.html',
  styleUrl: './lista-de-presentes.component.scss'
})
export class ListaDePresentesComponent  implements OnInit {

  presentes: Presente[] = [
    {
      id: "1",
      nome_presente: "Toma aqui os 50 reais",
      link_imagem: "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2021/11/08/806x444/1_naiaraazevedo-19404519.jpg",
      descricao: "",
      valor: "50",
      link_pix: "https://nubank.com.br/cobrar/435w/67bba101-2154-439c-a329-bf88aad3d994"
    },
    {
      id: "2",
      nome_presente: "Petisquinhos para o Jorginho",
      link_imagem: "https://i.imgur.com/Yz9dI9C.gif",
      descricao: "Ele deitou e rolou por essa.",
      valor: "80",
      link_pix: "https://nubank.com.br/cobrar/1mxf62/67db4951-ab19-425a-831f-2f57e2e7928b"
    },
    {
      id: "3",
      nome_presente: "Diária do hotel do Jorginho",
      link_imagem: "https://i.imgur.com/MDeNMvs.jpeg",
      descricao: "Já basta não poder participar da Lua de Mel! Garanta uma boa noite de sono para este pet.",
      valor: "100",
      link_pix: "https://nubank.com.br/cobrar/435w/67bba115-06c0-40e2-8f47-d9fdb78651e2"
    },
    {
      id: "4",
      nome_presente: "Aulas de sedução",
      link_imagem: "https://i.imgur.com/cRz5oua.jpeg",
      descricao: "Vamos ensinar o noivo a dar o famoso olhar 43.",
      valor: "150",
      link_pix: "https://nubank.com.br/cobrar/1mxf62/67db4971-d0dc-4b9d-b04f-bca0d183ce14"
    },
    {
      id: "5",
      nome_presente: "Primeiro jantar dos noivos",
      link_imagem: "https://tfdfn2.vtexassets.com/arquivos/ids/217864/macarrao-instantaneo-nissin-turma-da-monica-tomate-suave-85g.jpg",
      descricao: "Essa dupla merece saborear o melhor jantar possível.",
      valor: "200",
      link_pix: "https://nubank.com.br/cobrar/435w/67bba12e-ebdb-4f5a-b47d-0ab21e75da76"
    },
    {
      id: "6",
      nome_presente: "Corte de cabelo para o noivo",
      link_imagem: "https://i.imgur.com/y4f3yHc.jpeg",
      descricao: "Melhor dar uma repaginada antes do casamento.",
      valor: "220",
      link_pix: "https://nubank.com.br/cobrar/1mxf62/67db498e-6ad9-49b0-a1ff-2bc87a0bb768"
    },
    {
      id: "7",
      nome_presente: "Taxa para NÃO jogar o buquê na sua direção",
      link_imagem: "https://blissfotodesign.com.br/wp-content/uploads/2020/06/BlissFotografia-casamento-fotografocasamento-prewedding-047.jpg",
      descricao: "Sai fora!",
      valor: "250",
      link_pix: "https://nubank.com.br/cobrar/435w/67bba141-d7e0-4772-967a-a20f1e2c4251"
    },
    {
      id: "8",
      nome_presente: "Contribuição para a Lua de Mel",
      link_imagem: "https://img.buzzfeed.com/buzzfeed-static/static/2022-06/29/13/asset/5b47d3c3aae7/sub-buzz-2235-1656511024-18.jpg",
      descricao: "Charutos cubanos e vários mojitos!",
      valor: "300",
      link_pix: "https://nubank.com.br/cobrar/1mxf62/67db49b6-5e99-4d39-a4a6-4f8dff3852fa"
    },
    {
      id: "9",
      nome_presente: "Perfume para o noivo",
      link_imagem: "https://s2-pegn.glbimg.com/1ZyurcD61XpfkjxK3RX-T3j8EJA=/0x0:800x497/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba41d7b1ff5f48b28d3c5f84f30a06af/internal_photos/bs/2024/Z/y/7Ldp3wQWa3AIyv3PBhgA/net-1000-br-st-jinfa-colheita02-24-1057-1-.jpeg",
      descricao: "Fragrância clássica e elegante para ele.",
      valor: "350",
      link_pix: "https://nubank.com.br/cobrar/435w/67bba15b-3f59-4ed6-bc93-e0122975720e"
    },
    {
      id: "10",
      nome_presente: "Taxa para perguntar quando o casal vai ter filhos",
      link_imagem: "https://i.pinimg.com/736x/6a/9d/19/6a9d19cdcbb41e495d7a4b6985a13ec2.jpg",
      descricao: "A resposta vai te surpreender.",
      valor: "400",
      link_pix: "https://nubank.com.br/cobrar/1mxf62/67db49d8-db55-4433-9bf6-5e7f108a7666"
    },
    {
      id: "11",
      nome_presente: "Maquiagem da noiva",
      link_imagem: "https://i.imgur.com/rq0M3wz.jpeg",
      descricao: "Vamos ajudá-la a superar essa make estilo David Bowie.",
      valor: "500",
      link_pix: "https://nubank.com.br/cobrar/435w/67b52330-f5e1-41af-8266-ead14303f902"
    },
    {
      id: "12",
      nome_presente: "Transporte Havana a Varadero",
      link_imagem: "https://www.nit.pt/wp-content/uploads/2022/05/18e67bb5259a0b63149f06759c8c2547-754x394.jpg",
      descricao: "Garanta uma viagem livre de perrengues para os noivos.",
      valor: "750",
      link_pix: "https://nubank.com.br/cobrar/1mxf62/67db49fd-d2df-44ad-9421-e3a7b5ffe467"
    },
    {
      id: "13",
      nome_presente: "Diária Lua de Mel",
      link_imagem: "https://i.imgur.com/5EHEN68.jpeg",
      descricao: "Depois de uma festa dessas, eles precisam recarregar as energias.",
      valor: "1000",
      link_pix: "https://nubank.com.br/cobrar/435w/67bba174-6765-4bd7-87e3-dbdb401b1f5d"
    },
    {
      id: "14",
      nome_presente: "Passagem da Lua de Mel",
      link_imagem: "https://aeroin.net/wp-content/uploads/2015/11/Copa1002.jpg",
      descricao: "Ajude os noivos a chegarem a Havana!",
      valor: "2000",
      link_pix: "https://nubank.com.br/cobrar/1mxf62/67db4a18-939d-4bcc-9068-2d090217fd83"
    },
    {
      id: "15",
      nome_presente: "Taxa para criticar a festa",
      link_imagem: "https://scontent.fcpq3-1.fna.fbcdn.net/v/t1.6435-9/93807223_1633294286828756_1422979178344480768_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH_1WKggiLxnh4OxzCFFH6I3SdWKKt-FqzdJ1Yoq34WrClgLiRhqGdNISsKmfYdsXpHF32uslFwBjBDvuG95xcc&_nc_ohc=zD2wEQCPGHYQ7kNvgEADUbE&_nc_oc=Adj6xWZOO1iB7leRoggJXBMl4nGRgGMOAhkQXOs3IsL6JEFs4pqJ5R1yAhs8b9D5EA5EGcBDHnfoQj0uE04-Mqee&_nc_zt=23&_nc_ht=scontent.fcpq3-1.fna&_nc_gid=AqzGqVMaRQsXYg5O9extagT&oh=00_AYCmydDAEBkm5NTlKeMEEIgYddgyH_Xiw-Y2bSZCG6Rt6Q&oe=67E1F936",
      descricao: "Agora tá liberado, pode falar o que quiser!",
      valor: "3000",
      link_pix: "https://nubank.com.br/cobrar/435w/67bba192-92ae-42c5-aa1c-ae73d979b1e2"
    },
    {
      id: "16",
      nome_presente: "O que o coração mandar",
      link_imagem: "https://d1x4bjge7r9nas.cloudfront.net/wp-content/uploads/2016/03/23220140/SILVIO-SANTOS_-Foto-Divulga%C3%A7%C3%A3o-SBT.jpg",
      descricao: "Escolha o valor que quiser presentear.",
      valor: "0",
      link_pix: "https://nubank.com.br/cobrar/435w/67bba1a3-f261-4c01-b029-6c71d77cd7ec"
    }
  ]
  


    constructor() {}
  
    ngOnInit(): void {
    }

}
