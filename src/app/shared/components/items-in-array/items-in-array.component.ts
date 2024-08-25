import { Component, Input } from '@angular/core';
import { CardItemsComponent } from '../card-items/card-items.component';

@Component({
  selector: 'app-items-in-array',
  standalone: true,
  imports: [CardItemsComponent],
  templateUrl: './items-in-array.component.html',
  styleUrl: './items-in-array.component.scss'
})
export class ItemsInArrayComponent {
  @Input() currentLocation!:number
  @Input() arrayItems:string[] =[]
  @Input() itemToFind:number = -1

}
