import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true,
})
export class ClassDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // @Input() set display(value: Object) {
  //   let entries = Object.entries(value);
  //   for (let item of entries) {
  //     let [className, condition] = item;
  //     if (condition) {
  //       this.renderer.addClass(this.el.nativeElement, className);
  //     }
  //   }
  // }
  // @Input() set appClass(value: Object) {
  //   let entries = Object.entries(value);
  //   for (let item of entries) {
  //     let [className, condition] = item;
  //     if (condition) {
  //       this.renderer.addClass(this.el.nativeElement, className);
  //     }
  //   }
  // }
  @Input('appClass') set display(value: Object) {
    let entries = Object.entries(value);
    for (let item of entries) {
      let [className, condition] = item;
      if (condition) {
        this.renderer.addClass(this.el.nativeElement, className);
      }
    }
  }
}
