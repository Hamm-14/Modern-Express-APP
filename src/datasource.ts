import dotenv from "dotenv";
dotenv.config();

import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [__dirname + "/db/migrations/**/*{.js,.ts}"],
  migrationsRun: true,
  subscribers: [],
});
