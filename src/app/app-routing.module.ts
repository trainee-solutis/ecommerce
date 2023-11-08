import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { HomeComponent } from "./pages/home/home.component";
import { ProductComponent } from "./pages/product/product.component";
import { BasketComponent } from "./pages/basket/basket.component";
import { SuccessComponent } from "./pages/success/success.component";

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
    path: "confirm",
    component: SuccessComponent,
    data: { breadcrumb: { alias: "confirm" } },
  },
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
