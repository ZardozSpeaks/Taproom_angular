import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-select',
  inputs: ['keg'],
  outputs: ['onClick'],
  template: `
  <div class="select-form">
    <button class="btn btn-success" type="submit" (click)="pourPint()">Pour Pint</button>
    <button class="btn btn-warning" type="submit" (click)="kegClicked()">Edit Keg</button>
  </div>
  `
})

export class KegSelectComponent {
  public keg: Keg;
  public onClick: EventEmitter<Keg>
  constructor() {
    this.onClick = new EventEmitter();
  }
  pourPint() {
    this.keg.pintsRemaining = this.keg.pintsRemaining -1;
    this.checkLow()
  }
  checkLow() {
    if(this.keg.pintsRemaining <= 10) {
      this.keg.low = true;
      console.log("low");
    } else {
      this.keg.low = false;
    }
  }
    kegClicked(){
      this.onClick.emit(this.keg);
    }

}
