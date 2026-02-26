import readline from "readline-sync";
import { Movie } from "./types";
import fs from "fs";

const rawdata = fs.readFileSync("./database.json", "utf-8");
const myCatalog: Movie[] = JSON.parse(rawdata);


function markAsWatched(movieTitle: string) {
  const rightMovie = myCatalog.find(
    (movie) => movie.title.toLowerCase() === movieTitle.toLowerCase(),
  );
  if (rightMovie) {
    let rightMovieRate = Number(readline.question("what's the movie rate?"));
    rightMovie.watched = true;
    rightMovie.rating = rightMovieRate;
    console.log(`Movie now is maked as seen`);
    const dataSave = JSON.stringify(myCatalog, null, 2);
    fs.writeFileSync("./database.json", dataSave);
  } else {
    console.log(`Movie is not on the list`);
  }
}

function addNewMovie() {
    const newTitle = readline.question("What is the name of the movie? ");
    const alreadyWatched: boolean = readline.keyInYNStrict("Did you watch the movie? ");

    const newMovie: Movie = {
        title: newTitle,
        watched: alreadyWatched
    };
    
    if (alreadyWatched){
         const rate = Number(readline.question("what's the movie rate?"))
         newMovie.rating = rate;
    }

    myCatalog.push(newMovie);

    const dataSave = JSON.stringify(myCatalog, null, 2);
    fs.writeFileSync('./database.json', dataSave);

}

const userAnswer = readline.question("Wich film did you watch?");

markAsWatched(userAnswer);

console.log(`Testing after update`);
console.log(myCatalog);

const toSee = myCatalog.filter((movie) => {
  return movie.watched === false;
});

console.log(`You still have ${toSee.length} movies to watch.`);

toSee.forEach((movie) => {
  console.log(`You may watch ${movie.title} `);
});
