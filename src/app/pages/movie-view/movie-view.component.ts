import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from "../../services/movie-api.service";

@Component({
    selector: 'app-page-movie-view',
    templateUrl: './movie-view.component.html',
    styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent{
    movie: any;

    // TODO - Gérer les erreurs

    constructor(private route: ActivatedRoute, private movieApiService: MovieApiService) {
        const id = this.route.snapshot.params['id'];
        this.movieApiService.findOne(id).subscribe(data => this.movie = data);
    }
}
