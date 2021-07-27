import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// type Email = {
//     destinatario: string;
//     conteudo: string;
// }

@Component({
    selector: 'cmail-caixa-de-entrada',
    templateUrl: './caixa-de-entrada.component.html',
    styleUrls: []
})
export class CaixaDeEntradaComponent implements OnInit {
    private _isNewEmailFormOpen = false;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        // let emails: Email[];

        // let exibeSpiner = true;

        // this.httpClient.get<Email[]>('http://localhost:3000/emails')
        //     .subscribe(
        //         resp => emails = resp,
        //         err => console.log('Deu erro....' + err),
        //         () => exibeSpiner = false
        //     );

        // console.log(emails);
    }

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
