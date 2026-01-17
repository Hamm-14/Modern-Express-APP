import "reflect-metadata";
import "dotenv/config";
import express, { Application } from "express";
import { AppDataSource } from "./datasource";
import rootRouter from "./routes";

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api", rootRouter);

try {
  await AppDataSource.initialize();
  console.log("Database connected successfully");
} catch (err) {
  console.log(`Error connecting database ${err}`);
}

app.listen(PORT, () => {
  console.log(`Server is up an running on port: ${PORT}`);
});
