import express from "express";

const app = express();

const NAMES = ["Stocktin", "Kade", "Jordin", "Troy"];

function getRandomName() {
  return NAMES[Math.floor(Math.random() * NAMES.length)];
}

app.get("/", (_req, res) => {
  res.status(200).json({
    people: [
      {
        name: "Jordin",
        age: 29,
      },
      {
        name: "Lanina",
        age: 29,
      },
      {
        name: "Sawyer",
        age: 7,
      },
      {
        name: "Scarlett",
        age: 4,
      },
    ],
  });
});

app.listen(4000, () => console.log("Server started"));
