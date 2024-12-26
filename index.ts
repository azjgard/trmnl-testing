import express from "express";

const app = express();

type Habit = {
  name: string;
  icon_url: string;
  days_this_week: [
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean
  ];
};

const MOCK_HABITS: Habit[] = [
  {
    name: "Running",
    icon_url: "https://www.iconsdb.com/icons/preview/black/running-xxl.png",
    days_this_week: [true, false, true, false, true, false, true],
  },
  {
    name: "Weights",
    icon_url: "https://www.iconsdb.com/icons/preview/black/running-xxl.png",
    days_this_week: [false, false, false, false, false, false, true],
  },
  {
    name: "BJJ",
    icon_url: "https://www.iconsdb.com/icons/preview/black/running-xxl.png",
    days_this_week: [true, true, true, true, false, false, false],
  },
];

app.get("/", (_req, res) => {
  res.status(200).json({ habits: MOCK_HABITS });
});

app.listen(4000, () => console.log("Server started"));
