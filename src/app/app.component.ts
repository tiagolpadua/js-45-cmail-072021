import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _isNewEmailFormOpen = false;

  formCadastro = {
    email: '',
    assunto: '',
    categoria: '',
    mensagem: '',
    data: ''
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  cadastrar($event: Event) {
    $event.preventDefault();
    console.log(this.formCadastro);
  }

  mostraValor($event: any) {
    if ($event.target) {
      console.log($event.target.value);
    }
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }
}
