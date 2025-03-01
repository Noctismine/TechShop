import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

    constructor(public api: ApiService){
     this.getBrands()
     this.drawAllproducts()
    }
  
    brendebi: any = [];
    producebi: any = [];
   
      getBrands(){
        this.api.getAllBrands().subscribe(  (data) =>  {
           
            this.brendebi = data
           
            
          
        })
      }

      drawAllproducts(){

        this.api.getAllProducts().subscribe(  (data) =>  {
           
         
         this.producebi = data
         console.log(this.producebi);
          
        
      })

      }

}
