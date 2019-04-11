import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfor',
  templateUrl: './popinfor.component.html',
  styleUrls: ['./popinfor.component.scss'],
})
export class PopinforComponent implements OnInit {

items = Array(40);

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick( valor: number ) {
    console.log('item', valor);
    this.popoverCtrl.dismiss({
      item: valor
    });
  }

}
