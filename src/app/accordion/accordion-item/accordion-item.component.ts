import { Component, OnInit } from '@angular/core';
import faqs from '../../../assets/faqs.json'

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {
  isClicked: boolean = true
  faqsArr: any = []
  index: number = 0

  constructor() { }

  ngOnInit(): void {
    this.faqsArr = faqs
  }

  showContent(i:number){
  
    this.index = i
    if(this.index === i && this.isClicked === false){
      this.isClicked = true
    }else if(this.index === i || this.isClicked === true){
      this.isClicked = true
    }else if(this.isClicked === false){
      this.isClicked = true
    }else if(this.isClicked === true){
      this.isClicked = false
    }
  }
  


}
