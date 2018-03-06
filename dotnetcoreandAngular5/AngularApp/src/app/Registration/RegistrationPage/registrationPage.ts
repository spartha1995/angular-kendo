import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './registrationPage.html',
})
export class RegistrationPageComponent {

  name: string;
  age: number;
  address: string;
  phoneNumber: number;

  constructor(private router :Router) {

  }
  
  onButtonClick() {
    console.log(this.age);
    console.log(this.name);
    this.router.navigate(["kendocomponent"]);
  }
}
