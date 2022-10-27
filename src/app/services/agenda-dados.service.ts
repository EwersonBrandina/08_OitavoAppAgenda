import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AgendaDadosService {

  private contatos = [
    {id: 1, nome: 'Ewerson', sobrenome: 'Brandina', escolha: "Celular", numero: "(35)9-9999-9999", email: "teste1@teste.com"},
    {id: 2, nome: 'Bruna', sobrenome: 'Lopes', escolha: "Celular", numero:"(35)8-8888-8888", email: "teste2@teste.com"}
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
    dadosRecebidos.id = Math.max(this.contatos.length + 1)
    this.contatos.push(dadosRecebidos)
  }

  excluiDados(dadosRecebidos : any){
    this.contatos.splice(this.contatos.indexOf(dadosRecebidos), 1)
  }

}