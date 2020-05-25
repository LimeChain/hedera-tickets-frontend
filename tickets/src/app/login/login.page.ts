import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { ToastService } from '../services/toast.service';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginInserted = true;
  public loginForm: FormGroup;
  public authErrorMessage: string;
  public showAuthErrorMessage: boolean;
  public toastMessage = 'Login is successful';

  constructor(private formBuilder: FormBuilder, private router: Router, private loadingService: LoadingService, private toastService: ToastService, private authService: AuthService, private navCtrl: NavController) {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  ngOnInit() {
  }

  public toggleTabs() {
    this.loginInserted = !this.loginInserted;
  }

  public get email() {
    return this.loginForm.get('email');
  }

  public get password() {
    return this.loginForm.get('password');
  }

  navigateToForgottenPassword() {
    this.router.navigate(['/forgot-password']);
  }

  async doLogin() {
    this.showAuthErrorMessage = false;
    let request = {
      email: this.email.value,
      password: this.password.value
    }
    try {

      await this.loadingService.showLoader();
      await this.authService.login(request);
      this.router.navigate(['']);
      await this.loadingService.hideLoader();
      await this.toastService.showToast(this.toastMessage, 3000)
    } catch (e) {
      await this.loadingService.hideLoader();
      this.handeAuthErrorMessages(e);
    }
  }

  public handeAuthErrorMessages(e) {
    switch (e.code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        this.authErrorMessage = 'Incorrect username or password.'
        this.showAuthErrorMessage = true;
        break;
      default:
        this.authErrorMessage = 'Something went wrong. Please try again or contact site administrator.'
        this.showAuthErrorMessage = true;
        break;
    }
  }


}
