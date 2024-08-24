import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardItemsComponent } from '../../../shared/components/card-items/card-items.component';
import { ItemsInArrayComponent } from '../../../shared/components/items-in-array/items-in-array.component';

@Component({
  selector: 'app-modal-select-items',
  standalone: true,
  imports: [CardItemsComponent, ItemsInArrayComponent],
  templateUrl: './modal-select-items.component.html',
  styleUrl: './modal-select-items.component.scss'
})
export class ModalSelectItemsComponent {
  @Input() itemsSelected:string[] = []
  @Output() newItems = new EventEmitter<string[]>
  copyOfItemsSelected:string[] = []
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

  deleteItems(){
    this.copyOfItemsSelected = []
  }

  addFiveRandomItems(){
    for(let i = 0; i < 5; i++){
      let randomNumer = Math.floor(Math.random() * 40)
      this.copyOfItemsSelected.push(this.allItems[randomNumer])
    }
  }

  cancelChanges(){
    this.copyOfItemsSelected = []
  }

  applyChanges(){
    if(this.copyOfItemsSelected.length === 0){
      return
    }
    this.newItems.emit(this.copyOfItemsSelected)
  }

  createCopyOfListItems(){
    this.copyOfItemsSelected = [...this.itemsSelected]
  }

}
