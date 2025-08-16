import { Component } from '@angular/core';
import { IonSplitPane, IonMenu, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Orders } from '../orders/orders';
import { Products } from '../products/products';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
  imports: [
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    Products,
    Orders
  ],
  standalone: true,
})
export class DashboardPage {
activeView: string = 'products';

  changeView(newView: string) {
    this.activeView = newView;
  }
}
