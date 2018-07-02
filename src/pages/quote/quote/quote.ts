import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../../data/data.interface';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit {

  quoteGroup: {category: string, contacts: Quote[], icon: string}[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

}
