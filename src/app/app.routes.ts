
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { DetailsComponent } from './details/details.component';




export const routes: Routes = [
    {path: "", component : HomeComponent },
    {path: "products", component : ProductsComponent },
    {path: "login", component : LoginComponent},
    {path: "sign", component : SignComponent},
    {path: "details/:id", component : DetailsComponent},



];
