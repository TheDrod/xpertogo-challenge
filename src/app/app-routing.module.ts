import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
// import { PageNotFoundComponent } from './pages/form-page/form-page.component';

const routes: Routes = [
  { path: 'movies', component: MoviesPageComponent },
  { path: 'form', component: FormPageComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
