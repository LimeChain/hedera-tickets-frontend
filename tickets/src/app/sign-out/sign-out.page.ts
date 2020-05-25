import { ToastService } from './../services/toast.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.page.html',
  styleUrls: ['./sign-out.page.scss'],
})
export class SignOutPage implements OnInit {

  private toastMessage = 'Successfully signed out!';
  constructor(private authService: AuthService, private toastService: ToastService, private router: Router) { }

  ngOnInit() {
  }


  public async signOut() {
    try {
      await this.authService.logout();
      await this.toastService.showToast(this.toastMessage, 3000);
      this.router.navigate(['/login']);
    } catch (e) {
      console.log(e)
    }

  }
}
