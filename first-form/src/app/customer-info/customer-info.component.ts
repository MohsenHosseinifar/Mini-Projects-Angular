import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css'],
})
export class CustomerInfoComponent implements OnInit {
  costumerForm: FormGroup;
  constructor(private fb:FormBuilder) {}
  ngOnInit(): void {
    this.costumerForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('',[Validators.maxLength(12),Validators.minLength(2)]),
      customercode: new FormControl('', [Validators.required,Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      
      
    }); 
  }
  save(){
    if(this.costumerForm.invalid){
     alert("invalidform")
     return
    }
  console.log(this.costumerForm.value)
  alert("save form ")
  }
}
