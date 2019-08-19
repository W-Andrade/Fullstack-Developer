import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  public consultarPedodos(parametro?){
    return this.http.get(`${URL_API}/pedido/${parametro || ''}`);
  }

  public salvar(parametro){
    return this.http.post(`${URL_API}/pedido`,parametro);
  }
}
