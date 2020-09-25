import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[] = null;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe((users: User[]) => this.users = users);
  }

  public onUserDelete(id: number): void {
    this.usersService.deleteUser(id)
      .subscribe(() => {
        this.users = this.users.filter(user => user.id !== id);
      });
  }

  public onEditUser(editedUser: User): void {
    const editedUserIndex: number = this.users.findIndex(user => user.id === editedUser.id);
    this.users[editedUserIndex] = editedUser;
  }

  public onAddUser(user: Omit<User, 'id'>): void {
    const id: number = Math.random() * 1000;
    this.users.push({
      ...user,
      id
    });
  }

}
