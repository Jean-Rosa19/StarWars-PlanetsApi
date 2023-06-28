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
}
exports.default = PlanetController;
