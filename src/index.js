import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import route from './routes/index.js';
import { connectDatabase } from './config/database/database.js';

import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

const port = process.env.PORT ?? 3002;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
   cors({
      origin: 'http://localhost:3000',
      credentials: true,
      optionsSuccessStatus: 200,
   })
);

connectDatabase();

// Route Init
route(app);

app.listen(port, () => {
   console.log(`Server started on port ${port}`);
});
