import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-admine',
  templateUrl: './main-admine.component.html',
  styleUrls: ['./main-admine.component.css']
})
export class MainAdmineComponent implements OnInit {

  x = "2";
  @Output() Emitter  = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  emit()
  { 
    this.Emitter.emit(this.x);
  }

}
