import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {


  username = "bstamm";
  get_admin = "http://localhost/hotel_sys/Admin/get_admin_by_username.php"
  admin_profile = null;

  role = "";

  constructor(private http: HttpClient) {

    http.get(this.get_admin + "?username=" + this.username).subscribe((data)=>{
      this.admin_profile = data['user'];
      if (data['user']['role'] == 0)
        this.role = "Admin";
      else
        this.role = "Hotel Owner";
    })

   }

  ngOnInit(): void {
  }

}
