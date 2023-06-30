"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PlanetServices_1 = __importDefault(require("../../../services/PlanetServices"));
const mockPlanets_1 = require("../../../mocks/mockPlanets");
const expectedID = "649addd9e776ac426ca882f5";
describe('testando funções de PlanetService', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('verifica se consegue adicionar um planeta', async () => {
        jest.spyOn(mongoose_1.Model, 'create').mockResolvedValue([mockPlanets_1.expectedReturn]);
        const service = new PlanetServices_1.default();
        const result = await service.create(mockPlanets_1.bodyRequisition);
        expect(result).toEqual(mockPlanets_1.expectedReturn);
    });
    it('verifica o retorno de todos os planetas', async () => {
        jest.spyOn(mongoose_1.Model, 'find').mockResolvedValue(mockPlanets_1.planetsArray);
        const service = new PlanetServices_1.default();
        const result = await service.getAllPlanets();
        expect(result).toEqual(mockPlanets_1.planetsArray);
    });
    it('retorno do planeta por id', async () => {
        jest.spyOn(mongoose_1.Model, 'findOne').mockResolvedValue(mockPlanets_1.expectedReturn);
        const service = new PlanetServices_1.default();
        const result = await service.getAPlanet(expectedID);
        expect(result).toEqual(mockPlanets_1.expectedReturn);
    });
});
