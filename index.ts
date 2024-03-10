import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import { router } from './src/routes';
import { createTeamsTable } from './src/utils';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
app.use(express.json());
app.use(router);
const PG_URL = "postgres://default:17LolrYQGieb@ep-restless-hat-a43p2mw7.us-east-1.aws.neon.tech:5432/verceldb"

const pool = new Pool({
  connectionString: PG_URL + "?sslmode=require",
  });

createTeamsTable();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { app, pool};