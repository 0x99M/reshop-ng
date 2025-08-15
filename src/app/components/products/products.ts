import { Component } from '@angular/core';
import { Product } from '../../types/product';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'products-view',
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products: Product[] = [{ "id": 1, "name": "Practical Wooden Bike", "price": "400.7", "createdAt": "2025-08-15T07:47:14.435Z", "updatedAt": "2025-08-15T07:47:14.435Z" }, { "id": 2, "name": "Fantastic Rubber Fish", "price": "237.39", "createdAt": "2025-08-15T07:47:14.435Z", "updatedAt": "2025-08-15T07:47:14.435Z" }, { "id": 3, "name": "Handcrafted Aluminum Gloves", "price": "854.75", "createdAt": "2025-08-15T07:47:14.435Z", "updatedAt": "2025-08-15T07:47:14.435Z" }, { "id": 4, "name": "Refined Concrete Chicken", "price": "630.6", "createdAt": "2025-08-15T07:47:14.435Z", "updatedAt": "2025-08-15T07:47:14.435Z" }, { "id": 5, "name": "Handmade Silk Fish", "price": "421.25", "createdAt": "2025-08-15T07:47:14.435Z", "updatedAt": "2025-08-15T07:47:14.435Z" }, { "id": 6, "name": "Rustic Cotton Pants", "price": "573.35", "createdAt": "2025-08-15T07:47:14.435Z", "updatedAt": "2025-08-15T07:47:14.435Z" }, { "id": 7, "name": "Electronic Bamboo Shirt", "price": "372.59", "createdAt": "2025-08-15T07:47:14.435Z", "updatedAt": "2025-08-15T07:47:14.435Z" }, { "id": 8, "name": "Elegant Plastic Gloves", "price": "345.35", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 9, "name": "Rustic Steel Keyboard", "price": "163.6", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 10, "name": "Elegant Ceramic Shirt", "price": "38.55", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 11, "name": "Recycled Silk Fish", "price": "157.5", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 12, "name": "Awesome Marble Sausages", "price": "492.25", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 13, "name": "Practical Bronze Sausages", "price": "171.89", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 14, "name": "Refined Cotton Hat", "price": "759.85", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 15, "name": "Modern Granite Hat", "price": "722.4", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 16, "name": "Licensed Granite Salad", "price": "121.99", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 17, "name": "Ergonomic Steel Fish", "price": "635.17", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 18, "name": "Luxurious Wooden Pizza", "price": "886.39", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 19, "name": "Fresh Silk Bacon", "price": "461.69", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }, { "id": 20, "name": "Intelligent Steel Mouse", "price": "604.29", "createdAt": "2025-08-15T07:47:14.436Z", "updatedAt": "2025-08-15T07:47:14.436Z" }];
}
