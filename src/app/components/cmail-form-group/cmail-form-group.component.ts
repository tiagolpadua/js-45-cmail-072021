import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styles: [
  ]
})
export class CmailFormGroupComponent implements OnInit {

  textoDaLabel = '';
  idCampo = '';
  @Input() campo!: { invalid: boolean | null, touched: boolean | null };

  constructor(private elemento: ElementRef) {
  }

  ngOnInit(): void {
    const inputCampo = this.elemento.nativeElement.querySelector('input');
    this.textoDaLabel = inputCampo.name.replace(inputCampo.name[0], inputCampo.name[0].toUpperCase());
    this.idCampo = inputCampo.name;
  }

}
