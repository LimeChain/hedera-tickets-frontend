import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
    this.appPages = [
      {
        title: 'Login',
        url: 'login',
        icon: 'person'
      },
      {
        title: 'Sign Up',
        url: 'sign-up',
        icon: 'log-in'
      }
    ];
    this.authService.currentUser.subscribe(async (user) => {
      if (user) {
        this.appPages = [
          {
            title: 'My events',
            url: 'my-events',
            icon: 'today'
          },
          {
            title: 'More events',
            url: 'events',
            icon: 'calendar'
          },
          {
            title: 'Sign out',
            url: 'sign-out',
            icon: 'log-out'
          }
        ];
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase() === path.toLowerCase());
    }
  }
}
