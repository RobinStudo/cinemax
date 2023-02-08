import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FeedbackApiService {
    private config: any;

    constructor(private http: HttpClient) {
        this.config = environment.feedbackApi;
    }

    send(feedback: any) {
        const url = this.buildUrl('');
        return this.http.post<any>(url, feedback);
    }

    private buildUrl(endpoint: string): string {
        return this.config.baseUrl + endpoint;
    }
}
