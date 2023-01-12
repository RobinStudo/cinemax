import { Component } from '@angular/core';
import { MovieApiService } from "../../services/movie-api.service";

@Component({
    selector: 'app-page-movie-explore',
    templateUrl: './movie-explore.component.html',
    styleUrls: ['./movie-explore.component.scss']
})
export class MovieExploreComponent {
    movies: Array<any> = [];

    // TODO - Gérer les erreurs

    constructor(private movieApiService: MovieApiService) {
        this.loadData();
    }

    loadData(){
        this.movieApiService.explore().subscribe(data => this.movies = data.results);
    }
}
