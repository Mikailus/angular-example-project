import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPathGuard } from './services/main-path.guard';
import { UsersResolver } from './services/users.resolver';
import { LoadingComponent } from './loading/loading.component';
import { PostsToolbarComponent } from './posts-toolbar/posts-toolbar.component';
import { CommentsToolbarComponent } from './comments-toolbar/comments-toolbar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsResolver } from './services/user-details.resolver';
import { UsersToolbarComponent } from './users-toolbar/users-toolbar.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [MainPathGuard],
    resolve: { users: UsersResolver},
    children: [
      { path: ':userId', component: UserDetailsComponent, resolve: { userDetails: UserDetailsResolver } }
    ]
  },
  { path: 'posts', component: PostsComponent, canActivate: [MainPathGuard] },
  { path: 'comments', component: CommentsComponent, canActivate: [MainPathGuard] },
  { path: 'users', component: UsersToolbarComponent, outlet: 'side' },
  { path: 'posts', component: PostsToolbarComponent, outlet: 'side' },
  { path: 'comments', component: CommentsToolbarComponent, outlet: 'side' },
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    NavigationComponent,
    LoadingComponent,
    PostsToolbarComponent,
    CommentsToolbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    UsersModule
  ],
  providers: [
    UsersResolver,
    UserDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
