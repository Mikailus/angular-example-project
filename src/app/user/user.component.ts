import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  @Input() user: User;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  public isInEditMode: boolean = false;
  public userForm: FormGroup;

  private unsubscribe$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name),
      phone: new FormControl(this.user.phone),
      email: new FormControl(this.user.email)
    });

    this.userForm.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onDeleteClick(): void {
    this.delete.emit(this.user.id);
  }

  public onEditClick(): void {
    this.isInEditMode = !this.isInEditMode;
  }
}
