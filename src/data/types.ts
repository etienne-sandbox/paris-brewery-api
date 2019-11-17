export interface Brewery {
  id: string;
  name: string;
  description: Array<string>;
  website: string;
  beers: Array<{ name: string; id: string }>;
}

export interface Beer {
  id: string;
  name: string;
  description: Array<string>;
  alcool: number | null;
  url: string;
  brewery: { name: string; id: string };
}
