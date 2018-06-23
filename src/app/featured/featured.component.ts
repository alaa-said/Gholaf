import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  Arr = Array;
  	num:number = 8;
  constructor(
  	private router: Router
  ) { }

  redirectTo():void{
  	this.router.navigate(['/login/']);
  }

  bestSellerRedirect():void{
  	this.router.navigate(['bestseller']);
  }

  newestBooksRedirect():void{
  	this.router.navigate(['newestbooks']);
  }

  mostDownloadedRedirect():void{
  	this.router.navigate(['mostdownloaded']);
  }

  famousAuthorsRedirect():void{
  	this.router.navigate(['famousauthors']);
  }

  
  ngOnInit() {
  }

}


