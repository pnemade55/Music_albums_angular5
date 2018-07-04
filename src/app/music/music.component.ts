import { Component, OnInit  } from '@angular/core';
import { MusicService } from './music.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})

export class MusicComponent implements OnInit {
  musics: any[];
  imageWidth: 50;
  showAlbum: Boolean = false;

  constructor (private _musicService: MusicService ) {}

  ngOnInit(): void {
    this.musics = this._musicService.getMusic();
  }

  toggleAlbums(): void {
    this.showAlbum = !this.showAlbum;
  }

}



