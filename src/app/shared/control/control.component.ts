import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  // host:{
  //   class:'control',
  //   '(click)':"onclick"
  // }
})
export class ControlComponent {
  @HostBinding('class') className="control"
  @HostListener('click') 
  onclick(){
    console.log("clicked");
    console.log(this.el);
    
    
  }

  private el=inject(ElementRef)
  label = input.required<string>();
}
