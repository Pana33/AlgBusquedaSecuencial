import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ItemsInArrayComponent } from '../../shared/components/items-in-array/items-in-array.component';
import { ModalSelectItemsComponent } from './modal-select-items/modal-select-items.component';
import { ModalItemToFindComponent } from './modal-item-to-find/modal-item-to-find.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-alg-secuencial',
  standalone: true,
  imports: [ItemsInArrayComponent, ModalSelectItemsComponent, ModalItemToFindComponent, NgClass],
  templateUrl: './alg-secuencial.component.html',
  styleUrl: './alg-secuencial.component.scss'
})
export class AlgSecuencialComponent implements AfterViewInit {
  @ViewChild(ItemsInArrayComponent) itemsInArray!:ItemsInArrayComponent
  currentItem = -1
  indexItemSelectedToFind:number = -1
  currentStep:number = 0
  itemFinded:boolean | null = null
  positionWhereItemWasFinded:number = -1
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

  runCode(){
    if(this.indexItemSelectedToFind === -1){
      return
    }
    document.getElementById("pointerStep")!.style.top = this.currentStep === 0 ? '18px' : `${18 + this.currentStep * 24.1}px`
    switch(this.currentStep){
      case 0:
        this.callFunction()
        break
      case 1:
        this.setDefatulPosition()
        break
      case 2:
        this.setLoop()
        break
      case 3:
        this.compareResults()
        break
      case 4:
        this.setNewPosition()
        break
      case 5:
        this.breakTheLoop()
        break
      case 6:
        this.goOutCompareResults()
        break
      case 7:
        this.goOutSetLoop()
        break
      case 8:
        this.returnPosition()
        break
    }
  }

  callFunction(){
    // console.log("callFunction")
    this.currentStep = 1
    this.itemFinded = null
    //this.setDefatulPosition()
  }
  
  setDefatulPosition(){
    // console.log("setDefatulPosition")
    this.currentStep = 2
    //this.setLoop()
  }

  setLoop(){
    // console.log("setLoop")
    this.currentItem += 1
    if(this.arrayDefaultItems.length <= this.currentItem){
      this.currentStep = 7
      //this.goOutSetLoop()
    }else{
      this.currentStep = 3
      //this.compareResults()
    }
  }

  compareResults(){
    // console.log("compareResults")
    if(this.arrayDefaultItems[this.currentItem] === this.allItems[this.indexItemSelectedToFind]){
      this.currentStep = 4
      //this.setNewPosition()
    }else{
      this.currentStep = 6
      //this.goOutCompareResults()
    }
  }

  setNewPosition(){
    // console.log("setNewPosition")
    this.currentStep = 5
    //this.breakTheLoop()
  }

  breakTheLoop(){
    // console.log("breakTheLoop")
    this.currentStep = 7
    //this.goOutSetLoop()
  }

  goOutCompareResults(){
    // console.log("goOutCompareResults")
    this.currentStep = 7
    //this.goOutSetLoop()
  }

  goOutSetLoop(){
    // console.log("goOutSetLoop")
    if(this.arrayDefaultItems.length <= this.currentItem || this.arrayDefaultItems[this.currentItem] === this.allItems[this.indexItemSelectedToFind]){
      this.currentStep = 8
      //this.returnPosition()
    }else{
      this.currentStep = 2
      //this.setLoop()
    }
  }

  returnPosition(){
    console.log(this.currentItem)
    if(this.arrayDefaultItems[this.currentItem] === this.allItems[this.indexItemSelectedToFind]){
      this.positionWhereItemWasFinded = this.currentItem
      this.itemFinded = true
    }else{
      this.itemFinded = false
    }
    // console.log("returnPosition")
    this.resetValues()
  }

  resetValues(){
    this.currentStep = 0
    this.currentItem = -1
  }

}
