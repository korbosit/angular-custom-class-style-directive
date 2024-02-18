import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: true,
})
export class StyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // @Input() set style(styles: Object) {
  //   let styleEntries = Object.entries(styles);
  //   for (let item of styleEntries) {
  //     let [cssStyle, value] = item;
  //     this.renderer.setStyle(this.el.nativeElement, cssStyle, value);
  //   }
  // }

  @Input('appStyle') set style(styles: Object) {
    let styleEntries = Object.entries(styles);
    for (let item of styleEntries) {
      let [cssStyle, value] = item;
      this.renderer.setStyle(this.el.nativeElement, cssStyle, value);
    }
  }
}
