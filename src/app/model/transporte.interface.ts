import { Caminhao } from './caminhao.interface';
import { Carga } from './carga.interface';

export interface Transporte {
    id?: number;
    caminhao?: Caminhao;
    carga?: Carga;
    status: string;
}