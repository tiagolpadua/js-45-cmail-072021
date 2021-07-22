import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  handleNewEmail(formEmail: NgForm) {
    console.log(formEmail);

    if (formEmail.invalid) {
      return;
    }

    this.emailList.push(this.email);

    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: '',
    }

    formEmail.resetForm();
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
