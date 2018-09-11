import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showFrontDev(param) {
    this.router.navigate([`/front/${param}`]);
  }
}
