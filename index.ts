import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import { router } from './src/routes';
import { createTeamsTable } from './src/utils';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
app.use(express.json());
app.use(router);


const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT || '5432', 10),
  });

createTeamsTable();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { app, pool};