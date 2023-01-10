import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { MovieExploreComponent } from "./pages/movie-explore/movie-explore.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { MovieViewComponent } from "./pages/movie-view/movie-view.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'movie/explore', component: MovieExploreComponent },
    { path: 'movie/:id', component: MovieViewComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
