import { Component, NgModule } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
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
          })
      }

      getBrandBy(name: string){
        this.api.getBrandById(name).subscribe( (data) => {
          this.producebi = data
        })
      }


      

}
