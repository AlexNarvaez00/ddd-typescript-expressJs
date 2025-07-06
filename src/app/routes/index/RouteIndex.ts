import { Router } from "express";

const routeIndex = Router();

routeIndex.get("/", (req, res) => {
  res.send("Welcome to the DDD TypeScript ExpressJS application!");
});

routeIndex.get("/health", (req, res) => {
  res.status(200).send("OK");
});

export { routeIndex };
