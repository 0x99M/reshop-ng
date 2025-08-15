import { Component } from '@angular/core';
import { IonSplitPane, IonMenu, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Products } from "./components/products/products";
import { Orders } from "./components/orders/orders";

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.css'],
  standalone: true,
  imports: [
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    Products,
    Orders
]
})
export class App {
  activeView: string = 'products';

  changeView(newView: string) {
    this.activeView = newView;
  }
}