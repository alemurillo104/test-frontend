import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ClientResponse } from './../../../../core/models/client.response.model';
import { ProblemTwoService } from './../../../../core/services/problem-two.service';
import { StatusResponse } from '../../../../core/utils/enums/status.enum';

@Component({
  selector: 'app-problem-two',
  templateUrl: './problem-two.component.html',
  styleUrls: ['./problem-two.component.css']
})
export class ProblemTwoComponent implements OnInit {
  constructor(
    private service: ProblemTwoService
  ) { }

  stringField = new FormControl('');
  StatusResponse = StatusResponse;
  statusResponse: StatusResponse = StatusResponse.initial;
  actualString : string = '';
  response: ClientResponse = { ok: false, data: { max: 0, list: [] } };

  ngOnInit(): void {
    this.stringField.valueChanges
      .subscribe(console.log);
  }

  calculate() {
    if (this.stringField != null && this.stringField.value != null) {
      this.statusResponse = StatusResponse.loading;
      this.actualString = this.stringField.value!;
      this.service.calculate({
        "cadena": this.stringField.value!
      })
        .subscribe(
          res => {
            console.log(res)
            this.stringField.setValue("");
            this.response = res;
            this.statusResponse = (this.response.ok)
              ? StatusResponse.success
              : StatusResponse.error;
          }
        );
    }
  }

  clear(){
    this.statusResponse = StatusResponse.initial;
    this.stringField.setValue("");
  }

  onInputChange(){
    this.statusResponse = StatusResponse.initial;
  }
}
