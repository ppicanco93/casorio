import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Convite } from './shared/models/convite';
import { map, Observable } from 'rxjs';
import { Presente } from './shared/models/presente';
import { Convidados } from './shared/models/convidados';
import { Mensagem } from './shared/models/mensagem';

@Injectable({
  providedIn: 'root'
})
export class ConvidadosService {

  private readonly baseUrl = 'https://isabellaepedro.space'; // Or your full API URL e.g., 'http://your-api-url/convite'

  constructor(@Inject(HttpClient) public http: HttpClient) {
  }

  getConvites(): Observable<Convite[]> {  // Method to get all convites
    return this.http.get<Convite[]>(`${this.baseUrl}/convites`)
      .pipe(
        map(response => response ? response.map(item => new Convite(item)) : [])
      )
  }

  checkConvite(value: string): Observable<string | null> {
    return this.http.get<string>(`${this.baseUrl}/check-convite?nome_ou_id_convite=${value.trim()}`)
  }

  checkStatus(value: string): Observable<string | null> {
    return this.http.get<string>(`${this.baseUrl}/check-status?id_convite=${value.trim()}`)
  }

  getPresentes(): Observable<Presente[]> {  // Method to get all Presentes
    return this.http.get<Presente[]>(`${this.baseUrl}/lista-presentes`)
      .pipe(
        map(response => response ? response.map(item => new Presente(item)) : [])
      )
  }

  getConvidadosPorConvite(idConvite: string): Observable<Convidados[]> {
    return this.http.get<Convidados[]>(`${this.baseUrl}/convidados?id_convite=${idConvite}`)
    .pipe(
      map(response => response ? response.map(item => new Convidados(item)) : [])
    )
  }

  updateConvidado(convidado: any): Observable<any> { // Adjust return type as needed
    return this.http.post(`${this.baseUrl}/update-convidado`, convidado);
  }

  mandarMensagem(info_presente: any): Observable<any> { // Adjust return type as needed
    return this.http.post(`${this.baseUrl}/create-message`, info_presente);
  }

  getMensagens(): Observable<Mensagem[]> {  // Method to get all Mensagens
    return this.http.get<Mensagem[]>(`${this.baseUrl}/mensagens`)
      .pipe(
        map(response => response ? response.map(item => new Mensagem(item)) : [])
      )
  }

}
