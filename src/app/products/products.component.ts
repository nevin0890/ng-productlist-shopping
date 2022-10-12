import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.fetchProducts()
  }
  
  fetchProducts=()=>{this.api.getProductList().subscribe((data)=>{this.getProduct=data})}

  getProduct:any = []

  ngOnInit(): void {
  }

}
