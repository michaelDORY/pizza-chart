export interface FetchedProducts {
  total: number;
  products: FetchedProduct[];
}

export interface FetchedProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
}

interface IObjectKeys {
  [key: string]: string | number;
}

export interface Product extends IObjectKeys {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  priceGroup: string;
  type: string;
}

export interface UrlOptions {
  limit: number;
  skip: number;
}
