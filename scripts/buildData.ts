import cuid from 'cuid';
import fse from 'fs-extra';
import { BREWERIES } from '../data';
import path from 'path';

interface Brewery {
  id: string;
  name: string;
  website: string;
  beers: Array<string>;
}

interface Beer {
  id: string;
  name: string;
  alcool: number | null;
  url: string;
  breweryId: string;
}

const BEERS_FLAT: Array<Beer> = [];

const BREWERIES_FLAT: Array<Brewery> = BREWERIES.map(brewery => {
  const breweryId = cuid.slug();
  const beerIds = brewery.beers.map(beer => {
    const beerId = cuid.slug();
    BEERS_FLAT.push({
      id: beerId,
      name: beer.name,
      alcool: beer.alcool,
      url: beer.url,
      breweryId
    });
    return beerId;
  });
  return {
    id: breweryId,
    name: brewery.name,
    website: brewery.website,
    beers: beerIds
  };
});

fse.ensureDirSync(path.resolve(__dirname, '../src/data'));

const BreweryContent = `
interface Brewery {
  id: string;
  name: string;
  website: string;
  beers: Array<string>;
}

export const BREWERIES: Array<Brewery> = ${JSON.stringify(BREWERIES_FLAT)};
`;

const BeerContent = `
interface Beer {
  id: string;
  name: string;
  alcool: number | null;
  url: string;
  breweryId: string;
}

export const BEERS: Array<Beer> = ${JSON.stringify(BEERS_FLAT)};
`;

fse.writeFileSync(
  path.resolve(__dirname, '../src/data/Brewery.ts'),
  BreweryContent
);
fse.writeFileSync(path.resolve(__dirname, '../src/data/Beer.ts'), BeerContent);
