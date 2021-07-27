import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, Observable, Subscription } from 'rxjs';
// import { interval, Subscription } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';


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
    avatar: new FormControl('', Validators.required, (campo) => this.validaImagem(campo))
  });

  constructor(private httpClient: HttpClient) {
    // this.subs = interval(1000)
    //   .pipe(
    //     tap(n => console.log('antes do filter: ' + n)),
    //     filter(n => n % 2 === 0),
    //     map(n => n * 3),
    //     map(n => 'O número é: ' + String(n))
    //   )
    //   .subscribe(n => console.log(n));
  }

  ngOnDestroy(): void {
    // this.subs.unsubscribe();
  }

  ngOnInit(): void {
  }

  validaImagem(campoDoFormulario: AbstractControl): Observable<{ urlInvalida: boolean; } | null> {

    return this.httpClient
      .head(campoDoFormulario.value, {
        observe: 'response'
      })
      .pipe(
        map(
          (response: HttpResponseBase) =>
            response.ok ? null : { urlInvalida: true }
        ),
        catchError(() => [{ urlInvalida: true }])
      )
  }

  validaImagemDebounced(campoDoFormulario: AbstractControl): Observable<{ urlInvalida: boolean; } | null> {
    return this.httpClient
      .head(campoDoFormulario.value, {
        observe: 'response'
      })
      .pipe(
        map(
          (response: HttpResponseBase) =>
            response.ok ? null : { urlInvalida: true }
        ),
        catchError(() => [{ urlInvalida: true }])
      )
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {
      console.log(this.formCadastro.value);
      this.formCadastro.reset();
    } else {
      this.formCadastro.markAllAsTouched();
    }
  }

}
