import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userIcon = faUserCircle;
  
  constructor(private http: HttpClient,private router:Router) {
    
  }

  goHome() : void
  {
    this.router.navigate(['home'])
  } 

  ngOnInit(): void {
  }

}
