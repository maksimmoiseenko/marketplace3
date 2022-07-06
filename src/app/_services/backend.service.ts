import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const BACKEND_API = 'http://localhost:8080/api/';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {}

  sendAdditionalUserInfo(form: any, user: any): Observable<any> {
    return this.http.post(BACKEND_API + 'user/' + user.id + '/info', form, httpOptions);
  }

  getUserById(id: number): Observable<any>{
    return this.http.get(BACKEND_API + 'user/' + id);
  }

  getSuggestionsByObject(menuObject: any): Observable<any> {
    return this.http.get(BACKEND_API + 'object/' + menuObject.id + '/suggestions');
  }
  addSuggestion(form: any, objectId: string): Observable<any>{
    return this.http.post(BACKEND_API + 'object/' + objectId + '/suggestion', form);
  }
  addSuggestionAndObject(form: any): Observable<any>{
    return this.http.post(BACKEND_API + 'suggestion', form);
  }
  deleteSuggestion(suggestionId: number): Observable<any>{
    return this.http.delete(BACKEND_API + 'suggestion/' + suggestionId);
  }
  getOrdersByClientId(clientId: number): Observable<string>{
    return this.http.get<string>(BACKEND_API + 'user/' + clientId + '/orders');
  }

  deleteOrder(orderId: number): Observable<any> {
    return this.http.delete(BACKEND_API + 'order/' + orderId);
  }
  addOrder(suggestionId: number): Observable<any> {
    return this.http.post(BACKEND_API + 'order', suggestionId);
  }
  getObjectsByTypeId(typeId: string): Observable<any>{
    return this.http.get( BACKEND_API + 'objects/type/' + typeId);
  }
  getTypeById(typeId: string): Observable<any>{
    return this.http.get( BACKEND_API + 'type/' + typeId);
  }
  getObjectById(objectId: string): Observable<any>{
    return this.http.get(BACKEND_API + 'object/' + objectId);
  }
  getTypes(): Observable<any>{
    return this.http.get( BACKEND_API + 'types');
  }
}
