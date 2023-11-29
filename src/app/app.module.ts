import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralStyleModule } from '@byn/general-style'; 
import { BynGeneralCommonModule, BynGeneralSharedUtilsModule } from 'byn-general-style';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralStyleModule,
    BynGeneralCommonModule,
    BynGeneralSharedUtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
