import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../../data/data.interface';
import data from '../../../data/data';


@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage  implements OnInit{

  quoteCollection: {category: string, contacts: Quote[], icon: string};

  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){
    this.quoteCollection = data;
  }

}
