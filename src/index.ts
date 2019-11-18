import {
  Server,
  Middleware,
  JsonPackage,
  RouterPackage,
  Route,
  JsonResponse,
  Cors,
  Chemin,
  CheminParam as P,
  RouterConsumer,
  HttpError
} from 'tumau';
import { BREWERIES } from './data/Brewery';
import { BEERS } from './data/Beer';
import { Beer, Brewery } from './data/types';
import { CuidSlugParam } from './utils/CuidSlugParam';

const ROUTES = {
  home: Chemin.create(),
  brewery: Chemin.create('brewery', P.optional(CuidSlugParam('breweryId'))),
  beer: Chemin.create('beer', CuidSlugParam('beerId'))
};

const ROUTES_STR = Object.keys(ROUTES).reduce<{ [key: string]: string }>(
  (acc, key) => {
    acc[key] = (ROUTES as any)[key].toString();
    return acc;
  },
  {} as any
);

type Breweries = Array<{
  id: string;
  name: string;
}>;

const BREWERIES_SMALL: Breweries = BREWERIES.map(brewery => ({
  id: brewery.id,
  name: brewery.name
}));

const server = Server.create({
  handleErrors: false,
  mainMiddleware: Middleware.compose(
    Cors.create({}),
    JsonPackage(),
    RouterPackage([
      Route.GET(ROUTES.home, () => {
        return JsonResponse.with({
          routes: ROUTES_STR
        });
      }),
      Route.GET(ROUTES.brewery, ctx => {
        const match = ctx.getOrThrow(RouterConsumer).getOrThrow(ROUTES.brewery);
        const breweryId = match.breweryId;
        if (breweryId.present === false) {
          return JsonResponse.with<Breweries>(BREWERIES_SMALL);
        }
        const brewery = BREWERIES.find(b => b.id === breweryId.value);
        if (!brewery) {
          throw new HttpError.NotFound();
        }
        return JsonResponse.with(brewery);
      }),
      Route.GET(ROUTES.beer, ctx => {
        const match = ctx.getOrThrow(RouterConsumer).getOrThrow(ROUTES.beer);
        const beer = BEERS.find(b => b.id === match.beerId);
        if (!beer) {
          throw new HttpError.NotFound();
        }
        return JsonResponse.with<Beer>(beer);
      }),
      Route.all(null, () => {
        throw new HttpError.NotFound();
      })
    ])
  )
});

const DEFAULT_PORT = 3000;
const PORT =
  (process.env.PORT ? parseInt(process.env.PORT, 10) : DEFAULT_PORT) ||
  DEFAULT_PORT;

server.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${PORT} !`);
});
