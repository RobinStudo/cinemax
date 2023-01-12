import { Component } from '@angular/core';
import { MovieApiService } from "../../services/movie-api.service";

@Component({
    selector: 'app-page-movie-top-rated',
    templateUrl: './movie-top-rated.component.html',
    styleUrls: ['./movie-top-rated.component.scss']
})
export class MovieTopRatedComponent {
    movies: Array<any> = [];
    error: boolean = false;

    constructor(private movieApiService: MovieApiService) {
        this.loadData();
    }

    loadData(){
        this.movieApiService.topRated().subscribe({
            next: data => this.movies = data.results,
            error: () => this.error = true,
        });
    }
}
