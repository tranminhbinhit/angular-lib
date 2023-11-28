import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenModule } from './pages/authen/authen.module';

const routes: Routes = [
  {
    path: 'authen',
    loadChildren: () => AuthenModule 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
