import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';
import {BackendService} from '../../_services/backend.service';

@Component({
  selector: 'app-object-page',
  templateUrl: './object-page.component.html',
  styleUrls: ['./object-page.component.css']
})
export class ObjectPageComponent implements OnInit {

  constructor(private router: Router, private backendService: BackendService, private tokenService: TokenStorageService) { }
  object: any;
  isRoleSupplier: any;
  ngOnInit(): void {
    this.isRoleSupplier = this.tokenService.getUser().role === 'ROLE_SUPPLIER';
    this.backendService.getObjectById(this.router.url.substring(8)).subscribe(data => {
      this.object = data;
      console.log(this.object);
    });
  }

  addSuggestion(id: number): void {
    this.router.navigate(['/addSuggestion/' + id]);
  }
}
