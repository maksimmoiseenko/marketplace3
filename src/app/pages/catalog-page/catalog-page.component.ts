import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {
  public objects: any;
  public typeName: any;
  constructor(private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get( 'http://localhost:8080/objects/type/' + this.router.url.substring(6)).subscribe(data => this.objects = data);
    // @ts-ignore
    this.httpClient.get( 'http://localhost:8080/type/' + this.router.url.substring(6)).subscribe(type => this.typeName = type.name);
  }
  changeDataSource(typeId: number): void{
    this.httpClient.get( 'http://localhost:8080/objects/type/' + typeId).subscribe(data => this.objects = data);
    // @ts-ignore
    this.httpClient.get( 'http://localhost:8080/type/' + typeId).subscribe(type => this.typeName = type.name);

  }
}
