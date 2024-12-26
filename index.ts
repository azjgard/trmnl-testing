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
    icon_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ficons%2Frunning&psig=AOvVaw2krMed8P7SC5ocWLFxutAe&ust=1735332366084000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCv7f2mxooDFQAAAAAdAAAAABAE",
    days_this_week: [true, false, true, false, true, false, true],
  },
  {
    name: "Lifting Weights",
    icon_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ficons%2Frunning&psig=AOvVaw2krMed8P7SC5ocWLFxutAe&ust=1735332366084000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCv7f2mxooDFQAAAAAdAAAAABAE",
    days_this_week: [false, false, false, false, false, false, true],
  },
  {
    name: "Training BJJ",
    icon_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ficons%2Frunning&psig=AOvVaw2krMed8P7SC5ocWLFxutAe&ust=1735332366084000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCv7f2mxooDFQAAAAAdAAAAABAE",
    days_this_week: [true, true, true, true, false, false, false],
  },
];

app.get("/", (_req, res) => {
  res.status(200).json({ habits: MOCK_HABITS });
});

app.listen(4000, () => console.log("Server started"));
