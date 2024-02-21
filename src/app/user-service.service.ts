import { EnvironmentInjector, Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  apiURL = environment.apiURL
  _payload : any[]=[]

  constructor(private http : HttpClient) {
   }

   login(_payload:any):Observable<any>{
    return this.http.post(`${this.apiURL}/login`,_payload)
   }
   signUp(_payload:any):Observable<any>{
    return this.http.post(`${this.apiURL}/signup`,_payload)
   }
   save_user_responses(_payload:any):Observable<any>{
    return this.http.post(`${this.apiURL}/save_user_responses`,_payload)
   }
   get_personality_questions(){
    return this.http.get(`${this.apiURL}/get_personality_questions`)
   }
   calculate_scores(id:any){
    return this.http.get(`${this.apiURL}/calculate_scores/${id}`)
   }
   getQuestionsByUserID(id:any){
    return this.http.get(`${this.apiURL}/get_user_responses/${id}`)
   }

}
