import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private readonly apiUrl = 'http://localhost:3000/persons';
  constructor(private http: HttpClient) { }

  signUp(person: any): Observable<any> {
    return this.http.post(this.apiUrl, person);
  }

  
  getProfile(id: any): Observable<Person> {
    return this.http.get(this.apiUrl+"/"+id)as Observable<Person>;
  }
}
