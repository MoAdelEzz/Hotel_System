import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  url_1 = "http://localhost/tsting/getAll.php?filter=1";

  constructor(private http: HttpClient) {

   }


   arr : any = [];

   name = "";
   password = "";


  ngOnInit(): void {
    this.http.get(this.url_1).subscribe((data)=>{
    this.arr = data;
    console.log(data);
    
    })
  }

  insert()
  {
    let x = new FormData();

    x.append("user", this.name);  // [user = asdasda]

    this.http.get("http://localhost/tsting/index.php?user=" + this.name +"&password=" + this.password).subscribe((data)=>
    {
      console.log(data);
    })
  }

}
