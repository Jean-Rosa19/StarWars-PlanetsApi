"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Planet {
    constructor({ id, name, climate, terrain, relatedFilms, }) {
        this.id = id;
        this.name = name;
        this.climate = climate;
        this.terrain = terrain;
        this.relatedFilms = relatedFilms;
    }
}
exports.default = Planet;
