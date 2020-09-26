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
import { MainPathGuard } from './main-path.guard';
import { UsersResolver } from './users.resolver';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [MainPathGuard], resolve: { users: UsersResolver} },
  { path: 'posts', component: PostsComponent, canActivate: [MainPathGuard] },
  { path: 'comments', component: CommentsComponent, canActivate: [MainPathGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: '**', redirectTo: 'users' }
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
    NavigationComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsersResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
