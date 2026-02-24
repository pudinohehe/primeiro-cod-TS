interface Movie {

    title: string;

    watched: boolean;

    rating?: number;

}

const myCatalog: Movie[] = [

  { title: "Truman's show", watched: true, rating: 8},

  {title: "legally blond", watched: true, rating: 4.5},

  {title: "a morte te da parabens", watched: false},

  {title: "nada de novo no front", watched: false},

  {title: "The usual suspects", watched: false}

];



function markAsWatched(movieTitle: string) {
    const rightMovie = myCatalog.find(movie => movie.title === movieTitle)
    
    if (rightMovie) {
        rightMovie.watched = true;
        rightMovie.rating = 8.3
        console.log(`Movie now is maked as seen`)
    }
    else {
        console.log(`Movie is not on the list`)
    }

}


console.log(`Testing before update`)
console.log(myCatalog);


markAsWatched("os suspeitos");


console.log(`Testing after update`)
console.log(myCatalog);

const toSee = myCatalog.filter((movie) => {

    return movie.watched === false;
}

)


console.log(`You still have ${toSee.length} movies to watch.`)

toSee.forEach((movie) => {

     console.log(`You may watch ${movie.title} `)



}

)