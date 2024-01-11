
import { Component, OnInit } from '@angular/core';

interface Order {
  name: string;
  products: string[];
  total: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [
    { 
      name: 'Vamsi', 
      products: ['Laptop', 'Phone', 'Headphones'], 
      total: "$1500" 
    },
    { 
      name: 'Pavan', 
      products: ['Tablet', 'Smartwatch'], 
      total: "$800" 
    },
    { 
      name: 'pranay', 
      products: [ 'Shoes','t_shirt'], 
      total: "$950" 
    },
    { 
      name: 'Mohan', 
      products: ['Tv','Jeans'], 
      total: "$1450" 
    },
   
  ];

  ngOnInit(): void {
  }
}
