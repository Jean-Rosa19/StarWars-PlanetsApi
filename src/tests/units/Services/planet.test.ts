import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';

import { bodyRequisition, expectedReturn, planetsArray } from '../../../mocks/mockPlanets';

import PlanetService from '../../../services/PlanetServices';

const expectedID = "649addd9e776ac426ca882f5"

describe('testando funções de servicePlanet', function () {
    afterEach(async function () {
        sinon.restore();
    });
    it('verifica se consegue adicionar um planeta', async function () {
        sinon.stub(Model, 'create').resolves([expectedReturn]);

        const service = new PlanetService();
        const result = await service.create(bodyRequisition);
        expect(result).to.be.deep.equal(expectedReturn);
    });

    it('verifica o retorno de todos os planetas', async function () {
        sinon.stub(Model, 'find').resolves(planetsArray);
        const service = new PlanetService();
        const result = await service.getAllPlanets();
        expect(result).to.be.deep.equal(planetsArray);
    });

    it('retorno do planeta por id', async function () {
        sinon.stub(Model, 'findOne').resolves(expectedReturn);
        const service = new PlanetService();
        const result = await service.getAPlanet(expectedID);
        expect(result).to.be.deep.equal(expectedReturn);
    });
});