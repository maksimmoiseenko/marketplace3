import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BackendService} from '../../_services/backend.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {
  public objects: any;
  public typeName: any;
  constructor(private router: Router,
              private httpClient: HttpClient,
              private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getObjectsByTypeId(this.router.url.substring(6)).subscribe(data => this.objects = data);
    // @ts-ignore
    this.backendService.getTypeById(this.router.url.substring(6)).subscribe(type => this.typeName = type.name);
  }
  changeDataSource(typeId: number): void{
    this.backendService.getObjectsByTypeId(typeId.toString()).subscribe(data => this.objects = data);
    // @ts-ignore
    this.backendService.getTypeById(typeId).subscribe(type => this.typeName = type.name);

  }

  goToObjectPage(object: any): void {
    this.router.navigate(['/object/' + object.id]);
  }
}
