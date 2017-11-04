import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
      ul {
        font-weight: bold;
      }
  
  `]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
