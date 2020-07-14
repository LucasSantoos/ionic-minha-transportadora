import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/Cliente.interface';
import { BASE_API } from './base-api';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URI = BASE_API + 'clientes';

  constructor(
    private httpClient:HttpClient
  ) { }

  findAll() {
    return this.httpClient.get<Cliente[]>(this.URI);
  }

  delete(item: Cliente) {
    return this.httpClient.delete(`${this.URI}/${item.id}`);
  }

  find(id: number) {
    return this.httpClient.get<Cliente>(`${this.URI}/${id}`);
  }

  save(item: Cliente) {
    if (item.id) {
      return this.put(item);
    }
    return this.post(item);
  }

  post(item: Cliente) {
    return this.httpClient.post<Cliente>(this.URI, item);
  }

  put(item: Cliente) {
    return this.httpClient.put<Cliente>(`${this.URI}/${item.id}`, item);
  }
}
