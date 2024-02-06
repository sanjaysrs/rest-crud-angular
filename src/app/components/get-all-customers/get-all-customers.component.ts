import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrl: './get-all-customers.component.css'
})
export class GetAllCustomersComponent implements OnInit{

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}
  
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(res => this.customers = res);
  }

  deleteCustomer(id: string) {
    this.customerService.deleteCustomer(id).subscribe(() => this.customers.splice(this.customers.findIndex(c => c.id === id), 1));
    
  }

}
