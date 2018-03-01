import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
    if (this.router.url.includes("/")) {
      this.router.navigate(["/registration"]);
    }
  }
}
