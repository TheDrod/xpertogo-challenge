import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';

import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { Title } from '@angular/platform-browser';
// import { PageNotFoundComponent } from './pages/form-page/form-page.component';

const routes: Routes = [
  { path: 'movies', component: MoviesPageComponent, title: 'Movies' },
  { path: 'form', component: FormPageComponent, title: 'Form' },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
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
