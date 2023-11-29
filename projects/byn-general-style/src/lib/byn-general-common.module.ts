import { NgModule } from '@angular/core';
import { BynWrapperContainerComponent } from './components/byn-wrapper-container/byn-wrapper-container.component';
import { BynFormatComponent } from './components/byn-format/byn-format.component';



@NgModule({
  declarations: [
    BynWrapperContainerComponent,
    BynFormatComponent
  ],
  imports: [
  ],
  exports: [
    BynWrapperContainerComponent,
    BynFormatComponent
  ]
})
export class BynGeneralCommonModule { }
