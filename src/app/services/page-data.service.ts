import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {
  // titulo = new BehaviorSubject<string>('');
  titulo = new Subject<string>();

  constructor() { }

  defineTitulo(novoTitulo: string) {
    document!.querySelector('title')!.textContent = novoTitulo;
    this.titulo.next(novoTitulo);
  }

}
