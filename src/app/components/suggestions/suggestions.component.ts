import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BackendService} from '../../_services/backend.service';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  @Input() menuObject: any;
  public suggestions = [];
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getSuggestionsByObject(this.menuObject).subscribe(data => {
      this.suggestions = data;
      console.log(this.suggestions);
    });
  }

  changeDataSource(id: number): void {
    // @ts-ignore
    this.suggestions = this.suggestions.filter(suggestion => suggestion.id !== id);
  }
}
