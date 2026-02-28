import dotenv from "dotenv";
import path from "path";
import readline from "readline-sync";
import { Movie } from "./types";
import fs from "fs";
import { saveonJson, addNewMovie, markAsWatched } from "./functions";
import { myCatalog } from "./database";


dotenv.config({ path: path.resolve(__dirname, "../../.env") });
readline.keyInPause();

console.log("Minha chave é: ", process.env.TMDB_API_KEY);

let exit = false;

while (!exit) {
  console.clear();
  const menu = Number(
    readline.question(
      "Choose between this options:\n1. Add Movie \n2. Mark as Watched \n3. Show movies to watch \n4. Show the watched catalog \n5. Exit \n",
    ),
  );
  switch (menu) {
    case 1:
      addNewMovie();
      break;
    case 2:
      const userAnswer = readline.question("Wich film did you watch?");
      markAsWatched(userAnswer);
      break;
    case 3:
      const toSee = myCatalog.filter((movie) => {
        return movie.watched === false;
      });

      console.log(`You still have ${toSee.length} movies to watch.`);

      toSee.forEach((movie) => {
        console.log(`You may watch ${movie.title} `);
      });
      readline.keyInPause();
      break;
    case 4:
      console.log(`Movies watched`);
      console.log(myCatalog);
      readline.keyInPause();
      break;
    case 5:
      exit = true;
      break;
    default:
      console.log("Please choose a valid option!");
  }
}
