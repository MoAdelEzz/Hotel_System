import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  
  get_all_hotels = "http://localhost/hotel_sys/Hotel/get_all_hotels.php";
  get_all_options = "http://localhost/hotel_sys/Hotel/get_hotel_options.php";
  hotels = [];
  options = [];

  load = false;
  
  constructor(private http: HttpClient, private router: Router)
  {
    this.options.length = 10000;
  }

  pause = true;

  ngOnInit(): void {
    
    this.http.get(this.get_all_hotels).subscribe((data)=>{this.readAllTables(data);});

  }

  readAllTables(Async_data)
  {
    this.hotels = Async_data;
    for (let i = 0; i < this.hotels.length; i++)
    {    
      this.http.get(this.get_all_options + "?id=" + this.hotels[i].id).subscribe((data)=>{this.readAllOptions(this.hotels[i].id, data)});
    }
    
    setTimeout(() => {
      console.log(this.options['6'][0]['hotelID']);
    }, 2000); 
    

    this.load = true;
    
  }

  readAllOptions(id, AsyncData)
  {
    if (AsyncData['status'] == 0) this.options[id] = ["","","",""];
else
    this.options[id] = AsyncData;
  }



}
