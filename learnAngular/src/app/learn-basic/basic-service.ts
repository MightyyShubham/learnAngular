import { HttpClient } from '@angular/common/http';
import { Injectable,Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
    private apiUrl='test.json';
constructor(private http:HttpClient){
}

getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
}
}
interface User {
  id: number;
  name: string;
  city: string;
}