import {Movie, myCatalog} from './database'



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