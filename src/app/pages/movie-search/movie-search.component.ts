import { Component } from '@angular/core';
import { MovieApiService } from "../../services/movie-api.service";

@Component({
    selector: 'app-movie-search',
    templateUrl: './movie-search.component.html',
    styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
    query = '';
    movies?: any[];
    loading = false;
    firstQuerySent = false;

    constructor(private movieApiService: MovieApiService) {}

    search() {
        this.firstQuerySent = true;
        this.loading = true;
        this.movies = undefined;

        this.movieApiService.search(this.query).subscribe({
            next: data => {
                this.loading = false;
                this.movies = data.results;
            },
            error: () => this.loading = false,
        });
    }
}
