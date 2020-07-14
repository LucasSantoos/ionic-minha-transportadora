import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caminhao } from '../model/caminhao.interface';
import { BASE_API } from './base-api';

@Injectable({
  providedIn: 'root'
})
export class CaminhaoService {

  private URI = BASE_API + 'caminhoes';

  constructor(
    private httpClient:HttpClient
  ) { }

  findAll() {
    return this.httpClient.get<Caminhao[]>(this.URI);
  }

  delete(item: Caminhao) {
    return this.httpClient.delete(`${this.URI}/${item.id}`);
  }

  find(id: number) {
    return this.httpClient.get<Caminhao>(`${this.URI}/${id}`);
  }

  save(item: Caminhao) {
    if (item.id) {
      return this.put(item);
    }
    return this.post(item);
  }

  post(item: Caminhao) {
    return this.httpClient.post<Caminhao>(this.URI, item);
  }

  put(item: Caminhao) {
    return this.httpClient.put<Caminhao>(`${this.URI}/${item.id}`, item);
  }
}
