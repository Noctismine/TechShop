import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  itemId: any = "";
  productebiinfo: any;
  currentImageIndex: number = 0;

  constructor( private activate: ActivatedRoute,private api: ApiService,) {   this.activFunction();   this.getProductBy();
  }

  activFunction() {
    this.activate.params.subscribe(data => {
      this.itemId = data['id'];
    });
  }

  getProductBy() {
    this.api.getProductsById(this.itemId).subscribe(data => {
      this.productebiinfo = data;
      console.log(data);
    });
  }

  nextImage(): void {
    if (this.currentImageIndex < this.productebiinfo.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  prevImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.productebiinfo.images.length - 1;
    }
  }

  
  
}
