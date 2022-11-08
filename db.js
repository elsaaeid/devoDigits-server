import mysql from "mysql";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_PORT
} from "./config.js";

export const db = mysql.createConnection({
  host: DB_HOST,
  database: DB_NAME,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD
})