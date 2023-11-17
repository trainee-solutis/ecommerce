import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { HomeComponent } from "./pages/home/home.component";
import { ProductComponent } from "./pages/product/product.component";
import { BasketComponent } from "./pages/basket/basket.component";
import { SuccessComponent } from "./pages/success/success.component";
import { SignUpComponent } from "./pages/signup/signup.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { LoginComponent } from "./pages/login/login.component";
import { CreateAccountComponent } from "./pages/login/create-account/create-account.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
    data: { breadcrumb: "Home" },
  },
  {
    path: "product/:id",
    component: ProductComponent,
    data: { breadcrumb: { alias: "product" } },
  },
  {
    path: "basket",
    component: BasketComponent,
    data: { breadcrumb: { alias: "basket" } },
  },
  {
    path: "profile",
    component: ProfileComponent,
    data: { breadcrumb: { alias: "profile" } },
  },
  {
    path: "confirm",
    component: SuccessComponent,
    data: { breadcrumb: { alias: "confirm" } },
  },
  {
    path: "signup",
    component: SignUpComponent,
    data: { breadcrumb: { alias: "signup" } },
  },
  {
    path: "login",
    component: LoginComponent,
    data: { breadcrumb: { alias: "login" } },
  },
  {
    path: "confirm-account/:token",
    component: CreateAccountComponent,
  },
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
