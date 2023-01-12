import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from "../../services/movie-api.service";

@Component({
    selector: 'app-page-movie-view',
    templateUrl: './movie-view.component.html',
    styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent{
    movie: any;
    error: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private movieApiService: MovieApiService
    ) {
        this.loadData();
    }

    loadData(){
        const id = this.route.snapshot.params['id'];
        this.movieApiService.findOne(id).subscribe({
            next: data => this.movie = data,
            error: err => {
                if (err.status === 404) {
                    this.router.navigate(['/error/404']);
                } else {
                    this.error = true;
                }
            },
        });
    }
}
