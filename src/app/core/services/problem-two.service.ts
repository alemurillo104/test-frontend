import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StringRequest } from '../models/string.request.model';
import { ClientResponse } from '../models/client.response.model';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProblemTwoService {

  constructor(
    private http: HttpClient
  ) { }

  calculate( data: StringRequest ){
    return this.http.post<ClientResponse>(`${environment.url_api}/problem-2/index`, data);
  }
}
