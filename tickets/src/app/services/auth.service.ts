import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import * as firebase from 'firebase';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { environment } from './../../environments/environment';


@Injectable()
export class AuthService {
    public _user;
    private currentUserSubject: Subject<Object>;
    public currentUser: Observable<Object>;
    public signUpError: string;
    public signUpUser = firebase.functions().httpsCallable('signUpUser');


    constructor() {
        this.currentUserSubject = new Subject<Object>();
        this.currentUser = this.currentUserSubject.asObservable();

        const self = this;
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                self.deleteLocalStorageUser();
                self.getLocalStorageUser();
                return;
            }
            self.setUser(user);
            self.setLocalStorageUser(user);
        });
    }

	/**
	 * Send a POST request to our login endpoint with the data
	 * the user entered on the form.
	 */
    async login(accountInfo: any) {
        const loggedUser = await firebase.auth().signInWithEmailAndPassword(accountInfo.email, accountInfo.password);
        this.setLocalStorageUser(loggedUser.user);
    }

	/**
	 * Send a POST request to our signup endpoint with the data
	 * the user entered on the form.
	 */
    async signup(accountInfo) {
        const signedUser = await firebase.auth().createUserWithEmailAndPassword(accountInfo.email, accountInfo.password);
        if (!signedUser.user) {
            throw new Error(this.signUpError);
        }

        await signedUser.user.updateProfile({ displayName: `${accountInfo.firstName} ${accountInfo.lastName}` });

        const userData = {
            accountInfo: {
                firstName: accountInfo.firstName,
                lastName: accountInfo.lastName,
                email: accountInfo.email,
            }
        }
        try {
            await this.signUpUser(userData);
            this.setUser(signedUser.user);
            this.setLocalStorageUser(signedUser.user);
        } catch (e) {
            console.log(e)
        }
    }

    async logout() {
        await firebase.auth().signOut();
        this.deleteLocalStorageUser();
        this.setUser(null);
    }


    setUser(user: any) {
        this._user = user;
        this.currentUserSubject.next(user)
    }

    getToken(): Observable<any> {
        if (!this._user) {
            return Observable.fromPromise(Promise.resolve());
        }

        return Observable.fromPromise(this._user.getIdToken());
    }

    getCurrentUser() {
        return this._user;
    }

    get isLoggedIn(): boolean {
        const user = this.getLocalStorageUser();
        return (user !== null) ? true : false;
    }

    setLocalStorageUser(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getLocalStorageUser(): any {
        return JSON.parse(localStorage.getItem('user'))
    }

    deleteLocalStorageUser(): void {
        localStorage.removeItem('user')
    }

    public async sendResetEmail(email: string) {
        try {
            await firebase.auth().sendPasswordResetEmail(email)
        } catch (e) {
            console.log(e)
        }
    }

    public async verifyPasswordResetCode(actionCode) {
        try {
            const result = await firebase.auth().verifyPasswordResetCode(actionCode);
            return result;
        } catch (e) {
            console.log(e)
        }
    }

    public async confirmPasswordReset(actionCode, newPassword) {
        try {
            await firebase.auth().confirmPasswordReset(actionCode, newPassword);
        } catch (e) {
            console.log(e)
        }
    }

    public async changePassword(oldPassword, newPassword) {
        try {
            let user = firebase.auth().currentUser;
            let credential = firebase.auth.EmailAuthProvider.credential(
                user.email,
                oldPassword
            );
            await user.reauthenticateWithCredential(credential)
            await user.updatePassword(newPassword);
        } catch (e) {
            console.log(e)
        }
    }
}
