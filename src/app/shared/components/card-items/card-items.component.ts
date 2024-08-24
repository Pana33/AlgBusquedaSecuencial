import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-items',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card-items.component.html',
  styleUrl: './card-items.component.scss'
})
export class CardItemsComponent {
  @Input() object:string = ""
  @Input() paintHeader:boolean = false
  @Input() paintFooter:boolean = false
  @Input() index!:number
  readonly fileRoute:string = "../../../../assets/icons/"
  readonly fileExtencion:string = ".svg"
}
