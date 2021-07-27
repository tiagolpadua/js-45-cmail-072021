import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModuloRoteamento } from './app.routes';
import { CmailConfirmButtonComponent } from './components/cmail-confirm-button/cmail-confirm-button.component';
import { CmailFormFieldDirective } from './components/cmail-form-group/cmail-form-field.directive';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';
import { HeaderComponent } from './components/header/header.component';
import { CmailConfButtonDirective } from './directives/cmail-conf-button.directive';
import { CmailConfirmButtonDirective } from './directives/cmail-confirm-button.directive';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CmailCardComponent } from './components/cmail-card/cmail-card.component';
import { MensagemErroComponent } from './components/mensagem-erro/mensagem-erro.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
    CadastroComponent,
    CmailFormGroupComponent,
    CmailFormFieldDirective,
    CmailConfirmButtonDirective,
    CmailConfButtonDirective,
    CmailConfirmButtonComponent,
    CmailCardComponent,
    MensagemErroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
