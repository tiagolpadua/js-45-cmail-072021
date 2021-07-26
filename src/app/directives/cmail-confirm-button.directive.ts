import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cmailConfirmButton]'
})
export class CmailConfirmButtonDirective {

  @HostBinding('class')
  elementClass = "mdl-button mdl-js-button mdl-button--raised mdl-button--accent";

  constructor() { }

}
