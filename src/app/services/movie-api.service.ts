import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MovieApiService {
    private config: any;

    constructor(private http: HttpClient) {
        this.config = environment.movieApi;
    }

    explore(): Observable<any> {
        const url = this.buildUrl('/discover/movie');
        const options = this.buildOptions();

        return this.http.get<any>(url, options);
    }

    topRated(): Observable<any> {
        const url = this.buildUrl('/movie/top_rated');
        const options = this.buildOptions();

        return this.http.get<any>(url, options);
    }

    findOne(id: number): Observable<any> {
        const url = this.buildUrl('/movie/' + id);
        const options = this.buildOptions();
        options.params.append_to_response = 'credits';

        return this.http.get<any>(url, options);
    }

    private buildUrl(endpoint: string): string {
        return this.config.baseUrl + endpoint;
    }

    private buildOptions(): any {
        return {
            params: {
                language: 'fr-FR',
                api_key: this.config.apiKey,
            }
        };
    }
}
