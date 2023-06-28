import express from 'express'
import routes from './src/routes/PlanetRoutes'
import errorHandlerMiddleware from './src/Middlewares/ErrorMidlewares';

const app = express();
app.use(express.json());
app.use('/planets',routes);

app.use(errorHandlerMiddleware);

export default app