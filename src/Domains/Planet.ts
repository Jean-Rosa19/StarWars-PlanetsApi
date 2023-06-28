import { IPlanet } from "../Interfaces/Iplanet";


class Planet {
  id?: string | undefined
  name: string;
  climate: string;
  terrain: string;
  relatedFilms: number;

  constructor({
    id,
    name,
    climate,
    terrain,
    relatedFilms,
  }: IPlanet,
  ) {
    this.id = id;
    this.name = name;
    this.climate = climate;
    this.terrain = terrain;
    this.relatedFilms = relatedFilms;
  }
}

export default Planet;