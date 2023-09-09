import express, { Express } from "express";

import client from "./elasticsearch/client";

const app: Express = express();
const PORT: number = 3000;

client;

app.listen(PORT, () => console.log("App is running in http://localhost:" + PORT));
