import { Component } from '@angular/core';
import { MovieApiService } from "../../services/movie-api.service";

@Component({
    selector: 'app-movie-search',
    templateUrl: './movie-search.component.html',
    styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
    query = '';
    movies: any[] = [];

    // TODO - Gestion des erreurs, resultat vide, affichage d'un loader

    constructor(private movieApiService: MovieApiService) {}

    search() {
        this.movieApiService.search(this.query).subscribe({
            next: data => this.movies = data.results,
        });
    }
}
