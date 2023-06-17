import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClientResponse } from './../../../../core/models/client.response.model';
import { ProblemTwoService } from './../../../../core/services/problem-two.service';
import { StatusResponse } from '../../../../core/utils/enums/status.enum';
import { InputValidator } from 'src/app/core/utils/validators/input.validator';

@Component({
  selector: 'app-problem-two',
  templateUrl: './problem-two.component.html',
  styleUrls: ['./problem-two.component.css']
})
export class ProblemTwoComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProblemTwoService
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.myForm = this.formBuilder.group({
      textString: [
        '', [
          Validators.required,
          InputValidator.isEmpty,
          Validators.pattern('^[a-zA-Z ]*$'),
          Validators.minLength(1),
          Validators.maxLength(100000)
        ]
      ]
    });
  }

  get stringField() {
    return this.myForm.get('textString');
  }

  setStringField(data: string) {
    this.myForm.setValue({ 'textString': data.trim() });
  }

  StatusResponse = StatusResponse;
  statusResponse: StatusResponse = StatusResponse.initial;
  actualString: string = '';
  response: ClientResponse = { ok: false, data: { max: 0, list: [] } };

  ngOnInit(): void {
    this.stringField?.valueChanges
      .subscribe(console.log);
  }

  calculate() {
    if (this.myForm.valid) {
      this.statusResponse = StatusResponse.loading;
      this.actualString = this.stringField?.value.replace(/\s/g, "");
      this.service.calculate({
        "stringText": this.actualString
      })
        .subscribe(
          res => {
            console.log(res)
            this.setStringField("");
            this.response = res;
            this.statusResponse = (this.response.ok)
              ? StatusResponse.success
              : StatusResponse.error;
          }
        );
    }
  }

  clear() {
    this.statusResponse = StatusResponse.initial;
    this.setStringField("");
  }

  onInputChange() {
    this.statusResponse = StatusResponse.initial;
  }
}
