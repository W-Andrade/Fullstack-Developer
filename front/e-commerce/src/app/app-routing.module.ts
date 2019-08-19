import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';


const routes: Routes = [
  { path: 'novo-pedido', component: NovoPedidoComponent },
  { path: 'consulta-pedido', component: ConsultaPedidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
