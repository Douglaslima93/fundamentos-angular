import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exeplo-servicos1',
  templateUrl: './exeplo-servicos1.component.html',
  styleUrls: ['./exeplo-servicos1.component.css']
})
export class ExeploServicos1Component {

  nome = ""

  constructor(private logger : LoggerService) {

  }

  adicionarNome() {
    this.logger.logar(`o nome ${this.nome} foi adicionado`);
  }

}
