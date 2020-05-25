import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, NavController, ModalController } from '@ionic/angular';
import { SignUpFormValidators } from './signup.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public signUpForm: FormGroup;

  public signUpErrorMessage;
  public showSignUpErrorMessage;
  public termsAndConditionsModal;
  public loginInserted = false;
  public toastMessage = 'Sign up is successful';

  constructor(private router: Router,
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public toastController: ToastController,
    private navCtrl: NavController,
    public modalController: ModalController) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passwords: this.formBuilder.group({
        password: ['',
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ],
        repeatPassword: ['',
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ]
      }, { validator: SignUpFormValidators.differentPasswordsValidator }),
      termsAndConditions: [false, [Validators.requiredTrue]]
    });

  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  // Attempt to signup in through our User service
  async doSignup() {
    let request = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value
    }

    // TO DO Save all the related info in database (first name, last name, phone and etc)
    try {
      //await this.loadingService.showLoader();
      await this.authService.signup(request);
      this.router.navigate(['']);
      //await this.loadingService.hideLoader();
    } catch (e) {
      // await this.loadingService.hideLoader();
      this.handleAuthErrorMessages(e);
    }
  }

  public get firstName() {
    return this.signUpForm.get('firstName');
  }

  public get lastName() {
    return this.signUpForm.get('lastName');
  }

  public get email() {
    return this.signUpForm.get('email');
  }

  public get passwords() {
    return this.signUpForm.get('passwords');
  }

  public get password() {
    return this.passwords.get('password');
  }

  public get repeatPassword() {
    return this.passwords.get('repeatPassword');
  }

  public get termsAndConditions() {
    return this.signUpForm.get('termsAndConditions');
  }

  public goToPreviousPage() {
    this.navCtrl.back();
  }

  public handleAuthErrorMessages(e) {
    console.log(e)
    switch (e.code) {
      case 'auth/email-already-in-use':
        this.signUpErrorMessage = 'There is already a user with this email address. Please log in or use another email to sigh up.'
        this.showSignUpErrorMessage = true;
        break;
      default:
        this.signUpErrorMessage = 'Something went wrong. Please try again or contact site administrator.'
        this.showSignUpErrorMessage = true;
        break;
    }
  }

}
