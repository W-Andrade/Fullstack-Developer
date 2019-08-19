import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_API2 } from 'src/app/app.api';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public listarCliente(parametro?){
    return this.http.get(`${URL_API2}/${parametro || ''}`);
  }
}
