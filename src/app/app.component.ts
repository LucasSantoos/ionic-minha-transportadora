import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Motoristas',
      url: '/motoristas',
      icon: 'person'
    },
    {
      title: 'Caminhões',
      url: '/caminhoes',
      icon: 'car'
    },
    {
      title: 'Cargas',
      url: '/cargas',
      icon: 'gift'
    },
    {
      title: 'Em transporte',
      url: '/transporte',
      icon: 'bicycle'
    },
    {
      title: 'Clientes',
      url: '/clientes',
      icon: 'people'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private menuCtrl: MenuController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
    this.menuCtrl.close();
  }
}
