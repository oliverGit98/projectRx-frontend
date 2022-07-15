import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'home-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {}

  navigateToRegister() {
    this.router.navigate(["/register"])
  }
}
