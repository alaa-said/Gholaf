import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgForm, NgModel } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
//service
import {  FservService } from '../fserv.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  searchForm: object;
  searchResult :object;
  
  constructor( private data : FservService ,private http:HttpClient ) {
    this.searchForm = {};
    this.searchResult = {};
   }
  
  ngOnInit() {

  }
  submitData(data){
    console.log(data);
    this.http.get('http://gholaf.com/search.php?query='+data,httpOptions).subscribe(res=>{
      console.log(res);
      this.searchResult = res;
    },err =>{
      console.log(err);
      console.log('error happened');
    })
  }
}



