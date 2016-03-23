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
  </div>
  `
})

export class KegComponent {
  public keg: Keg;
}
