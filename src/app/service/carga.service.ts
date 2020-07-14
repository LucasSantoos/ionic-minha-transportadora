import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carga } from '../model/Carga.interface';
import { BASE_API } from './base-api';

@Injectable({
  providedIn: 'root'
})
export class CargaService {

  private URI = BASE_API + 'cargas';

  constructor(
    private httpClient:HttpClient
  ) { }

  findAll() {
    return this.httpClient.get<Carga[]>(this.URI);
  }

  delete(item: Carga) {
    return this.httpClient.delete(`${this.URI}/${item.id}`);
  }

  find(id: number) {
    return this.httpClient.get<Carga>(`${this.URI}/${id}`);
  }

  save(item: Carga) {
    if (item.id) {
      return this.put(item);
    }
    return this.post(item);
  }

  post(item: Carga) {
    return this.httpClient.post<Carga>(this.URI, item);
  }

  put(item: Carga) {
    return this.httpClient.put<Carga>(`${this.URI}/${item.id}`, item);
  }
}
