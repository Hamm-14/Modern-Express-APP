import "dotenv/config";
import express, { Application, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.get("/", (_, res: Response) => {
  res.send("Home path called...");
});

app.listen(PORT, () => {
  console.log(`Server is up an running on port: ${PORT}`);
});
