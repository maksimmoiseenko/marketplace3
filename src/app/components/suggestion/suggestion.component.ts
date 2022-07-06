import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BackendService} from '../../_services/backend.service';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  @Input() suggestion: any;
  @Output() onChange = new EventEmitter<number>();
  constructor(public tokenService: TokenStorageService, private backendService: BackendService) { }

  ngOnInit(): void {
  }

  deleteSuggestion(id: number): void {
    this.backendService.deleteSuggestion(id).subscribe(() => this.onChange.emit(id));
  }

  addOrder(suggestionId: number): void {
    this.backendService.addOrder(suggestionId).subscribe();
  }
}
