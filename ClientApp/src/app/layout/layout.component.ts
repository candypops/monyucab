import { Component, OnInit } from '@angular/core';
import { AuthorisedSideNavService } from '../services/authorised-side-nav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
