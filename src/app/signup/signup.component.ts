import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = {
    id: 1,
    name: 'Max Muster',
    password: '123'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
