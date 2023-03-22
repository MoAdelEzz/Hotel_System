import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  
  constructor(private http: HttpClient) {
    
  }

  x = "1";

  ngOnInit(): void {
  }

  changePage(e)
  {
    this.x = e;
  }


}
