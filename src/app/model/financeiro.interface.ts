import { Caminhao } from './caminhao.interface';
import { Carga } from './carga.interface';

export interface Financeiro {
    id?: number;
    caminhao: Caminhao;
    carga: Carga;
    saldo: string;
}