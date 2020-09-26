import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[] = null;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.route.snapshot.data.users;
  }

  public onUserDelete(id: number): void {
    this.usersService.deleteUser(id)
      .subscribe(() => {
        this.users = this.users.filter(user => user.id !== id);
      });
  }

  public onEditUser(editedUser: User): void {
    this.usersService.editUser(editedUser.id, {
      name: editedUser.name,
      phone: editedUser.phone,
      email: editedUser.email
    }).subscribe((editedUserResponse: User) => {
      const editedUserIndex: number = this.users.findIndex(user => user.id === editedUserResponse.id);
      this.users[editedUserIndex] = editedUserResponse;
    });
  }

  public onAddUser(user: Omit<User, 'id'>): void {
    const id: number = Math.random() * 1000 + 10;
    this.usersService.createUser(user)
      .subscribe((user: User) => {
        this.users.push({
          ...user,
          id
        });
      });
  }

}
