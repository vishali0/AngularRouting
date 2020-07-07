import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { ProductComponent } from './product/product.component';
// import { CreateComponent } from './create/create.component';
// import { EditComponent } from './edit/edit.component';


const routes: Routes = [{
  path: "",
  component: ButtonsComponent
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "register",
  component: RegisterComponent
},
{
  path: "product-details",
  component: ProductDetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
