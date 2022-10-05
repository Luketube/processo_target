import { Component, OnInit } from '@angular/core';
import { Dados } from '../model/dados';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  dados: Dados[] = [];
  displayedColumns = ['nome', 'telefone']

  constructor() {}

  ngOnInit(): void {
  }

}
