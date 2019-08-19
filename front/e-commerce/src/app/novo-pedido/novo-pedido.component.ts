import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClienteService } from '../core/services/cliente.service';
import { Cliente } from '../core/model/cliente';
import { Produto } from '../core/model/produto';
import { Pedido } from '../core/model/pedido';
import { PedidoService } from '../core/services/pedido.service';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.scss']
})
export class NovoPedidoComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;

  produtosSelecionado: Produto[] = [];
  produtos: Produto[] = [];
  produtoSelecionado: Produto;

  totalItens = 0;
  totalFrete = 0;

  constructor(private clienteServices: ClienteService, private pedidoServices: PedidoService) { }

  ngOnInit() {
    this.clienteServices.listarCliente().subscribe((resp) => {
      console.log(resp);
      
      this.clientes = resp['clientes'];
      resp['produtos'].map((produto: Produto) => {
        produto.quantidade = 1;
      })
      this.produtos = resp['produtos'];
    });
  }

  public selectProduto(produto: Produto){
    let exists = false;
    this.produtosSelecionado.map((item) => {
      if(item.codigo == produto.codigo){
        item.quantidade += 1;
        exists = true;
      }
    });
    if(!exists)
      this.produtosSelecionado.push(produto)

    this.totalItens += produto.precoUnitario;
    this.produtoSelecionado = new Produto();
  }

  public cleanProduto() {
    this.produtosSelecionado = [];
    this.totalItens = 0;
    this.totalFrete = 0
  }

  public finalizePedido() {
    let pedido = new Pedido();
    pedido.cliente = this.clienteSelecionado.codigo;
    pedido.totalItens = this.totalItens;
    pedido.frete = this.totalFrete;
    pedido.quantidade = this.produtosSelecionado.length;

    console.log(JSON.stringify(pedido));
    
    this.pedidoServices.salvar(pedido).subscribe((resp) => {
      console.log(resp);
    });

    this.clienteSelecionado = new Cliente();
    this.cleanProduto();
  }

}
