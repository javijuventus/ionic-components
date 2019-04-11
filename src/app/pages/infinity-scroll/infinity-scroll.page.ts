import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.page.html',
  styleUrls: ['./infinity-scroll.page.scss'],
})
export class InfinityScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) IonInfiniteScroll: IonInfiniteScroll;
  data: any[] =  Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('Cargando siguientes...');
    setTimeout(() => {

      if (this.data.length > 50) {
        event.target.complete();
        this.IonInfiniteScroll.disabled = true;
        return;
      }
    const nuevoArray = Array(20);
    this.data.push(...nuevoArray);
    event.target.complete();
    }, 1000);
  }
}
