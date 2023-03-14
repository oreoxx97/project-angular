import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      date: ['', Validators.required],
      age: [''],
      gender: ['', Validators.required],
      tel: [''],
    });

    this.myForm.valueChanges.subscribe((val) => {
      this.onFormChanges(val);
    });
  }

  calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    console.log('dayDiff', dayDiff);
    return `${age} ปี ${monthDiff} เดือน ${dayDiff} วัน`;
  }

  onFormChanges(values: any) {
    if (values.date !== '') {
      let age = this.calculateAge(values.date);
      this.myForm.get('age').patchValue(age, { emitEvent: false });
    }
  }

  @Output() outputData = new EventEmitter<string>();
  @Output() outputDataForm = new EventEmitter<FormGroup>();



  sendDataForm() {
    this.outputDataForm.emit(this.myForm);
  }
}
