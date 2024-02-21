import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { TypesDetailComponent } from './types-detail/types-detail.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { BookQurbaniComponent } from './book-qurbani/book-qurbani.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, // Define your routes here
  { path: 'book-now', component: BookQurbaniComponent },
  { path: 'track-order', component: TrackOrderComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
