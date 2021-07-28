import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CmailFormModule } from './cmail-form-module.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MensagemErroComponent],
  imports: [
    CommonModule,
    RouterModule,
    CmailFormModule
  ],
  exports: [
    HeaderComponent,
    MensagemErroComponent,
    CmailFormModule
  ]
})
export class SharedComponentsModule { }
