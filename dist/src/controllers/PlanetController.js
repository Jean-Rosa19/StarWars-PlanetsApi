"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlanetServices_1 = __importDefault(require("../services/PlanetServices"));
class PlanetController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.service = new PlanetServices_1.default();
    }
    async create() {
        const planet = {
            name: this.req.body.name,
            climate: this.req.body.climate,
            terrain: this.req.body.terrain,
            relatedFilms: this.req.body.relatedFilms,
        };
        try {
            const result = await this.service.create(planet);
            return this.res.status(201).json(result);
        }
        catch (error) {
            this.next(error);
        }
    }
    async getAllPlanets() {
        const planets = await this.service.getAllPlanets();
        return this.res.status(200).json(planets);
    }
    async getAPlanet() {
        const idPlanet = this.req.params.id;
        try {
            const planet = await this.service.getAPlanet(idPlanet);
            if (!planet)
                return this.res.status(404).json({ message: 'Planet not found' });
            return this.res.status(200).json(planet);
        }
        catch (error) {
            this.res.status(422).json({ message: 'Invalid mongo id' });
        }
    }
    async deletePlanet() {
        const idPlanet = this.req.params.id;
        try {
            await this.service.deletePlanet(idPlanet);
            return this.res.status(204).send();
        }
        catch (error) {
            return this.res.status(404).json({ message: 'Planet not found' });
        }
    }
    async getRelatedFilms() {
        const planetName = this.req.params.planetName;
        try {
            const relatedFilmsNumber = await this.service.getPlanetRelatedFilms(planetName);
            return this.res.status(200).json({ relatedFilmsNumber });
        }
        catch (error) {
            return this.res.status(500).json({ message: 'Failed to fetch related films' });
        }
    }
}
exports.default = PlanetController;
