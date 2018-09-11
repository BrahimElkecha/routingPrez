import { Component, OnInit } from '@angular/core';

// we should have access to our router
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count: any = 0;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // complex calculation / retreive data from server ...
  // exemple : navigate to back team page if count > 3
  navigateToBackTeamPage() {
    this.count ++;
    if (this.count > 3) {
      this.router.navigate(['/back']);
    }
  }
}
