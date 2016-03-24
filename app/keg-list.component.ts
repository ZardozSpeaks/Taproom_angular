import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { LowPipe } from './low.pipe';
import { EditKegDetailsComponent} from './edit-keg-details.component';
import { KegSelectComponent} from './keg-select.component';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [LowPipe],
  directives: [KegComponent, KegSelectComponent, EditKegDetailsComponent, NewKegComponent],
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
  <keg-select *ngIf="selectedKeg" [keg]="selectedKeg" (onClick)="kegToEdit = selectedKeg">
  </keg-select>
  <edit-keg-details *ngIf="kegToEdit" [keg]="kegToEdit">
  </edit-keg-details>
  <div class="done">
  <button class="btn btn-warning" *ngIf="kegToEdit" (click)="editToggle()">Done</button>
  </div>
  <new-keg (onSubmitNewKeg)="pushKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public kegToEdit: Keg;
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: string = "notLow";
  public edit: boolean = false;
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
  editToggle() {
    this.kegToEdit = null;;
  }
}
