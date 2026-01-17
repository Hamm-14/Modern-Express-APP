import "reflect-metadata";
import "dotenv/config";
import express, { Application, Response } from "express";
import { AppDataSource } from "./data-source";

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.get("/", (_, res: Response) => {
  res.send("Home path called...");
});

try {
  await AppDataSource.initialize();
  console.log("Database connected successfully");
} catch (err) {
  console.log(`Error connecting database ${err}`);
}

app.listen(PORT, () => {
  console.log(`Server is up an running on port: ${PORT}`);
});
