import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup-card',
  templateUrl: './login-signup-card.component.html',
  styleUrls: ['./login-signup-card.component.css']
})
export class LoginSignupCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectLogin(){
    this.router.navigate(['/login'])
  }
  redirectSignUp(){
    this.router.navigate(['/sign-up'])
  }
}
