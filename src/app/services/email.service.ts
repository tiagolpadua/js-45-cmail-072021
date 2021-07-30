import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Email } from '../models/email';

interface EmailAPI {
  to: string,
  subject: string,
  content: string,
  createdAt: string,
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  api = 'http://localhost:3200/emails';
  cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('cmail-token')! });

  constructor(private http: HttpClient) { }

  enviar({ destinatario, assunto, conteudo }:
    { destinatario: string, assunto: string, conteudo: string }) {

    const emailParaApi = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }

    return this.http
      .post<EmailAPI>(this.api, emailParaApi, { headers: this.cabecalho })
      .pipe<Email>(
        map(
          (emailApi) => {
            return new Email({
              destinatario: emailApi.to,
              assunto: emailApi.subject,
              conteudo: emailApi.content,
              dataDeEnvio: emailApi.createdAt,
              id: emailApi.id,
            })
          }
        )
      )
  }

  // private toEmail(emailAPI: EmailAPI): Email {
  //   return new Email({
  //     destinatario: emailAPI.to,
  //     assunto: emailAPI.subject,
  //     conteudo: emailAPI.content,
  //     dataDeEnvio: emailAPI.createdAt,
  //     id: emailAPI.id
  //   })
  // }

  // listarSH(): Observable<Email[]> {
  //   return this.http
  //     .get<EmailAPI[]>(this.api, { headers: this.cabecalho })
  //     .pipe<Email[]>(
  //       map((resp) => resp.map((emailApi) => this.toEmail(emailApi)))
  //     )
  // }

  // EmailAPI
  listar(): Observable<Email[]> {
    return this.http
      .get<EmailAPI[]>(this.api, { headers: this.cabecalho })
      .pipe(
        map(
          (response) => {
            return response.map(
              (emailApi) => new Email({
                destinatario: emailApi.to,
                assunto: emailApi.subject,
                conteudo: emailApi.content,
                dataDeEnvio: emailApi.createdAt,
                id: emailApi.id
              })
            )
          }
        )
      )
  }

  deletar(id: string) {
    return this
      .http
      .delete(`${this.api}/${id}`, { headers: this.cabecalho })
  }

}
