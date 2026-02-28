export interface Movie {
    title: string;
    watched: boolean;
    rating?: number;

}


export interface TMDBMovie {
    title: string;
    vote_average: number;
    runtime: number;
    overview: string;
    genres: { name: string} [];
}

