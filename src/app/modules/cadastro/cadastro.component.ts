import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, Observable, of, Subscription } from 'rxjs';
// import { interval, Subscription } from 'rxjs';
import { catchError, delay, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit, OnDestroy {
  // subs: Subscription;

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
    username: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('', Validators.required, (campo) => this.validaImagemDebounced(campo))
  });

  mensagensErro: any;

  constructor(private httpClient: HttpClient, private roteador: Router) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  validaImagem(campoDoFormulario: AbstractControl): Observable<{ urlInvalida: boolean; } | null> {
    return of<string>(campoDoFormulario.value)
      .pipe(
        delay(500),
        switchMap(v => this.httpClient
          .head(v, {
            observe: 'response'
          })
          .pipe(
            map(
              (response: HttpResponseBase) =>
                response.ok ? null : { urlInvalida: true }
            ),
            catchError(() => [{ urlInvalida: true }])
          )
        )
      )
  }

  validaImagemDebounced(campoDoFormulario: AbstractControl): Observable<{ urlInvalida: boolean; } | null> {
    return of<string>(campoDoFormulario.value).pipe(
      delay(500),
      switchMap(url => this.httpClient
        .head(url, {
          observe: 'response'
        })
        .pipe(
          map(
            (response: HttpResponseBase) =>
              response.ok ? null : { urlInvalida: true }
          ),
          catchError(() => [{ urlInvalida: true }])
        )
      )
    );
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {
      const userData = new User(this.formCadastro.value);
      this.httpClient
        .post('http://localhost:3200/users', userData)
        .subscribe(
          () => {
            console.log(`Cadastrado com sucesso`);
            this.formCadastro.reset();

            setTimeout(() => {
              this.roteador.navigate(['']);
            }, 1000);
          }
          , (responseError: HttpErrorResponse) => {
            //resposta caso existam erros!
            this.mensagensErro = responseError.error.body
          }
        )
    } else {
      this.formCadastro.markAllAsTouched();
    }
  }

}
