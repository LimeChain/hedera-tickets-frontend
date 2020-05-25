import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Globals } from './globals';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'My events',
      url: 'my-events',
      icon: 'today'
    },
    {
      title: 'More events',
      url: 'events',
      icon: 'calendar'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private dataService: DataService
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
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase() === path.toLowerCase());
      if (this.selectedIndex < 0) {
        this.selectedIndex = 0;
      }
    }
  }

  onInput($event) {
    const input = $event.target.value;
    if (input === '') {
      this.router.navigate(['/my-events']);
    } else {
      this.router.navigate(['search']);
    }
    this.dataService.addData(input);
  }

  onCancel($event) {
    this.router.navigate(['/my-events']);
  }
}
