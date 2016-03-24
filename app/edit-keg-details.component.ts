import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template:`
  <div class = "keg-form">
    <h1>Edit keg information:</h1>
    <input [(ngModel)]="keg.name" class="col-sm-8 input-lg">
    <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg">
    <input [(ngModel)]="keg.price" class="col-sm-8 input-lg">
    <input [(ngModel)]="keg.ABV" class="col-sm-8 input-lg">
  </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
