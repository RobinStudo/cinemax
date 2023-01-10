import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-page-movie-view',
    templateUrl: './movie-view.component.html',
    styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent{
    movie: any;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
        const id = this.route.snapshot.params['id'];
        const url = 'https://api.themoviedb.org/3/movie/' + id + '?&language=fr-FR&append_to_response=credits&api_key=';
        this.http.get<any>(url).subscribe(data => this.movie = data);
    }
}
