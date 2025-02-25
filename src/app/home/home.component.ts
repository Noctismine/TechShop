import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public api: ApiService){
   this.getCards()
  }

  cards: any;
  
 
    getCards(){
      this.api.getCardById(1 , 10 ).subscribe(  (data) =>  {
          console.log(data);
          this.cards = data
      })
    }

}
