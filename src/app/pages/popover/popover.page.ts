import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinforComponent } from 'src/app/components/popinfor/popinfor.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

async mostrarPop( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopinforComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });
    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log('Padre', data);
  }

}
