import { Motorista } from './Motorista.interface';

export interface Caminhao {
    id?: number;
    placa: string;
    capacidade: number;
    motorista?: Motorista;
}