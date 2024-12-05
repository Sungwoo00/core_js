export interface Product {
  items: Item[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export interface Item {
  brand: string;
  collectionId: string;
  collectionName: string;
  create: Date;
  description: string;
  discount: number;
  id: string;
  photo: string;
  price: number;
  updated: Date;
}
