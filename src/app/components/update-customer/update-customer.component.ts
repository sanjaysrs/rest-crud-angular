import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit{

  updateForm: FormGroup = new FormGroup({});
  customer: Customer | null = null; 
  id: string = this.activatedRoute.snapshot.params['id'];

  constructor(private activatedRoute: ActivatedRoute, 
    private customerService: CustomerService, 
    private formBuilder: FormBuilder,
    private router: Router) {}
  
  ngOnInit(): void {

    this.updateForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required]
    })

    this.customerService.getCustomerById(this.id).subscribe(res => {
      this.customer = res;
      this.updateForm.patchValue(res);
    });
    
  }

  onSubmit() {
    let customer = this.updateForm.value;
    this.customerService.updateCustomer(customer, this.id).subscribe(res => {
      console.log(res);
      if(res.id !== null)
      this.router.navigateByUrl("");
    });
  }

}
