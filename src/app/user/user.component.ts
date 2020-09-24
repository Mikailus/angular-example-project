import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
