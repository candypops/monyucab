import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-card',
  templateUrl: './signup-card.component.html',
  styleUrls: ['./signup-card.component.css']
})
export class SignupCardComponent implements OnInit {

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
