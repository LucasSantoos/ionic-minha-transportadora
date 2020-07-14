import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: any = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
  ) {
    if (this.authService.isAuthenticated) {
      this.router.navigate(["motoristas"]);
    }
  }

  ngOnInit() {
  }

  login() {
    if (this.authService.login(this.credentials)) {
      this.router.navigate(["motoristas"]);
    } else {
      this.invalidCredentials();
    }
  }

  async invalidCredentials() {
    let alert = await this.alertCtrl.create({
      message: "Usuário ou senha incorretos!",
      buttons: ["OK"]
    });
    alert.present();
  }
}
