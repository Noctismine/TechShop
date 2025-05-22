import { Component, NgModule } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

    constructor(public api: ApiService,){
     this.getBrands()
     this.drawAllproducts()

    }
  

  

  
    brendebi: any = [];
    producebi: any = [];
    
    search: string = ""

    minPrice: number = 0
    maxPrice: number = 0

      getBrands(){
        this.api.getAllBrands().subscribe(  (data) =>  {
           
            this.brendebi = data
           
            
          
        })
      }

      drawAllproducts(){
          this.api.getAllProducts().subscribe(  (data) =>  {       
          this.producebi = data    
          })
          this.selectedBrandIndex = null;
      }

      getBrandBy(name: string){
        this.api.getBrandById(name).subscribe( (data) => {
          this.producebi = data
        })
      }


      searchiiii(name: string){
        this.api.search(name).subscribe( (data) => {
          this.producebi = data
        })
      }

      priceFilter() {
        this.api.price(this.minPrice, this.maxPrice).subscribe((data) => {
          this.producebi = data;
          console.log(data);
        });
      }






     
      selectedBrandIndex: number | null = null;
    
      selectBrand(index: number) {
        this.selectedBrandIndex = index;
      }

}
