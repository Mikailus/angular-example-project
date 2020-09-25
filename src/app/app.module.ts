import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BigLettersPipe } from './big-letters.pipe';
import { UserComponent } from './user/user.component';
import { BgGreenDirective } from './bg-green.directive';
import { BgMouseoverDirective } from './bg-mouseover.directive';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'comments', component: CommentsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BigLettersPipe,
    UserComponent,
    BgGreenDirective,
    BgMouseoverDirective,
    NewUserFormComponent,
    PostsComponent,
    CommentsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
