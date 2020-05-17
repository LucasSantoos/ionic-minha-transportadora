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

  constructor() { }

  login(obj: any): boolean {
    if (obj.username === this.fakeAuth.username && obj.password === this.fakeAuth.password) {
      this.user = {
        id: Math.random() * 23,
        nome: "Usuário teste"
      }
      localStorage.setItem("authenticated", "true");
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem("authenticated");
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem("authenticated")) {
      return true;
    }

    return false;
  }

  getUser(): Usuario {
    return this.user;
  }
}
