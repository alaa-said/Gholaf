import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
//service
import {  FservService } from '../fserv.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //services variable
  catigoryData: object;
  constructor( private data : FservService ,private http:HttpClient ) 
  {
    this.catigoryData = {};
    this.getCatigoryData();
    // console.log(this.catigoryData);
   }

   //services
  getCatigoryData(): void {
    let path: string = 'http://gholaf.com/selectbookdata.php';
    this.data.getData(path).subscribe(
      res => {
        this.catigoryData = res;
        console.log(res);
    console.log(this.catigoryData);
        
      },
      err => {
        console.log(err);
      },
      () => { }
    );

    // $( function() {
    //   $( "#slider-range" ).slider({
    //     range: true,
    //     min: 0,
    //     max: 500,
    //     values: [ 75, 300 ],
    //     slide: function( event, ui ) {
    //       $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    //     }
    //   });
    //   $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //     " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    // } );

  }

  ngOnInit() {
  }

  
  submitData(data){
    console.log(data);
    
    this.http.get('http://gholaf.com/category.php?query='+data,httpOptions).subscribe(res=>{
      console.log(res);
      this.catigoryData = res;
      console.log(this.catigoryData);
    },err =>{
      console.log(err);
      console.log('error happened');
    })
  }
}
