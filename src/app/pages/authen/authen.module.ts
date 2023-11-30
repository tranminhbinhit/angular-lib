import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BynFormControlModule } from '@byn/form-control';
import { RouterModule, Routes } from '@angular/router';
import { GeneralStyleModule } from '@byn/general-style'; 
import { BynGeneralCommonModule, BynGeneralSharedUtilsModule } from 'byn-general-style';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BynFormControlModule,
    GeneralStyleModule,
    BynGeneralCommonModule,
    BynGeneralSharedUtilsModule,
  ]
})
export class AuthenModule { }
