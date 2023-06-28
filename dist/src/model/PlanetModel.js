"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const planetSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    climate: { type: String, required: true },
    terrain: { type: String, required: true },
    relatedFilms: { type: Number, required: true },
});
exports.default = (0, mongoose_1.model)('Planet', planetSchema);
