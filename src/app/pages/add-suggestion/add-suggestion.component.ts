import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../../_services/backend.service';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.css']
})
export class AddSuggestionComponent implements OnInit {
  form: any = {
    price: null,
    description: null,
  };
  private objectId: any;
  constructor(private router: Router, private backendService: BackendService) { }

  ngOnInit(): void {
    this.objectId = this.router.url.substring(15);
    console.log(this.objectId);
  }
  onSubmit(): void{
    this.backendService.addSuggestion(this.form, this.objectId).subscribe();
  }

}
