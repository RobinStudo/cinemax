import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { MovieExploreComponent } from "./pages/movie-explore/movie-explore.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { MovieViewComponent } from "./pages/movie-view/movie-view.component";
import { MovieTopRatedComponent } from "./pages/movie-top-rated/movie-top-rated.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'movie',
        children: [
            { path: 'explore', component: MovieExploreComponent },
            { path: 'top-rated', component: MovieTopRatedComponent },
            { path: ':id', component: MovieViewComponent },
        ],
    },
    { path: 'error/404', component: NotFoundComponent },
    { path: '**', redirectTo: '/error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
