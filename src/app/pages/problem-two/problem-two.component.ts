import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ClientResponse } from '../../models/client.response.model';

@Component({
  selector: 'app-problem-two',
  templateUrl: './problem-two.component.html',
  styleUrls: ['./problem-two.component.css']
})
export class ProblemTwoComponent implements OnInit {

  env = 'http://localhost:8000/api/problem-2/index';
  constructor(
    private http: HttpClient
  ) { }

  stringField = new FormControl('');
  success: boolean = false;
  response: ClientResponse = { ok: false, data: { max: 0, list: []} };

  ngOnInit(): void {
    this.stringField.valueChanges
      .subscribe(val => {
        console.log(val);
      });
  }

  calculate() {
    if (this.stringField != null && this.stringField.value != null) {

      this.http.get<ClientResponse>(this.env, {
        params: new HttpParams().set('cadena', this.stringField.value!)
      })
        .subscribe(
          res => {
            console.log(res)
            this.success = res.ok;
            this.response = res;
          }
        );
    }
  }

}
