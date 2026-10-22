import express from 'express';
import { sequelize, connectToDB } from './database/sequelize';
import router from './routes/music';

const app = express();

sequelize.authenticate();
connectToDB();

app.get('/', (req, res) => {
    res.send('Hello World avengers assemble!');
});

app.post('/outra', (req, res) => {
    res.send('Hello World na outra rota!');
});

app.use(router);

app.listen(3000, 
    () => console.log("Rodando em <http://localhost:3000>")
);