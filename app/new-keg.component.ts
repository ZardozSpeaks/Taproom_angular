import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h1>Add a new keg:</h1>
    <input placeholder="Name" value="Pils" class="col-sm-8 input-lg" #newName required>
    <input placeholder="Brand" value="Occidental" class="col-sm-8 input-lg" #newBrand required>
    <input placeholder="Price" value="5" class="col-sm-8 input-lg" #newPrice required >
    <input placeholder="ABV" value="5.8" class="col-sm-8 input-lg" #newABV required >
    <button (click)="addKeg(newName, newBrand, newPrice, newABV)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newPrice: HTMLInputElement, newABV: HTMLInputElement) {
    var newKeg = new Keg(newName.value, newBrand.value, parseFloat(newPrice.value), parseFloat(newABV.value));
    console.log(newKeg);
    this.onSubmitNewKeg.emit(newKeg);
    newName.value = null;
    newBrand.value = null;
    newPrice.value = null;
    newABV.value = null;
  }
}
