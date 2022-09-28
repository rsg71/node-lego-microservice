import express, { Express } from 'express';
const app: Express = express();
const port = process.env.PORT || 3000;
import dotenv from 'dotenv';
dotenv.config();



import routes from './api/routes';
routes(app);

app.listen(port, function () {
   console.log('Server started on port: ' + port);
});