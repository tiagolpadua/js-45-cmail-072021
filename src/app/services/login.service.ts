import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IDadosLogin } from '../models/IDadosLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = 'http://localhost:3200/login'

  constructor(private http: HttpClient) { }

  logar(dadosLogin: IDadosLogin) {
    return this.http
      .post<{ token: string }>(this.api, dadosLogin)
      .pipe(
        tap((response) => {
          localStorage.setItem('cmail-token', response.token);
        })
      )
  }
}
