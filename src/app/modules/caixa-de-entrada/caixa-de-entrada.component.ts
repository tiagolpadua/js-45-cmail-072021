import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'cmail-caixa-de-entrada',
    templateUrl: './caixa-de-entrada.component.html',
    styleUrls: []
})
export class CaixaDeEntradaComponent {
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
