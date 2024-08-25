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
  @Input() disable:boolean = false
  @Input() allItems:string[] = []
  @Output() newItems = new EventEmitter<string[]>
  copyOfItemsSelected:string[] = []

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
    if(this.copyOfItemsSelected.length === 0 || this.disable){
      return
    }
    this.newItems.emit(this.copyOfItemsSelected)
  }

  createCopyOfListItems(){
    this.copyOfItemsSelected = [...this.itemsSelected]
  }

  addItemSelected(index:number){
    this.copyOfItemsSelected.push(this.allItems[index])
  }

}
