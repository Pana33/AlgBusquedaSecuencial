import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ItemsInArrayComponent } from '../../shared/components/items-in-array/items-in-array.component';
import { ModalSelectItemsComponent } from './modal-select-items/modal-select-items.component';
import { ModalItemToFindComponent } from './modal-item-to-find/modal-item-to-find.component';

@Component({
  selector: 'app-alg-secuencial',
  standalone: true,
  imports: [ItemsInArrayComponent, ModalSelectItemsComponent, ModalItemToFindComponent],
  templateUrl: './alg-secuencial.component.html',
  styleUrl: './alg-secuencial.component.scss'
})
export class AlgSecuencialComponent implements AfterViewInit {
  @ViewChild(ItemsInArrayComponent) itemsInArray!:ItemsInArrayComponent
  currentItem = -1
  indexItemSelectedToFind:number = -1
  arrayDefaultItems:string[] = [
    "air-plane",
    "android",
    "balloon",
    "bug",
    "cake",
    "camera",
    "clock",
    "cloud",
    "droplet",
    "letter",
  ]
  allItems:string[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'air-plane',
    'android',
    'balloon',
    'bug',
    'bus',
    'cake',
    'camera',
    'clock',
    'cloud',
    'clover',
    'droplet',
    'letter',
    'moon',
    'pencil',
    'phone',
    'piggy',
    'printer',
    'rocket',
    'shield',
    'snowflake',
    'star',
    'suitcase',
    'sun',
    'trash',
    'trophy',
    'twitter',
    'umbrella',
    'windows',
    'xbox',
    'ying-yang',
  ]
  
  ngAfterViewInit(): void {
    this.itemsInArray.currentLocation = this.currentItem
    setTimeout(()=>{
      this.itemsInArray.arrayItems = this.arrayDefaultItems
    },250)
  }

  setNewItems($event:string[]){
    this.arrayDefaultItems = [...$event]
    this.itemsInArray.arrayItems = this.arrayDefaultItems
    this.itemsInArray.itemToFind = this.arrayDefaultItems.findIndex((element) => element === this.allItems[this.indexItemSelectedToFind])
  }

  selectItemToFind($event:number){
    this.indexItemSelectedToFind = $event
    this.itemsInArray.itemToFind = this.arrayDefaultItems.findIndex((element) => element === this.allItems[$event])
  }

}
