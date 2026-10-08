import express from 'express';
import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

const app = express();

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'musicas',
  user: 'postgres',
  password: '123456',
  host: 'localhost',
  port: 5432,
  clientMinMessages: 'notice',
});

sequelize.authenticate();

app.get('/', (req, res) => {
    res.send('Hello World avengers assemble!');
});

app.post('/outra', (req, res) => {
    res.send('Hello World na outra rota!');
});

app.listen(3000, 
    () => console.log("Rodando em <http://localhost:3000>")
);