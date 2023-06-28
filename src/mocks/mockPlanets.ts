import Planet from "../Domains/Planet";
import { IPlanet } from "../Interfaces/Iplanet";

export const bodyRequisition: IPlanet = {
    name: "Tatooine",
    climate: "Arid",
    terrain: "Desert",
    relatedFilms: 5,
}

export const expectedReturn: Planet = new Planet({
    id: "649addd9e776ac426ca882f5",
    name: "Tatooine",
    climate: "Arid",
    terrain: "Desert",
    relatedFilms: 5
})

export const planetsArray: IPlanet[] =[
    {
        id: "649addd9e776ac426ca882f5",
        name: "Tatooine",
        climate: "Arid",
        terrain: "Desert",
        relatedFilms: 5
      },
      {
        id: "649ae0845617f93c697da3d3",
        name: "Naboo",
        climate: "temperate",
        terrain: "grassy hills, swamps, forests, mountains",
        relatedFilms: 0
      },
      {
        id: "649c3a1774fe2dc09a9a5416",
        name: "Hoth",
        climate: "Frozen",
        terrain: "Tundra",
        relatedFilms: 0
      },
      {
        id: "649c43187c479927d1167fb1",
        name: "Endor",
        climate: "Temperate",
        terrain: "Forest",
        relatedFilms: 0
      }
]