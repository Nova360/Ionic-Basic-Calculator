import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  answers : any;

  constructor(public navCtrl: NavController) 
  {

  }

 public display( val: any) : void
  {
    this.answers = document.getElementById('ans').innerHTML = document.getElementById('ans').innerHTML + val;
  //  console.log(val);
   //console.log(eval(this.answers));
  }
  public  allClear()
  {
    document.getElementById('ans').innerHTML = "";
  }
  public equal()
  {
    document.getElementById('ans').innerHTML =  eval(this.answers).toFixed(2);
  }
}
