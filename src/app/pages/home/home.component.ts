import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openCatalogPage(typeId: number): void {
    this.router.navigate(['/type/' + typeId]);
  }

}
