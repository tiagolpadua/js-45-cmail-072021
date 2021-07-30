import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventoCmailListItem } from 'src/app/components/cmail-list-item/cmail-list-item.component';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';

@Component({
    selector: 'cmail-caixa-de-entrada',
    templateUrl: './caixa-de-entrada.component.html',
    styles: [`
    ul, li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    `]
})
export class CaixaDeEntradaComponent implements OnInit {
    private _isNewEmailFormOpen = false;

    emailList: Email[] = [];

    email = {
        destinatario: '',
        assunto: '',
        conteudo: ''
    }

    constructor(private emailService: EmailService) { }

    handleRemoveEmail(eventoVaiRemover: EventoCmailListItem, emailId: string) {
        console.log(eventoVaiRemover);
        if (eventoVaiRemover.status === 'removing') {
            this.emailService
                .deletar(emailId)
                .subscribe(
                    res => {
                        console.log(res);
                        //remove o email da lista de emails depois dela ser apagada da API
                        this.emailList = this.emailList.filter(email => email.id !== emailId);
                    }
                    , err => console.error(err)
                )
        }
    }

    ngOnInit(): void {
        this.emailService
            .listar()
            .subscribe(lista => this.emailList = lista);
    }


    get isNewEmailFormOpen() {
        return this._isNewEmailFormOpen;
    }

    handleNewEmail(formEmail: NgForm) {
        if (formEmail.invalid) {
            return;
        }

        this.emailService
            .enviar(this.email)
            .subscribe(
                emailApi => {
                    //Fazemos todas as outras operações após o OK da API
                    this.emailList.push(emailApi)
                    this.email = { destinatario: '', assunto: '', conteudo: '' }
                    formEmail.reset();
                }
                , erro => console.error(erro)
            )
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
