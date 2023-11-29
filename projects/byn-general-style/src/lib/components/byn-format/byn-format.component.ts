import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-byn-format',
  templateUrl: './byn-format.component.html',
  styleUrls: ['./byn-format.component.css']
})
export class BynFormatComponent {
  @Input() color: string = "red"
  @Input() bgColor: string = "blue"
  @Input() font: string = "consolas, monospace"
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
    // this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'color', this.color)
    // this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'backgroundColor', this.bgColor)
    // this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'font-family', this.font)
  }
}
