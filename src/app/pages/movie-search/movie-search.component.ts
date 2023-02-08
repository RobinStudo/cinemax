import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MovieApiService } from "../../services/movie-api.service";

@Component({
    selector: 'app-page-movie-search',
    templateUrl: './movie-search.component.html',
    styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
    query = '';
    includeAdultContent = false;
    movies?: any[];
    loading = false;
    firstQuerySent = false;
    @ViewChild('searchForm') searchForm!: NgForm;

    constructor(private movieApiService: MovieApiService) {}

    search() {
        if (this.searchForm.invalid) {
            return;
        }

        this.firstQuerySent = true;
        this.loading = true;
        this.movies = undefined;

        this.movieApiService.search(this.query, this.includeAdultContent).subscribe({
            next: data => {
                this.loading = false;
                this.movies = data.results;
            },
            error: () => this.loading = false,
        });
    }
}
