import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CmailFormModule } from './cmail-form-module.module';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';

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
