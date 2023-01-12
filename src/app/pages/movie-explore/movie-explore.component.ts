import { Component } from '@angular/core';
import { MovieApiService } from "../../services/movie-api.service";

@Component({
    selector: 'app-page-movie-explore',
    templateUrl: './movie-explore.component.html',
    styleUrls: ['./movie-explore.component.scss']
})
export class MovieExploreComponent {
    movies: Array<any> = [];
    currentPage: number = 0;
    error: boolean = false;
    loadDataLocked: boolean = false;

    constructor(private movieApiService: MovieApiService) {
        this.loadData();
    }

    loadData(){
        this.loadDataLocked = true;
        this.currentPage++;
        this.movieApiService.explore(this.currentPage).subscribe({
            next: data => {
                this.movies = this.movies.concat(data.results);
                this.loadDataLocked = false;
            },
            error: () => this.error = true,
        });
    }
}
