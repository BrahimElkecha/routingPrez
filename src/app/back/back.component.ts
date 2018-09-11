import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onReloadBackTeamPage() {
    this.router.navigate(['back'], { relativeTo: this.route});
  }

  navigateToDevBackPage() {
    const navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': '1' },
      fragment: 'loading'
    };
    this.router.navigate(['back', 1, 'show'], navigationExtras);
  }
}
