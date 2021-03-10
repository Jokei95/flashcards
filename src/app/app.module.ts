import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TopicsComponent } from './topics/topics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StackComponent } from './stack/stack.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoginComponent,
    SignupComponent,
    TopicsComponent,
    PageNotFoundComponent,
    StackComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
