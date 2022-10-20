import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Dados } from '../model/dados';
import { TransferenciaService } from '../service/transferencia.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  nome: string = '';
  telefone: any;
  regex: RegExp = (/^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/);

  nomeFormControl = new FormControl('', [Validators.required]);
  telefoneFormControl = new FormControl('', [Validators.pattern(this.regex), Validators.required]);

  constructor(private transferencia: TransferenciaService) {}

  ngOnInit(): void {}


  salvar(): void{
    const dadosSalvos: Dados = {nome: this.nome, telefone: this.telefone, id: new Date()}
    this.transferencia.adiciona(dadosSalvos);
    this.limparCampos();
  }

  limparCampos(): void{
    this.nome = '';
    this.telefone = '';
  }

}
