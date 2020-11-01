import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// Backend funcionará na porta 3333 do localhost
app.listen(3333);