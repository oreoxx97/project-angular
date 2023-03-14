import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
})
export class ChildTwoComponent implements OnInit {

  @Input() inputDataForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.inputDataForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      date: ['', Validators.required],
      age: [''],
      gender: ['', Validators.required],
      tel: [''],
    });

    this.inputDataForm.setValue({
      name: '',
      lastname: '',
      date: '',
      age: '',
      gender: '',
      tel: '',
    });
  }
}
