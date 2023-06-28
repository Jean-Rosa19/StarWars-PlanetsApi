"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = __importDefault(require("../Domains/Planet"));
const PlanetsODM_1 = __importDefault(require("../model/PlanetsODM"));
const axios_1 = __importDefault(require("axios"));
class PlanetService {
    constructor() {
        this.model = new PlanetsODM_1.default();
    }
    createPlanetDomain(planet) {
        if (planet) {
            return new Planet_1.default(planet);
        }
        return null;
    }
    async create(newPlanet) {
        const planet = this.createPlanetDomain(newPlanet);
        if (!planet) {
            throw new Error('incomplete fields');
        }
        return new Planet_1.default(await this.model.create(planet));
    }
    async getAllPlanets() {
        const planetOdm = new PlanetsODM_1.default();
        const planets = await planetOdm.find();
        const planetArray = planets.map((planet) => this.createPlanetDomain(planet));
        return planetArray;
    }
    async getAPlanet(planetId) {
        const planetOdm = new PlanetsODM_1.default();
        const planet = await planetOdm.findOne(planetId);
        if (!planet) {
            return null;
        }
        const planetResult = this.createPlanetDomain(planet);
        return planetResult;
    }
    async deletePlanet(planetId) {
        try {
            console.log('Deleting planet with ID:', planetId);
            const planetOdm = new PlanetsODM_1.default();
            const planet = await planetOdm.findOne(planetId);
            if (!planet) {
                throw new Error('Planet not found');
            }
            await planetOdm.delete(planetId);
        }
        catch (error) {
            throw new Error('Failed to delete planet');
        }
    }
    async getPlanetRelatedFilms(planetName) {
        try {
            const swApiEndpoint = `https://swapi.dev/api/planets/?search=${planetName}`;
            const response = await axios_1.default.get(swApiEndpoint);
            const planetsResponse = response.data;
            if (planetsResponse.results.length > 0 && planetsResponse.results[0].films.length > 0) {
                return planetsResponse.results[0].films.length;
            }
            else {
                return 0;
            }
        }
        catch (error) {
            throw new Error('Failed to fetch related films');
        }
    }
}
exports.default = PlanetService;
