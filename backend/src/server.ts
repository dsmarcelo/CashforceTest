import express from 'express';
import db from './db';
import cors from 'cors';
import { router } from './routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(router);
app.use(express.json());

app.listen(port, async () => {
  await db.sync();
  console.log(`Servidor em: http://localhost:${port}`);
});
