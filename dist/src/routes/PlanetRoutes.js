"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PlanetController_1 = __importDefault(require("../controllers/PlanetController"));
const routes = (0, express_1.Router)();
routes.post('/', (req, res, next) => new PlanetController_1.default(req, res, next).create());
routes.get('/', (req, res, next) => new PlanetController_1.default(req, res, next).getAllPlanets());
routes.get('/:id', (req, res, next) => new PlanetController_1.default(req, res, next).getAPlanet());
routes.delete('/:id', (req, res, next) => new PlanetController_1.default(req, res, next).deletePlanet());
routes.get('/:planetName/relatedFilms', (req, res, next) => new PlanetController_1.default(req, res, next).getRelatedFilms());
exports.default = routes;
