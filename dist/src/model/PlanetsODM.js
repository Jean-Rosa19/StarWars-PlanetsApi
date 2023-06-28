"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class PlanetODM {
    constructor() {
        this.schemma = new mongoose_1.Schema({
            name: { type: String, required: true },
            climate: { type: String, required: true },
            terrain: { type: String, required: true },
            relatedFilms: { type: Number },
        });
        this.model = mongoose_1.models.planets || (0, mongoose_1.model)('planets', this.schemma);
    }
    async create(planet) {
        return this.model.create({ ...planet });
    }
    async find() {
        return this.model.find();
    }
    async findOne(id) {
        const planet = this.model.findById(id);
        return planet;
    }
    async delete(id) {
        await this.model.deleteOne({ _id: id });
    }
}
exports.default = PlanetODM;
