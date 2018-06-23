//fontawesome
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
//services
import { HttpClientModule } from '@angular/common/http';
//App Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { ModalModule } from 'ngx-bootstrap/modal';

import {  FservService } from './fserv.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegestComponent } from './regest/regest.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { FeaturedComponent } from './featured/featured.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { FamousauthorsComponent } from './famousauthors/famousauthors.component';
import { MostdownloadedComponent } from './mostdownloaded/mostdownloaded.component';
import { NewestbooksComponent } from './newestbooks/newestbooks.component';
import { HeaderComponent } from './header/header.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { CartComponent } from './cart/cart.component';
import { HeadComponent } from './head/head.component';
import { SideComponent } from './side/side.component';
import { ContentComponent } from './content/content.component';
import { FootComponent } from './foot/foot.component';
import { PesonalInfoComponent } from './pesonal-info/pesonal-info.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';


const routes: Routes =  [
  { path: "", component: HomeComponent,children:[
    {path:'',component:NewestbooksComponent},
    {path:'newestbooks',component:NewestbooksComponent},
    {path:'bestseller' , component:BestsellerComponent},
    {path:'mostdownloaded', component:MostdownloadedComponent},
    {path:'famousauthors' , component:FamousauthorsComponent}
  ]},
  { path: "login", component: LoginComponent },
  { path: "cart", component: CartComponent },
  { path: "register", component: RegestComponent },
  { path: "category", component: CategoryComponent },
  {path:'', component:FeaturedComponent } ,

  { path: "personal", component: PesonalInfoComponent },
  { path: "favourite", component: FavouriteComponent },
  { path: "myorder", component: MyOrderComponent },
  { path: "editinfo", component: EditInfoComponent },
  { path: "logout", component:  HomeComponent },
  {path:"payment",component:PaymentComponent} ,
  // {path:'login',component:LoginComponent}

  { path: "search", component: SearchComponent }
  
]
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegestComponent,
    CategoryComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    TeamComponent,
    FeaturedComponent,
    BestsellerComponent,
    FamousauthorsComponent,
    MostdownloadedComponent,
    NewestbooksComponent,
    HeaderComponent,
    BookComponent,
    AuthorComponent,
    CartComponent,
    HeadComponent,
    SideComponent,
    ContentComponent,
    FootComponent,
    PesonalInfoComponent,
    MyOrderComponent,
    EditInfoComponent,
    FavouriteComponent,
    LogoutComponent,
    PaymentComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    // AngularFontAwesomeModule,
    FormsModule,
    RouterModule,
    HttpModule,
    // BsDropdownModule.forRoot(),
    // TooltipModule.forRoot(),
    // ModalModule.forRoot()
  ],
  providers: [ FservService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
