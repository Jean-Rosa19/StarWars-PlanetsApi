import { NextFunction, Request, Response } from 'express';
import { IPlanet } from '../Interfaces/Iplanet';
import PlanetService from '../services/PlanetServices';

class PlanetController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: PlanetService

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new PlanetService();
  }

  public async create(){
    const planet: IPlanet = {
      name: this.req.body.name,
      climate: this.req.body.climate,
      terrain: this.req.body.terrain,
      relatedFilms: this.req.body.relatedFilms,
    };

    try {
      const result = await this.service.create(planet)

      return  this.res.status(201).json(result);
    } catch(error) {
      this.next(error)
    }
  }

  public async getAllPlanets(){
    const planets = await this.service.getAllPlanets();
    return this.res.status(200).json(planets)
  }

  public async getAPlanet() {
    const idPlanet = this.req.params.id;
    try {
      const planet = await this.service.getAPlanet(idPlanet);
      if (!planet) return this.res.status(404).json({ message: 'Planet not found' });
      return this.res.status(200).json(planet);
    } catch (error) {
      this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async deletePlanet() {
    const idPlanet = this.req.params.id;
    try {
      await this.service.deletePlanet(idPlanet);
      return this.res.status(204).send();
    } catch (error) {
      return this.res.status(404).json({ message: 'Planet not found' });
    }
  }

  public async getRelatedFilms() {
    const planetName: string = this.req.params.planetName;

    try {
      const relatedFilmsNumber = await this.service.getPlanetRelatedFilms(planetName);
      return this.res.status(200).json({ relatedFilmsNumber });
    } catch (error) {
      return this.res.status(500).json({ message: 'Failed to fetch related films' });
    }
  }
}

export default PlanetController