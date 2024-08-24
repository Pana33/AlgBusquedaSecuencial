import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ItemsInArrayComponent } from '../../shared/components/items-in-array/items-in-array.component';

@Component({
  selector: 'app-alg-secuencial',
  standalone: true,
  imports: [ItemsInArrayComponent],
  templateUrl: './alg-secuencial.component.html',
  styleUrl: './alg-secuencial.component.scss'
})
export class AlgSecuencialComponent implements AfterViewInit {
  @ViewChild(ItemsInArrayComponent) itemsInArray!:ItemsInArrayComponent
  currentItem = -1
  arrayItems:string[] = [
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
  
  ngAfterViewInit(): void {
    this.itemsInArray.currentLocation = this.currentItem
    setTimeout(()=>{
      this.itemsInArray.arrayItems = this.arrayItems
    },250)
  }

}
