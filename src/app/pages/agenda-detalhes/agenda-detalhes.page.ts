import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaDadosService } from 'src/app/services/agenda-dados.service';

@Component({
  selector: 'app-agenda-detalhes',
  templateUrl: './agenda-detalhes.page.html',
  styleUrls: ['./agenda-detalhes.page.scss'],
})
export class AgendaDetalhesPage implements OnInit {

  public modoDeEdicao = false
  public contatoSelecionado : any
  public escolha : string
  
  userForm : FormGroup

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private agenda : AgendaDadosService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0){
      this.contatoSelecionado = this.agenda.enviarDadosId(id)
    }else{
      this.contatoSelecionado = {id, nome: "", sobrenome:"", tipoDeTelefone:"", numero:"", email:""}
      this.modoDeEdicao = true
    }
    this.userForm = this.formBuilder.group({
      nome : ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      sobrenome : ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      escolha : [''],
      numero: ['', Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(15)])],
      email: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(50)])]
    })
  }

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

  excluirContato(){
    this.agenda.excluiDados(this.contatoSelecionado)
    this.router.navigate(['/agenda-lista/'])
  }

}
