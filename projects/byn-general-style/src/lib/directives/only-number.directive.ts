import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[bbInputNumber]',
})
export class NumberInputDirective {
  regex = /^[0-9]/;
  constructor(private elementRef: ElementRef, private ngControl: NgControl) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: any) {
    if (
      [46, 8, 9, 27, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (event.keyCode == 65 && event.ctrlKey === true) ||
      // Allow: Ctrl+C
      (event.keyCode == 67 && event.ctrlKey === true) ||
      // Allow: Ctrl+V
      (event.keyCode == 86 && event.ctrlKey === true) ||
      // Allow: Ctrl+X
      (event.keyCode == 88 && event.ctrlKey === true) ||
      // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    if (!this.regex.test(event.key) && event.keyCode !== 8) {
      event.preventDefault();
    }
  }

  //   @HostListener('input', ['$event'])
  //   onInput($event) {
  //     const value = $event.target.value;
  //     if(value[0] !== '0') {
  //       this.elementRef.nativeElement.value = '';
  //       if(this.ngControl.control) {
  //         this.ngControl.control.reset()
  //       }
  //     }
  //   }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    if (event.clipboardData) {
      event.preventDefault();
      const pastedInput: string = event.clipboardData.getData('text/plain').replace(/\r\n/g, '');
      const regex = /^[0-9]/;
      if (regex.test(pastedInput)) {
        document.execCommand('insertText', false, pastedInput);
        this.elementRef.nativeElement.value = pastedInput;
        if (this.ngControl.control) {
          this.ngControl.control.setValue(pastedInput);
          this.ngControl.control.updateValueAndValidity();
        }
      }
    }
  }
}
