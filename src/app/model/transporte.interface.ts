import { Caminhao } from './caminhao.interface';
import { Carga } from './carga.interface';
import { Status } from './status.interface';

export interface Transporte {
    id?: number;
    caminhao?: Caminhao;
    carga?: Carga;
    status: Status;
}