import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinksComponent } from './links/links.component';
import { LinksService } from './shared/links.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBoE63_A8EuiFhCx0Q_3WkNIe4iVqrun-w",
      authDomain: "ablinks-4e960.firebaseapp.com",
      databaseURL: "https://ablinks-4e960.firebaseio.com",
      projectId: "ablinks-4e960",
      messagingSenderId: "154062695240"
    }),
    AngularFireDatabaseModule,
  ],
  providers: [LinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
