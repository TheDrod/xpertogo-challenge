import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { FallbackPageComponent } from './components/fallback-page/fallback-page.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'movies',
    title: 'Movies',
    loadChildren: () =>
      import('./components/movies-page/movies.module').then((m) => m.MoviesPageModule)
  },
  {
    path: 'movies/:id',
    title: 'Movie Page',
    component: MovieDetailsComponent
  },
  {
    path: 'form',
    title: 'Form',
    loadChildren: () =>
      import('./components/form-page/form-page.module').then((m) => m.FormPageModule)
  },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: FallbackPageComponent },
];

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);

    if (title === undefined) {
      return;
    }

    this.title.setTitle(`Xpertgo Challenge | ${title}`);
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ]
})
export class AppRoutingModule { }
