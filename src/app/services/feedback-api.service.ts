import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Feedback, FeedbackApiConfig } from "../interfaces/feedback";

@Injectable({
    providedIn: 'root'
})
export class FeedbackApiService {
    private config: FeedbackApiConfig;

    constructor(private http: HttpClient) {
        this.config = environment.feedbackApi;
    }

    send(feedback: Feedback) {
        const url = this.buildUrl('');
        return this.http.post<Feedback>(url, feedback);
    }

    private buildUrl(endpoint: string): string {
        return this.config.baseUrl + endpoint;
    }
}
