import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { MusicService } from './music/music.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MusicComponent
  ],
  bootstrap: [AppComponent
  ],

  providers: [
    MusicService
  ]
})
export class AppModule { }
