import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeditateService {

  constructor(private http:HttpClient) {}
  meditate(){
   return this.http.get("http://localhost:3000/Meditations")
  }
  sleep(){
    return this.http.get("http://localhost:3000/sleep")
  }
  melodies(){
    return this.http.get("http://localhost:3000/melodies")
  }
}
