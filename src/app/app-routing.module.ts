import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {path:'customers', loadChildren:()=> import('./customers/customers.module').then(m => m.CustomersModule) },
  {path:'orders', loadChildren:()=> import('./orders/orders.module').then(m=>m.OrdersModule)},
  {path:'', redirectTo:'', pathMatch:'full'}
];


//SIN PRE-LOAD
/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 */
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:true,
    preloadingStrategy:PreloadAllModules //precarga  los modulos una vez cargado el main principal 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
