import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[] = [
    { id: 1, name: 'Jan', phone: 123321123, email: 'jan@jan.com' },
    { id: 2, name: 'Maria', phone: 455645564, email: 'maria@maria.com' },
    { id: 3, name: 'Ola', phone: 78998987, email: 'ola@ola.com' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
