export interface Feedback{
    id?: number;
    name: string;
    email: string;
    message: string;
}

export interface FeedbackApiConfig{
    baseUrl: string;
}
