import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public api: HttpClient) { }


  getCardById(index : number , size : number ){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/all?page_index=${index}&page_size=${size}`)
  }


  getAllBrands(){
    return this.api.get("https://api.everrest.educata.dev/shop/products/brands")
  }

  getAllProducts(){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/all?page_index=${1}&page_size=${38}`)
  }

  getBrandById( name : string ){
    return this.api.get(`https://api.everrest.educata.dev/shop/products/brand/${name}`)
  }

}
