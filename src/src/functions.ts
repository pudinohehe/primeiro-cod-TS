import readline from "readline-sync";
import { Movie } from "./types";
import { myCatalog } from "./database";
import fs from "fs";

export function addNewMovie() {
  const newTitle = readline.question("What is the name of the movie? ");
  const alreadyWatched: boolean = readline.keyInYNStrict(
    "Did you watch the movie? ",
  );
  const alreadyExist = myCatalog.some(
    (movie) => movie.title.toLowerCase() === newTitle.toLowerCase(),
  );
  if (alreadyExist) {
    console.log("Movie is already on the list");
    return;
  }
  const newMovie: Movie = {
    title: newTitle,
    watched: alreadyWatched,
  };

  if (alreadyWatched) {
    const rate = Number(readline.question("what's the movie rate?"));
    newMovie.rating = rate;
  }
  myCatalog.push(newMovie);
  saveonJson();
}

export function markAsWatched(movieTitle: string) {
  const rightMovie = myCatalog.find(
    (movie) => movie.title.toLowerCase() === movieTitle.toLowerCase(),
  );
  if (rightMovie) {
    let rightMovieRate = Number(readline.question("what's the movie rate?"));
    rightMovie.watched = true;
    rightMovie.rating = rightMovieRate;
    console.log(`Movie now is marked as seen`);
    saveonJson();
  } else {
    console.log(`Movie is not on the list`);
  }
}

export function saveonJson() {
  const dataSave = JSON.stringify(myCatalog, null, 2);
  fs.writeFileSync("./data/database.json", dataSave);
}
