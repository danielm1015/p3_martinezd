import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../../data/data.interface';
import data from '../../../data/data';
import { QuotePage } from '../../quote/quote/quote';


@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage  implements OnInit{

  quoteCollection: {category: string, quotes: Quote[], icon: string};
  quotePage = QuotePage
  constructor(public navCtrl: NavController) {
  }

  ngOnInit(){
    this.quoteCollection = data;
  }

}
