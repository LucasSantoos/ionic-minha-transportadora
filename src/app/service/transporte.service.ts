import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transporte } from '../model/Transporte.interface';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  private URI = 'http://localhost:3000/transportes';

  constructor(
    private httpClient:HttpClient
  ) { }

  findAll() {
    return this.httpClient.get<Transporte[]>(this.URI);
  }

  delete(item: Transporte) {
    return this.httpClient.delete(`${this.URI}/${item.id}`);
  }

  find(id: number) {
    return this.httpClient.get<Transporte>(`${this.URI}/${id}`);
  }

  save(item: Transporte) {
    if (item.id) {
      return this.put(item);
    }
    return this.post(item);
  }

  post(item: Transporte) {
    return this.httpClient.post<Transporte>(this.URI, item);
  }

  put(item: Transporte) {
    return this.httpClient.put<Transporte>(`${this.URI}/${item.id}`, item);
  }
}
