import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenModule } from './pages/authen/authen.module';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: 'authen',
    loadChildren: () =>
      import('./pages/authen/authen.module').then((m) => m.AuthenModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
