import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Douglas"
  dataNascimento = "1993-01-12"
  urlImagem = "/assets/programador.webp"

  mostrarDataNascimento() {
    alert(`A data de nascimento do Douglas é: ${this.dataNascimento}`)
  }
}
