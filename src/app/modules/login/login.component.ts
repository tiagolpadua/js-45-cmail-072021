import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aluno1 = {
    nome: "João",
    cargo: "Estudante",
    disciplina: "Fisica"
  }

  aluno2 = {
    nome: "Carlos",
    cargo: "Professor",
    disciplina: "Engenharia"
  }

  aluno3 = {
    nome: "Raul"
  }

  constructor() { }

  ngOnInit(): void {
  }

  mostrar(texto: string) {
    console.log(texto.toUpperCase());
  }

}
