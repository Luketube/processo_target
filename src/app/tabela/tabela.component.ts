import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Dados } from '../model/dados';
import { TransferenciaService } from '../service/transferencia.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})

export class TabelaComponent implements AfterViewInit  {
  dados: Dados[] = [];
  displayedColumns = ['nome', 'telefone', 'acoes'];
  dataSource: any;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private transferencia: TransferenciaService) {
    this.dados = this.transferencia.obtemDados();
    this.dataSource = new MatTableDataSource(this.dados);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  deletarItem(id: Date){
    this.dados = this.dados.filter((u) => u.id !== id);
    this.transferencia.atualiza(this.dados);
    this.dataSource = this.dados
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
