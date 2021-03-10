import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //items = this.loginService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    password: ''
  });
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    ) {}

  onSubmit(): void {
    // Process checkout data here
    //this.items = this.loginService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
