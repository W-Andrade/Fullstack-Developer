import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    NovoPedidoComponent,
    ConsultaPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
