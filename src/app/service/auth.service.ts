import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Usuario;

  fakeAuth: any = {
    username: "demo",
    password: "123"
  }

  authenticated: boolean = false;

  constructor() { }

  login(obj: any): boolean {
    if (obj.username === this.fakeAuth.username && obj.password === this.fakeAuth.password) {
      this.user = {
        id: Math.random() * 23,
        nome: "Usuário teste"
      }
      this.authenticated = true;
      return true;
    }

    return false;
  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getUser(): Usuario {
    return this.user;
  }
}
