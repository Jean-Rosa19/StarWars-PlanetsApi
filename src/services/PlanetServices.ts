import { IPlanet } from '../Interfaces/Iplanet';
import Planet from '../Domains/Planet';
import PlanetODM from '../model/PlanetsODM';
import IError from '../Interfaces/IError';
import axios from 'axios';

class PlanetService {
  private model: PlanetODM;

  constructor() {
    this.model = new PlanetODM()
  }

  private createPlanetDomain(planet: IPlanet): Planet | null {
    if (planet) {
      return new Planet(planet);
    }
    return null;
  }

  public async create(newPlanet: IPlanet): Promise<Planet | IError> {
    const planet = this.createPlanetDomain(newPlanet);
    if (!planet) {
      throw new Error('incomplete fields');
    }

    return new Planet(await this.model.create(planet));
  }

  public async getAllPlanets() {
    const planetOdm = new PlanetODM();
    const planets = await planetOdm.find();
    const planetArray = planets.map((planet) =>
      this.createPlanetDomain(planet));
    return planetArray
  }

  public async getAPlanet(planetId: string) {
    const planetOdm = new PlanetODM();
    const planet = await planetOdm.findOne(planetId);
    if (!planet) {
      return null;
    }
    const planetResult = this.createPlanetDomain(planet);
    return planetResult
  }

  public async deletePlanet(planetId: string): Promise<void> {
    try {
      console.log('Deleting planet with ID:', planetId);
      const planetOdm = new PlanetODM();
      const planet = await planetOdm.findOne(planetId);
      if (!planet) {
        throw new Error('Planet not found');
      }
      await planetOdm.delete(planetId);
    } catch (error) {
      throw new Error('Failed to delete planet');
    }
  }

  public async getPlanetRelatedFilms(planetName: string): Promise<number> {
    try {
      const swApiEndpoint = `https://swapi.dev/api/planets/?search=${planetName}`;
      const response = await axios.get(swApiEndpoint);
      const planetsResponse = response.data;
  
      if (planetsResponse.results.length > 0 && planetsResponse.results[0].films.length > 0) {
        return planetsResponse.results[0].films.length;
      } else {
        return 0;
      }
    } catch (error) {
      throw new Error('Failed to fetch related films');
    }
  }
}

export default PlanetService