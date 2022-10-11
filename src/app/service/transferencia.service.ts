import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dados } from '../model/dados';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  listaDados: Dados[] = [];

  constructor() { }

  adiciona(dado: Dados){
    this.listaDados.push(dado);
  }

  exclui(id: number){
    this.listaDados.splice(id, 1);
    
  }

  obtemDados(){
    return this.listaDados;
  }
}
