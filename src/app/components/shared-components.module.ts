import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmailFormModule } from './cmail-form-module.module';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';
import { HeaderComponent } from './header/header.component';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MensagemErroComponent,
    CmailListItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    CmailFormModule
  ],
  exports: [
    HeaderComponent,
    MensagemErroComponent,
    CmailFormModule,
    CmailListItemComponent
  ]
})
export class SharedComponentsModule { }
