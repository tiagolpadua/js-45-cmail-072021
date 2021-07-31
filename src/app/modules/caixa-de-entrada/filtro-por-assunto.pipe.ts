import { Pipe, PipeTransform } from '@angular/core';
import { Email } from 'src/app/models/email';

@Pipe({
  name: 'filtroPorAssunto'
})
export class FiltroPorAssunto implements PipeTransform {
  transform(listaEmails: Email[], termoFiltro: string) {
    console.log('vou filtrar');
    return listaEmails
      .filter(
        email =>
          email.assunto.toLowerCase()
            .includes(termoFiltro.toLowerCase()))
  }
}
