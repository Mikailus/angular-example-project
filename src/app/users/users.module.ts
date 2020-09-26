import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { UserComponent } from '../user/user.component';
import { UsersToolbarComponent } from '../users-toolbar/users-toolbar.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { NewUserFormComponent } from '../new-user-form/new-user-form.component';
import { BigLettersPipe } from '../pipes/big-letters.pipe';
import { BgGreenDirective } from '../directives/bg-green.directive';
import { BgMouseoverDirective } from '../directives/bg-mouseover.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UsersToolbarComponent,
    UserDetailsComponent,
    NewUserFormComponent,

    BigLettersPipe,
    BgGreenDirective,
    BgMouseoverDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ]
})
export class UsersModule { }
