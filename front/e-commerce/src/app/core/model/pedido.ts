import { Cliente } from './cliente';

export class Pedido {
    id: number;
    codigo: string;
    cliente: string;
    itens: string[];
    totalItens: number;
    quantidade: number;
    frete: number;
}
