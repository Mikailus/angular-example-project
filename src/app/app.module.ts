import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BigLettersPipe } from './big-letters.pipe';
import { UserComponent } from './user/user.component';
import { BgGreenDirective } from './bg-green.directive';
import { BgMouseoverDirective } from './bg-mouseover.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BigLettersPipe,
    UserComponent,
    BgGreenDirective,
    BgMouseoverDirective,
    NewUserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
