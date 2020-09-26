import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { digits } from '../validators/digits.validator';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit, OnDestroy {
  @Output() add: EventEmitter<Omit<User, 'id'>> = new EventEmitter<Omit<User, 'id'>>();

  public userForm: FormGroup;

  private unsubscribe$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, digits]),
      email: new FormControl('', [Validators.required])
    });

    this.userForm.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onAddUserClick(): void {
    const isFormValid: boolean = this.userForm.valid;
    if (isFormValid) {
      this.add.emit(this.userForm.value);
      this.userForm.reset();
    }
  }
}
