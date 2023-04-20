export interface Model {
  model: string;
  image: string;
}

export interface Brands {
  brand: Brand;
  models: Model[];
}

export type Brand = "Audi" | "BMW" | "Mercedes-Benz";

export type ModelsBrands = Brands[];
