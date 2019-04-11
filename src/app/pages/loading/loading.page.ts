import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss']
})
export class LoadingPage implements OnInit {
  constructor(public loadingController: LoadingController) {}

  message = 'Espere...';
  loading;

  ngOnInit() {
    this.presentLoading( this.message );

    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }

  async presentLoading( message: string) {
    this.loading = await this.loadingController.create({
      message,
      // duration: 2000
    });
    return this.loading.present();
  }
}
