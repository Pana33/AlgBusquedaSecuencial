import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardItemsComponent } from '../../../shared/components/card-items/card-items.component';

@Component({
  selector: 'app-modal-item-to-find',
  standalone: true,
  imports: [CardItemsComponent],
  templateUrl: './modal-item-to-find.component.html',
  styleUrl: './modal-item-to-find.component.scss'
})
export class ModalItemToFindComponent {
  @Input() allItems:string[] = []
  @Input() disable:boolean = false
  @Output() indexItem = new EventEmitter<number>()
  itemSelected:number = -1
  idCloseButton:string = "closeItemToFind"

  selectItemToFind(index:number){
    if(this.disable){
      return
    }
    this.itemSelected = index
    this.indexItem.emit(index)
    document.getElementById(this.idCloseButton)?.click()
  }
}
