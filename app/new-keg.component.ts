import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <div class="keg-form">
    <h1>Add a new keg:</h1>
    <input placeholder="Name" class="col-sm-8 input-lg" required #newName>
    <input placeholder="Brand" class="col-sm-8 input-lg" required #newBrand>
    <input placeholder="Price" class="col-sm-8 input-lg" required #newPrice>
    <input placeholder="ABV" class="col-sm-8 input-lg" required #newABV>
    <button (click)="addKeg(newKeg)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName, newBrand, newPrice, newABV: HTMLInputElement) {
    var newKeg = new Keg(newName.value, newBrand.value, parseFloat(newPrice.value), parseFloat(newABV.value));
    this.onSubmitNewKeg.emit(newKeg);
  }
}
