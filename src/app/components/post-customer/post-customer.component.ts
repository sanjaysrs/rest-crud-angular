import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrl: './post-customer.component.css'
})
export class PostCustomerComponent implements OnInit{

  postCustomerForm: FormGroup = new FormGroup({});
  
  constructor(private customerService: CustomerService, private formBuilder: FormBuilder, private router: Router) {}
  
  ngOnInit(): void {
    this.postCustomerForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required]]
    })
  }

  postCustomer() {
    console.log('hi');
    if(this.postCustomerForm.invalid) return;
    console.log('hello');
    console.log(this.postCustomerForm.value);
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe();
    this.router.navigateByUrl("/")
  }

}
