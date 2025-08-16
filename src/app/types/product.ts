export class Product {
  id?: number;
  name: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: any) {
    this.name = data.name || '';
    this.price = data.price || '0.00';
    this.createdAt = new Date(data.createdAt || Date.now());
    this.updatedAt = new Date(data.updatedAt || Date.now());
  }

  static from(data: any): Product {
    return new Product(data);
  }
}