import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-back',
  templateUrl: './dev-back.component.html',
  styleUrls: ['./dev-back.component.css']
})
export class DevBackComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log('fragment is:' + this.route.snapshot.fragment);
  }

}
