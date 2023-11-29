import { NgModule } from '@angular/core';
import { NumberInputDirective } from './directives/only-number.directive';
import { CdnUrlPipe } from './pipes/cdnUrl.pipe';
import { CommonModule } from '@angular/common';


const directives = [
  NumberInputDirective,
];

const pipes = [
  CdnUrlPipe,
];

@NgModule({
  declarations: [...directives, ...pipes],
  imports: [CommonModule],
  exports: [...directives, ...pipes],
})
export class BynGeneralSharedUtilsModule { }
