import { Model, Schema, model, models} from 'mongoose';
import { IPlanet } from '../Interfaces/Iplanet';
import Planet from '../Domains/Planet';

class PlanetODM {
  private schemma: Schema;
  private model: Model<IPlanet>

  constructor(){
    this.schemma = new Schema<IPlanet>({
      name: { type: String, required: true },
      climate: { type: String, required: true },
      terrain: { type: String, required: true },
      relatedFilms: { type: Number },
    });
    this.model = models.planets || model('planets', this.schemma);
  }

  public async create(planet: Planet): Promise <IPlanet> {
    return this.model.create({...planet})
  }


  public async find(): Promise<IPlanet[]> {
    return this.model.find();
  }

  public async findOne(id: string) {
    const planet = this.model.findById(id);
    return planet;
  }

  public async delete(id: string): Promise<void> {
    await this.model.deleteOne({ _id: id });
  }

}

export default PlanetODM