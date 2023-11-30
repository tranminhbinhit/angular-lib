import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { BynGeneralCommonModule, BynGeneralSharedUtilsModule } from 'byn-general-style';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    BynGeneralCommonModule,
    BynGeneralSharedUtilsModule,
  ]
})
export class HomeModule { }
