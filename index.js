import express from 'express';
import path, {dirname} from 'node:path';

import {fileURLToPath} from 'node:url'
import boardRouter from './src/routes/board.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// set the engine
app.set('views', path.join(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

// static and middleware
app.use(express.urlencoded({ extended: true }));
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));


// Router
app.use('/', boardRouter);


const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if(err) {
        throw err;
    }

    console.log(`Server on: ${port}`);
})