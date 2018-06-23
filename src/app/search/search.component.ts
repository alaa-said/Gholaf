import { Component, OnInit } from '@angular/core';
//service
import {  FservService } from '../fserv.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //services variable
  searchResult: Array<object>;
  
  constructor( private data : FservService ) {
    this.searchResult = [];
    this.getsearchResult();
    
   }
//services
getsearchResult(): void {
  
  let path: string = 'http://gholaf.com/search.php';
  this.data.getData(path).subscribe(
    res => {
      this.searchResult = res;
      console.log(res);
      console.log("data come true");
      console.log(this.searchResult);
      
      
    },
    err => {
      console.log(err);
      console.log("data don't come true");
    },
    () => { }
      
  );
  
}

ngOnInit() {
}

}

