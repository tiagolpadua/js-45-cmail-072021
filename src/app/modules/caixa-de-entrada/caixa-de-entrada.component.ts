import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventoCmailListItem } from 'src/app/components/cmail-list-item/cmail-list-item.component';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';
import { HeaderDataService } from 'src/app/services/header-data.service';
import { PageDataService } from 'src/app/services/page-data.service';

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
export class CaixaDeEntradaComponent implements OnInit, OnDestroy {
    private _isNewEmailFormOpen = false;
    private subscription?: Subscription;

    emailList: Email[] = [];

    termoParaFiltro: string = '';

    email = {
        destinatario: '',
        assunto: '',
        conteudo: ''
    }

    constructor(private emailService: EmailService,
        private pageDataService: PageDataService, private headerService: HeaderDataService) { }

    handleRemoveEmail(eventoVaiRemover: EventoCmailListItem, emailId: string) {
        if (eventoVaiRemover.status === 'removing') {
            this.emailService
                .deletar(emailId)
                .subscribe(
                    res => {
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
            .subscribe(lista => {
                this.emailList = lista
                for (let i = 0; i < 20; i++) {
                    this.emailList = [...this.emailList, ...this.emailList]
                }
                console.log(this.emailList.length);
            });

        this.pageDataService
            .defineTitulo('Caixa de entrada - CMail');

        this.subscription = this.headerService
            .valorDoFiltro
            .subscribe(novoValor => {
                this.termoParaFiltro = novoValor;
            });
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    filtrarEmailsPorAssunto() {
        const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();

        return this.emailList.filter(email => {
            const assunto = email.assunto.toLowerCase()
            return assunto.includes(termoParaFiltroEmMinusculo)
        });
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

    toggleNewEmailForm() {
        this._isNewEmailFormOpen = !this.isNewEmailFormOpen
    }
}
