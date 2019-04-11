import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  constructor( private dataService: DataService ) { }

  albumes: any[] = [];
  textoBuscar = '';
  ngOnInit() {
    this.dataService.getAlbumes() .subscribe ( albumes => {
      this.albumes = albumes;
    });
  }

  buscar( event ) {
    console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
