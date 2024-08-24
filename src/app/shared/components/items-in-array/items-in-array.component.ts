import { Component } from '@angular/core';
import { CardItemsComponent } from '../card-items/card-items.component';

@Component({
  selector: 'app-items-in-array',
  standalone: true,
  imports: [CardItemsComponent],
  templateUrl: './items-in-array.component.html',
  styleUrl: './items-in-array.component.scss'
})
export class ItemsInArrayComponent {
  currentLocation!:number
  array:string[] =[]
  itemToFind:number = -1

  selectItemToFind(item:number){
    if(this.currentLocation != -1){
      return
    }
    if(item === this.itemToFind){
      this.itemToFind = -1
    }else{
      this.itemToFind = item
    }
  }

}
