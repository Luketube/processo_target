import { Component, OnInit } from '@angular/core';
import { Dados } from '../model/dados';
import { TransferenciaService } from '../service/transferencia.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  nome: string = '';
  telefone: number = 0;

  constructor(private transferencia: TransferenciaService) {}

  ngOnInit(): void {}


  salvar(): void{
    const dadosSalvos: Dados = {nome: this.nome, telefone: this.telefone}
    this.transferencia.adiciona(dadosSalvos);
    this.limparCampos();
  }

  limparCampos(): void{
    this.nome = '';
    this.telefone = 0;
  }

}
