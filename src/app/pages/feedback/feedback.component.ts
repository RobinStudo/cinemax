import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FeedbackApiService } from "../../services/feedback-api.service";

@Component({
    selector: 'app-page-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
    feedbackSent = false;
    feedbackForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });

    constructor(private feedbackApi: FeedbackApiService) {}

    sendFeedback() {
        if (this.feedbackForm.invalid) {
            return;
        }

        this.feedbackApi.send(this.feedbackForm.value).subscribe({
            next: () => this.feedbackSent = true,
        });
    }
}
