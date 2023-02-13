import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'admin-dashboard2';
  navigation = [
    {
      path: '',
      label: 'Dashboard',
    },
    {
      path: '/users',
      label: 'Users',
    },
    {
      path: '/orders',
      label: 'Orders',
    },
    {
      path: '/shipments',
      label: 'Shipments',
    },
    {
      path: '/payments',
      label: 'Payments',
    },
    {
      path: '/login',
      label: 'Login',
    },
  ];
  item: any;
  shouldIBeDisplayed() {
    console.log(location.href);
    if (location.href.endsWith('login')) {
      return true;
    }

    return true;
  }
}
