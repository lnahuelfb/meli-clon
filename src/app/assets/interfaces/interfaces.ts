export interface Categories {
  name: string,
  subCategories?: string[],
  free?: boolean
}

export interface Login {
  name: string,
  link: string
}

export type Products = {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  image:       string;
  rating:      Rating;
}

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export type Rating = {
  rate:  number;
  count: number;
}

export type Users = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: Role;
  avatar: string;
  creationAt: Date;
  updatedAt: Date;
}

export enum Role {
  Admin = "admin",
  Customer = "customer",
}
