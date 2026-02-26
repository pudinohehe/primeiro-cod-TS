import { Movie } from "./types";
import fs from "fs";


export let myCatalog: Movie[] = [];

try{
const rawdata = fs.readFileSync("./data/database.json", "utf-8");
myCatalog = JSON.parse(rawdata);
} catch{
  myCatalog = [];
  console.log("No database found. Starting a new one!")
}