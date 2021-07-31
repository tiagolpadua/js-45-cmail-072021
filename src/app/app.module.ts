import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaiuculasPipe } from './maiuculas.pipe';
import { FiltroPorAssunto } from './modules/caixa-de-entrada/filtro-por-assunto.pipe';
// import { MaiuculasPipe } from './maiuculas.pipe';
// import { ModuloRoteamento } from './app.routes';
// import { CadastroModule } from './modules/cadastro/cadastro.module';
// import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';
// import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    MaiuculasPipe
  ],
  imports: [
    BrowserModule,
    // CadastroModule,
    // LoginModule,
    // CaixaDeEntradaModule,
    // ModuloRoteamento
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
