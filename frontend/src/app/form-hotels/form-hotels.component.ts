import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-hotels',
  templateUrl: './form-hotels.component.html',
  styleUrls: ['./form-hotels.component.css']
})
export class FormHotelsComponent implements OnInit {

  get_all_admins = "http://localhost/hotel_sys/Admin/get_all_admins.php"
  add_hotel = "http://localhost/hotel_sys/Hotel/add_hotel.php"

  admins_username= [];

  hotel = 
  {
    'name' : "",
    'email' : "",
    'phone' : "",
    'images' : "",
    'id' : "asd",
    'location' : "",
    'Address' : "",
    'adminID' : ""
  } 

  constructor(private http: HttpClient) {
    http.get(this.get_all_admins).subscribe((data: any)=>
    {
      for (let i = 0; i < data.length; i++)
      {
        if (data[i]['role'] == 1)
        {
          this.admins_username.push(data[i]['username'])
        }
      }
    })
   }

  ngOnInit(): void {
  }

  submit()
  {
    let X = new FormData();
    let Keys = Object.keys(this.hotel);
    let Values = Object.values(this.hotel);

    for (let i = 0; i < Keys.length; i++)
    {
      X.append(Keys[i],Values[i]);
    }
    
    this.http.post(this.add_hotel,X).subscribe((data)=>{
      if (data == 0)
      {
        alert('failed');
      }
      else
      {
        alert('done');
        this.hotel = 
        {
          'name' : "",
          'email' : "",
          'phone' : "",
          'images' : "",
          'id' : "asd",
          'location' : "",
          'Address' : "",
          'adminID' : ""
        } 
      }
    })
    
  }

  reset()
  {

  }

}
