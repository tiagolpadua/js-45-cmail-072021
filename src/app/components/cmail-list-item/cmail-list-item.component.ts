import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type EventoCmailListItem = {
  status: 'removing' | 'changing'
}

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter<EventoCmailListItem>()

  constructor() { }

  ngOnInit(): void {
  }

  removeEmail(click: Event) {
    if (confirm('Tem certeza?')) {
      this.vaiRemover.emit({ status: 'removing' })
    }
  }

}
