import { Component, OnInit } from '@angular/core';
import { AgendaDadosService } from 'src/app/services/agenda-dados.service';


@Component({
  selector: 'app-agenda-lista',
  templateUrl: './agenda-lista.page.html',
  styleUrls: ['./agenda-lista.page.scss'],
})
export class AgendaListaPage implements OnInit {

  public todosDados : any

  constructor(private dados: AgendaDadosService) {
    this.todosDados = this.dados.enviarTodosDados()
  }

  ngOnInit() {
  }

}
