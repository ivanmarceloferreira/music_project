import express, { json } from 'express';
import { sequelize, connectToDB } from './database/sequelize';
import musicRouter from './routes/music';
import userRouter from './routes/user';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

sequelize.authenticate();
connectToDB();

app.get('/', (req, res) => {
    res.send('Hello World avengers assemble!');
});

app.post('/outra', (req, res) => {
    res.send('Hello World na outra rota!');
});

app.use(musicRouter);
app.use(userRouter);

app.listen(3000, 
    () => console.log("Rodando em <http://localhost:3000>")
);