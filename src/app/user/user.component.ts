import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  public onDeleteClick(): void {
    this.delete.emit(this.user.id);
  }
}
