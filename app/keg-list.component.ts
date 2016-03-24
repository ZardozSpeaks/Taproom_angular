import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { LowPipe } from './low.pipe';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [LowPipe],
  directives: [KegComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="low">Show Low</option>
    <option value="notLow" selected="selected">Show Not Low</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | low:filterLow"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <new-keg (onSubmitNewKeg)="pushKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: string = "notLow"
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  pushKeg(newKeg: Keg): void {
    console.log("push");
    this.kegList.push(newKeg);
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
  }
}
