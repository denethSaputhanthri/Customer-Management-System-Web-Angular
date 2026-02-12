import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

interface Customer {
  name:string;
  email:string;
  phone:string;
}

@Component({
  selector: 'app-customer-manage',
  imports: [FormsModule,CommonModule],
  templateUrl: './customer-manage.html',
  styleUrl: './customer-manage.css',
})
export class CustomerManage {
  customer: Customer[]=[];

  customers: Customer={
    name:'',
    email:'',
    phone:'',
  };

  addCustomer(){
    this.customer.push(this.customers)
    this.customers={
      name:'',
      email:'',
      phone:'',
    }
    console.log(this.customers);
    
  }
}
