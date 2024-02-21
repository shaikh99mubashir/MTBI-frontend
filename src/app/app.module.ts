import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ResultPageComponent } from './result-page/result-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypesDetailComponent } from './types-detail/types-detail.component'; 
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BookQurbaniComponent } from './book-qurbani/book-qurbani.component';
import { TrackOrderComponent } from './track-order/track-order.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    HomePageComponent,
    ResultPageComponent,
    TypesDetailComponent,
    LoaderComponent,
    NavbarComponent,
    CarouselComponent,
    BookQurbaniComponent,
    TrackOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
