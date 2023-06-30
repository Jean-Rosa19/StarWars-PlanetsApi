import { Model } from 'mongoose';
import PlanetService from '../../../services/PlanetServices';
import { bodyRequisition, expectedReturn, planetsArray } from '../../../mocks/mockPlanets';



const expectedID = "649ae0845617f93c697da3d3";

describe('testando funções de PlanetService', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('verifica se consegue adicionar um planeta', async () => {
        jest.spyOn(Model, 'create').mockResolvedValue([expectedReturn]);
        const service = new PlanetService();
        const result = await service.create(bodyRequisition)
        expect(result).toEqual(expectedReturn);
    });

    it('verifica o retorno de todos os planetas', async () => {
        jest.spyOn(Model, 'find').mockResolvedValue(planetsArray);
        const service = new PlanetService();
        const result = await service.getAllPlanets();
        expect(result).toEqual(planetsArray);
    });

    it('retorno do planeta por id', async () => {
        jest.spyOn(Model, 'findOne').mockResolvedValue(expectedReturn);
        const service = new PlanetService();
        const result = await service.getAPlanet(expectedID);
        expect(result).toEqual(expectedReturn);
    });
});
