import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-subadmin',
  templateUrl: './form-subadmin.component.html',
  styleUrls: ['./form-subadmin.component.css']
})
export class FormSubadminComponent implements OnInit {

  add_new_admin = "http://localhost/hotel_sys/Admin/add_new_admin.php";

  newAdmin = {
    'username' : "",
    'password' : "",
    'email' : "",
    'name' : "",
    'phone' : "",
    'role' : ""
  };



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  reset()
  {
    this.newAdmin = {
      'username' : "",
      'password' : "",
      'email' : "",
      'name' : "",
      'phone' : "",
      'role' : ""
    };
  }

  submit()
  {
    let X = new FormData();
    
    let keys = Object.keys(this.newAdmin);
    let values = Object.values(this.newAdmin);

    for (let i = 0; i < keys.length; i++)
    {
      X.append(keys[i],values[i]);
    }

    this.http.post(this.add_new_admin,X).subscribe((data)=>
    {
      if (data['status'] == 0)
      {
        if ( data['error']== 'E')
          alert('Failed... username is in use');
        else
          alert('unexpected error');
      }
      else
      {
        alert('done');
        this.newAdmin = {
          'username' : "",
          'password' : "",
          'email' : "",
          'name' : "",
          'phone' : "",
          'role' : ""
        };
      }
    })
    
  }

}
