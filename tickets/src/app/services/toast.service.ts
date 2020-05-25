import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable()
export class ToastService {

    public toast;

    constructor(public toastController: ToastController) {
    }

    public async showToast(message, duration?) {
        this.toast = await this.toastController.create({
            message: message,
            cssClass: "hedera-toast",
            duration: duration,
        });
        await this.toast.present();
    }

    public async hideToast() {
        await this.toast.dismiss();
    }

}
