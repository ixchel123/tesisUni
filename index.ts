import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
//configuracion del  archivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
//crar express APP , app.use pordria ser service.use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', ( req: Request,  res: Response) => {
  res.send('Hello World cris!');
});
app.listen(port, () => {
  console.log(`express server http://localhost:${port}`);
});
