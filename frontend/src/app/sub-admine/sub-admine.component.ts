import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sub-admine',
  templateUrl: './sub-admine.component.html',
  styleUrls: ['./sub-admine.component.css']
})
export class SubAdmineComponent implements OnInit {

  get_all_admins = "http://localhost/hotel_sys/Admin/get_all_admins.php";
  delete_admin = "http://localhost/hotel_sys/Admin/delete_admin.php";

  username = "ally.dicki";
  password = "";

  admins = [];
  basket = faTrash;

  constructor(private http: HttpClient) {
      this.refreshAdmins();
   }

   refreshAdmins()
   {    
    this.http.get(this.get_all_admins).subscribe((data : any)=>
    {
      if (data['status'] == 0)
      {
        return;
      }
      this.admins = data;
      this.admins.pop();
    })

   }

  ngOnInit(): void {
  }


  deleteAdmin(username)
  {
    let X = new FormData();
    X.append('username', username);
    this.http.post(this.delete_admin,X).subscribe((data)=>
    {
      if (data['status'] == 0)
      {
        alert(data['error']);
      }
      else
      {
        alert("Done");
        this.refreshAdmins();
      }
    })
  }

}
