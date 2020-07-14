import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Motorista } from '../model/Motorista.interface';
import { BASE_API } from './base-api';

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {

  private URI = BASE_API + 'motoristas';

  constructor(
    private httpClient:HttpClient
  ) { }

  findAll() {
    return this.httpClient.get<Motorista[]>(this.URI);
  }

  delete(item: Motorista) {
    return this.httpClient.delete(`${this.URI}/${item.id}`);
  }

  find(id: number) {
    return this.httpClient.get<Motorista>(`${this.URI}/${id}`);
  }

  save(item: Motorista) {
    if (item.id) {
      return this.put(item);
    }
    return this.post(item);
  }

  post(item: Motorista) {
    return this.httpClient.post<Motorista>(this.URI, item);
  }

  put(item: Motorista) {
    return this.httpClient.put<Motorista>(`${this.URI}/${item.id}`, item);
  }
}
