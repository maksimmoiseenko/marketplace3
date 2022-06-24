import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  @Output() onChange = new EventEmitter<number>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openCatalogPage(typeId: number): void {
    this.router.navigate(['/type/' + typeId]);
    this.onChange.emit(typeId);
  }
}
