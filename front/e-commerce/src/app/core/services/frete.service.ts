import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto';
import { URL_API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class FreteService {

  constructor(private http: HttpClient) { }

  public calcularFrete(){
    return this.http.get(`${URL_API}/frete`);
  }
}
