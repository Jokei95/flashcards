import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TopicsComponent } from './topics/topics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StackComponent } from './stack/stack.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [
  //{path: '', component: TopicsComponent},
  {path: 'topic', component: TopicsComponent},
  {path: 'topic/:id', component: TopicsComponent},
  {path: 'stack/:id', component: StackComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  //{path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
  {path: '', redirectTo: '/topic', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }