import { HttpClient } from '@angular/common/http';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-hotels',
  templateUrl: './add-hotels.component.html',
  styleUrls: ['./add-hotels.component.css']
})
export class AddHotelsComponent implements OnInit {

  basket = faTrash;
  get_all_hotels = "http://localhost/hotel_sys/Hotel/get_all_hotels.php";
  delete_hotel = "http://localhost/hotel_sys/Hotel/delete_hotel.php";
  hotels = [];

  constructor(private http: HttpClient) { 
    this.refreshHotels();
  }

  ngOnInit(): void {
  }

  refreshHotels()
  {
    this.http.get(this.get_all_hotels).subscribe((data : any)=>
    {
      if (data.length == 0) 
      {
        this.hotels = [];
        return;
      }
      this.hotels = data;
      console.log(data);
    })
  }


  deleteHotel(id)
  {
    let X = new FormData();
    X.append('id' , id);
    this.http.post(this.delete_hotel,X).subscribe((data)=>
    {
      console.log(data);
      
      if (data['status'] == 0)
      {
        alert('failed');
      }
      else
      {
        alert('done');
        this.refreshHotels();
      }
    })
  }


}
