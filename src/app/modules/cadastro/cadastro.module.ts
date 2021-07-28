import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentsModule,
    CadastroRoutingModule
  ],
})
export class CadastroModule { }