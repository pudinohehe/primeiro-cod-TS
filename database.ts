

export interface Movie {
    title: string;
    watched: boolean;
    rating?: number;

}

export const myCatalog: Movie[] = [
  {title: "Truman's show", watched: true, rating: 8},
  {title: "legally blond", watched: true, rating: 4.5},
  {title: "a morte te da parabens", watched: false},
  {title: "nada de novo no front", watched: false},
  {title: "The usual suspects", watched: false}
];

