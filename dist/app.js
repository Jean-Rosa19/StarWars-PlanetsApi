"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PlanetRoutes_1 = __importDefault(require("./src/routes/PlanetRoutes"));
const ErrorMidlewares_1 = __importDefault(require("./src/Middlewares/ErrorMidlewares"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/planets', PlanetRoutes_1.default);
app.use(ErrorMidlewares_1.default);
exports.default = app;
