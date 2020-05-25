import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable()
export class LoadingService {

    public loader;

    constructor(public loadingController: LoadingController) {
    }

    public async showLoader() {

        this.loader = await this.loadingController.create({
            message: 'Please wait...',
            cssClass: "hedera-loading",
        });
        await this.loader.present();
    }

    public async hideLoader() {
        await this.loader.dismiss();
    }

}
