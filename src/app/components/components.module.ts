import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopinforComponent } from './popinfor/popinfor.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopinforComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PopinforComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
