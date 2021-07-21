import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _isNewEmailFormOpen = false;

  emailList: any = [];

  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  cadastrar($event: Event) {
    $event.preventDefault();
    this.emailList.push(this.email);

    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: '',
    }
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
