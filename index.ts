import express from "express";

const app = express();


const NAMES = [
  "Stocktin",
  "Kade",
  "Jordin",
  "Troy",
]

function getRandomName() {
  return NAMES[Math.floor(Math.random() * NAMES.length)];
}


app.get("/", (req, res) => {
  res.status(200).send(getRandomName());
});

app.listen(4000, () => console.log("Server started"));
