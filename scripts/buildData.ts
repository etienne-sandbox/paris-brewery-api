import cuid from 'cuid';
import fse from 'fs-extra';
import { BREWERIES } from '../data';
import path from 'path';
import { Beer, Brewery } from '../src/data/types';

const BEERS_FLAT: Array<Beer> = [];

const BREWERIES_FLAT: Array<Brewery> = BREWERIES.map(
  (brewery): Brewery => {
    const breweryId = cuid.slug();
    const beers = brewery.beers.map((beer): { name: string; id: string } => {
      const beerId = cuid.slug();
      BEERS_FLAT.push({
        id: beerId,
        name: beer.name,
        alcool: beer.alcool,
        url: beer.url,
        brewery: {
          id: breweryId,
          name: brewery.name
        }
      });
      return { id: beerId, name: beer.name };
    });
    return {
      id: breweryId,
      name: brewery.name,
      description: brewery.description,
      website: brewery.website,
      beers
    };
  }
);

fse.ensureDirSync(path.resolve(__dirname, '../src/data'));

const BreweryContent = `
import { Brewery } from './types';

export const BREWERIES: Array<Brewery> = ${JSON.stringify(BREWERIES_FLAT)};
`;

const BeerContent = `
import { Beer } from './types';

export const BEERS: Array<Beer> = ${JSON.stringify(BEERS_FLAT)};
`;

fse.writeFileSync(
  path.resolve(__dirname, '../src/data/Brewery.ts'),
  BreweryContent
);
fse.writeFileSync(path.resolve(__dirname, '../src/data/Beer.ts'), BeerContent);
