import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import {db} from './db';
import homeworkRouter from './routes/homework-router';

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Homework server running...');
});

app.use('/api', homeworkRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));