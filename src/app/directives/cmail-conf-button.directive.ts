import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cmailConfButton]'
})
export class CmailConfButtonDirective {

  constructor(private campo: ElementRef) { }

  ngOnInit() {
    const campo = this.campo.nativeElement;

    campo.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--raised', 'mdl-button--accent');
  }

}
