import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    avatar: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {
      console.log(this.formCadastro.value);
      this.formCadastro.reset();
    }
    else {
      this.formCadastro.markAllAsTouched();
    }
  }

}
