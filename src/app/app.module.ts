import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MovieExploreComponent } from './pages/movie-explore/movie-explore.component';
import { MovieViewComponent } from './pages/movie-view/movie-view.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { MovieTopRatedComponent } from './pages/movie-top-rated/movie-top-rated.component';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { DisplayCrewByJobPipe } from "./pipes/display-crew-by-job.pipe";
import { ExpandableDirective } from './directives/expandable.directive';
import { MovieSearchComponent } from './pages/movie-search/movie-search.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        MovieExploreComponent,
        MovieViewComponent,
        NotFoundComponent,
        LoaderComponent,
        ErrorComponent,
        MovieTopRatedComponent,
        MovieGridComponent,
        MovieCardComponent,
        DisplayCrewByJobPipe,
        ExpandableDirective,
        MovieSearchComponent,
        FeedbackComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
