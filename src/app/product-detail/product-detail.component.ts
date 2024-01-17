import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product:any;
  constructor(private routes: ActivatedRoute){
  }
  httpClient = inject(HttpClient);
  ngOnInit(){
    let id = this.routes.snapshot.paramMap.get('id');
   
    this.getDetailProductById(Number(id));
  }
  getDetailProductById(id:number){
    // console.log(id);  
    this.httpClient.get(`https://dummyjson.com/products/${id}`)
    .subscribe((response:any)=>{
        // console.log(response);
        this.product = response;
    })  
  }
}
