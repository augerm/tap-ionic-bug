import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  childFn() {
  	console.log("Child clicked");
  }

  parentFn() {
  	console.log("Parent clicked");
  }
}
