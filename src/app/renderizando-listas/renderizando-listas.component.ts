import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: "Celular xl", descricao: "Um celular grande", esgotado: false},
    { id: 2, nome: "Celular Normal", descricao: "Um celular Normal", esgotado: false},
    { id: 3, nome: "Celular Pequeno", descricao: "Um celular Pequeno", esgotado:  true}
  ]
}
