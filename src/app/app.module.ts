import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BigLettersPipe } from './big-letters.pipe';
import { UserComponent } from './user/user.component';
import { BgGreenDirective } from './bg-green.directive';
import { BgMouseoverDirective } from './bg-mouseover.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BigLettersPipe,
    UserComponent,
    BgGreenDirective,
    BgMouseoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
