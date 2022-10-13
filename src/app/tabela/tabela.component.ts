import { Component, OnInit } from '@angular/core';
import { Dados } from '../model/dados';
import { TransferenciaService } from '../service/transferencia.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})

export class TabelaComponent implements OnInit  {
  dados: Dados[] = [];
  displayedColumns = ['nome', 'telefone', 'acoes']

  constructor(private transferencia: TransferenciaService) {}

  ngOnInit(): void {
    this.dados = this.transferencia.obtemDados();
    
  }

  deletarItem(id: Date){
    this.dados = this.dados.filter((u) => u.id !== id);
    this.transferencia.atualiza(this.dados);
  }

}
