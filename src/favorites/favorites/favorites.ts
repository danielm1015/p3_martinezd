import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibraryPage } from '../library/library';


@IonicPage()
@Component({
  template: `
  <ion-tabs>
      <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libaryPage" tabTitle="Library" tabIcon="star"></ion-tab>
  </ion-tabs>
  `
})
export class FavoritesPage {

  favoritesPage = FavoritesPage;
  libaryPage = LibraryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

}
