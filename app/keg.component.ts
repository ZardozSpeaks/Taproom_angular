import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <h3>{{ keg.name }}</h3>
    <h4>{{ keg.brand }}</h4>
    <h4>ABV: {{ keg.ABV }}%</h4>
    <h4>Pint: \${{ keg.price }}</h4>
    <h4>Pints Remaining: {{ keg.pintsRemaining }}</h4>
    <button type="submit" (click)="pourPint()">Pour Pint</button>
  </div>
  `
})

export class KegComponent {
  public keg: Keg;
  pourPint() {
    this.keg.pintsRemaining = this.keg.pintsRemaining -1;
    this.checkLow()
  }
  checkLow() {
    if(this.keg.pintsRemaining <= 10) {
      this.keg.low = true;
      console.log("low")
    } else {
      this.keg.low = false;
    }
  }
}
