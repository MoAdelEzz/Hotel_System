import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username ="";
  password = "";
  passwordCon = "";
  check_username = "http://localhost/hotel_sys/User/check_username.php";
  add_user = "http://localhost/hotel_sys/User/add_new_user.php";
  check_login = "http://localhost/hotel_sys/User/check_login.php";

  which = 0;

  
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  next()
  {
    console.log(this.username);
    
    if (this.username == "")
    {
      alert("add username");
      return;
    }

    this.http.get(this.check_username + "?username=" + this.username).subscribe((data)=>
    {
      if (data['status'] == 1)
      {
        this.which = 1;
      }
      else
      {
        this.which = 2;
      }
    })
  }


  add()
  {
    if (this.password == "")
    {
      alert('enter a password');
      return;
    }

    if (this.password != this.passwordCon)
    {
      alert("passwords doesn't match");
      return;
    }

    console.log(this.username);
    console.log(this.password);
    

    let X = new FormData();
    X.append('username',this.username);
    X.append('password',this.password);
    this.http.post(this.add_user,X).subscribe((data)=>
    {
      if (data['status'] == 1)
      {
        alert('done');
      }
      else
      {
        alert('failed');
      }
    })
  }

  login()
  {
    if (this.password == "")
    {
      alert('enter a password');
      return;
    }

    let X = new FormData();
    X.append('username',this.username);
    X.append('password',this.password);

    this.http.post(this.check_login,X).subscribe((data)=>
    {
      if (data[0]['status'] == 1)
      {
        alert('done');
      }
      else
      {
        alert('failed');
      }
    })

  }

}
