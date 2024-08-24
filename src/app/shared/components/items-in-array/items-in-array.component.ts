import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-items-in-array',
  standalone: true,
  imports: [NgClass],
  templateUrl: './items-in-array.component.html',
  styleUrl: './items-in-array.component.scss'
})
export class ItemsInArrayComponent {
  currentLocation:number = -1
  array:string[] =[]
  readonly fileRoute:string = "../../../../assets/icons/"
  readonly fileExtencion:string = ".svg"
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
