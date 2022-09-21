import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaDadosService {

  private contatos = [
    {id: 1, nome: 'Ewerson', numero: "(35)9-9999-9999"},
    {id: 2, nome: 'Bruna', numero: "(35)8-8888-8888"}
  ]

  constructor() { }

  enviarTodosDados(){
    return this.contatos
  }

  enviarDadosId(id: number){
    const contatoSelecionado = this.contatos.filter(agenda => agenda.id === id)
    return contatoSelecionado [0]
  }

  recebeDados(dadosRecebidos : any){
    dadosRecebidos.id = this.contatos.length + 1
    this.contatos.push(dadosRecebidos)
  }
}
