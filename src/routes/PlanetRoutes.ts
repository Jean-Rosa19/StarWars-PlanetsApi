import { Router } from 'express';
import PlanetController from '../controllers/PlanetController';

const routes = Router();

routes.post(
    '/',
    (req, res, next) => new PlanetController(req, res, next).create(),
);

routes.get(
    '/',
    (req, res, next) => new PlanetController(req, res, next).getAllPlanets(),
);

routes.get(
    '/:id',
    (req, res, next) => new PlanetController(req, res, next).getAPlanet(),
  );

  routes.delete(
    '/:id',
    (req, res, next) => new PlanetController(req, res, next).deletePlanet()
  );

  routes.get(
    '/:planetName/relatedFilms',
    (req, res, next) => new PlanetController(req, res, next).getRelatedFilms(),
  );
  
export default routes
