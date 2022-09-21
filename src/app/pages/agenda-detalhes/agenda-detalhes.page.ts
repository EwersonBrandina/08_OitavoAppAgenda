import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgendaDadosService } from 'src/app/services/agenda-dados.service';

@Component({
  selector: 'app-agenda-detalhes',
  templateUrl: './agenda-detalhes.page.html',
  styleUrls: ['./agenda-detalhes.page.scss'],
})
export class AgendaDetalhesPage implements OnInit {

  public modoDeEdicao = false
  public contatoSelecionado : any

  constructor(
    private route : ActivatedRoute,
    private agenda : AgendaDadosService
  ) { }

  iniciarEdicao(){
    this.modoDeEdicao = true
  }

  encerrarEdicao(){
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0){
      this.modoDeEdicao = false
    }else{
      this.agenda.recebeDados(this.contatoSelecionado)
      this.modoDeEdicao = false
    }
  }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    this.contatoSelecionado = this.agenda.enviarDadosId(id)
  }

}
