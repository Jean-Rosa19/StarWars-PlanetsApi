"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon_1 = __importDefault(require("sinon"));
const chai_1 = require("chai");
const mongoose_1 = require("mongoose");
const mockPlanets_1 = require("../../../mocks/mockPlanets");
const PlanetServices_1 = __importDefault(require("../../../services/PlanetServices"));
const expectedID = "649addd9e776ac426ca882f5";
describe('testando funções de servicePlanet', function () {
    afterEach(async function () {
        sinon_1.default.restore();
    });
    it('verifica se consegue adicionar um planeta', async function () {
        sinon_1.default.stub(mongoose_1.Model, 'create').resolves([mockPlanets_1.expectedReturn]);
        const service = new PlanetServices_1.default();
        const result = await service.create(mockPlanets_1.bodyRequisition);
        (0, chai_1.expect)(result).to.be.deep.equal(mockPlanets_1.expectedReturn);
    });
    it('verifica o retorno de todos os planetas', async function () {
        sinon_1.default.stub(mongoose_1.Model, 'find').resolves(mockPlanets_1.planetsArray);
        const service = new PlanetServices_1.default();
        const result = await service.getAllPlanets();
        (0, chai_1.expect)(result).to.be.deep.equal(mockPlanets_1.planetsArray);
    });
    it('retorno do planeta por id', async function () {
        sinon_1.default.stub(mongoose_1.Model, 'findOne').resolves(mockPlanets_1.expectedReturn);
        const service = new PlanetServices_1.default();
        const result = await service.getAPlanet(expectedID);
        (0, chai_1.expect)(result).to.be.deep.equal(mockPlanets_1.expectedReturn);
    });
});
