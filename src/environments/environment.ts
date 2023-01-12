import { secrets } from "./secrets";

export const environment = {
    movieApi: {
        baseUrl: 'https://api.themoviedb.org/3',
        apiKey: secrets.movieApiKey,
    },
};
