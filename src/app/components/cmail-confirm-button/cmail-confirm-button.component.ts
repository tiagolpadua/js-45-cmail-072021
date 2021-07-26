import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmail-confirm-button',
  templateUrl: './cmail-confirm-button.component.html',
  styles: [
  ]
})
export class CmailConfirmButtonComponent implements OnInit {

  @Input()
  label: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
