import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  dataForm:FormGroup;

  receiveDataForm(data:FormGroup){
    console.log('data' , data.value )
    this.dataForm = data
  }
}