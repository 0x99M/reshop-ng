import { Component } from '@angular/core';
import { IonSplitPane, IonMenu, IonContent, IonList, IonItem, IonLabel, IonFooter, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Orders } from '../orders/orders';
import { Products } from '../products/products';
import { AuthService } from '../../services/auth/auth-service';
import { Router } from '@angular/router';

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
    Orders,
    IonFooter,
    IonToolbar,
    IonButton
],
  standalone: true,
})
export class DashboardPage {
  activeView: string = 'products';

  constructor(private authService: AuthService, private router: Router) {}

  changeView(newView: string) {
    this.activeView = newView;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
