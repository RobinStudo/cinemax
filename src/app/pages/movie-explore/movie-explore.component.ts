import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-page-movie-explore',
    templateUrl: './movie-explore.component.html',
    styleUrls: ['./movie-explore.component.scss']
})
export class MovieExploreComponent {
    constructor(private http: HttpClient) {
        const url = 'https://api.themoviedb.org/3/discover/movie?api_key=';
        this.http.get(url).subscribe(data => console.log(data));
    }
}
