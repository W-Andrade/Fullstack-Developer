import { Component, OnInit } from '@angular/core';
import { Pedido } from '../core/model/pedido';
import { PedidoService } from '../core/services/pedido.service';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.scss']
})
export class ConsultaPedidoComponent implements OnInit {

  pedidos: Pedido[] = [];
  constructor(private pedidoServices: PedidoService) { }

  ngOnInit() {
    this.pedidoServices.consultarPedodos().subscribe((resp: Pedido[]) => {
      this.pedidos = resp;
    });
  }

}
