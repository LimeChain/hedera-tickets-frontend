import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/fromPromise';
import * as firebase from 'firebase';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged'
import { AuthService } from './auth.service';

const USERS_COLLECTION = 'users';

@Injectable()
export class UserService {
    public currentSignedUser;
    public fetchUserDataError: string;

    public userCollectionDataSubscription = new ReplaySubject<any>(null);

    public firebaseUserCollectionSubscription;
    public firebaseTenantCollectionSubscription;

    public userData;
    public tenantData;

    // We do not filter the empty subscription object emitting here because of the AdminGuard.
    userCollectionData = this.userCollectionDataSubscription
        .asObservable();

    constructor(private authService: AuthService) {

        this.authService.currentUser.subscribe(async (user) => {
            if (user) {
                this.currentSignedUser = user;

                //user = Fetch
                this.userData = await this.getUserData(this.currentSignedUser.uid);
                // this.updateUserSubscriptions(this.userData);

                // Subscribe for changes in User Collection
                this.firebaseUserCollectionSubscription = firebase.firestore().collection(USERS_COLLECTION).doc(this.currentSignedUser.uid).onSnapshot((documentSnapshot) => {
                    this.userData = documentSnapshot.data();
                    this.updateUserSubscriptions(documentSnapshot.data())
                });

                // Subscribe for changes in Tenant Collection

            } else {
                // Unsubscribe from changes in User Collection
                if (this.firebaseUserCollectionSubscription) {
                    this.firebaseUserCollectionSubscription();
                }

                this.updateUserDataCollectionSubscription(null);
            }
        });
    }

    updateUserSubscriptions(userData) {
        try {
            if (!userData) {
                return;
            }
            this.updateUserDataCollectionSubscription(userData);
        } catch (e) {
            throw new Error(e);
        }
    }

    async getUserData(uid) {
        const userRef = await firebase.firestore().collection(USERS_COLLECTION).doc(uid);
        const userDoc = await userRef.get();
        return userDoc.data();
    }

    updateUserDataCollectionSubscription(userData) {
        this.userCollectionDataSubscription.next(userData)
    }
}
