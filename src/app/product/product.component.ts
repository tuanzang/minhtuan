import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any;
  httpClient = inject(HttpClient);
  ngOnInit(): void{
    this.getProduct();
  }
  getProduct(){
    this.httpClient.get('https://dummyjson.com/products')
    .subscribe((response:any)=>{
      // console.log(response.products);
      this.products = response.products.slice(0, 16);
    });
  }
}
