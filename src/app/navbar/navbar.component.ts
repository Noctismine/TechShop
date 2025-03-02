import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { routes } from '../app.routes';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navbar: boolean = false

  toggleMenu(){
    this.navbar = !this.navbar
  }



}
