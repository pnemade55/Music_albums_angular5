import { Injectable} from '@angular/core';
import { Music } from './music.model';

@Injectable()

export class MusicService {
  getMusic(): any[] {
    return[
      {
        id: 1,
        name: 'Kishore Kumar',
        cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Kishore-Kumar_0.jpg/220px-Kishore-Kumar_0.jpg',
        bio: 'Kishore Kumar was an Indian playback singer, actor, lyricist, composer, producer, director, and screenwriter.',
        genre: 'Film music',
        albums: [
            {
              albumId: 'a1',
              title: 'Mr. X in Bombay',
              year: 1968,
              cover: 'Mere Mehboob Qayamat Hogi',
              price: 5
            },
            {
              albumId: 'a2',
              title: 'Aradhana',
              year: 1970,
              cover: 'Roop Tera Mastana',
              price: 3
            },
            {
              albumId: 'a3',
              title: 'Julie',
              year: 1985,
              cover: 'Dil Kya Kare',
              price: 7
            },
            {
              albumId: 'a4',
              title: 'Satte Pe Satta',
              year: 1968,
              cover: 'Dilbar Mere',
              price: 2
            },
        ]
      },
      {
        id: 2,
        name: 'A R Rehman',
        cover: 'http://media2.intoday.in/indiatoday/images/stories/2015January/rahman-story-650_010615103436.jpg',
        bio: 'A. R. Rahman, is an Indian composer, singer-songwriter, and music producer. ',
        genre: 'electronic, dance, classical',
        albums: [
            {
              albumId: 'a1',
              title: 'Vande Mataram',
              year: 1997,
              cover: 'Vande Mataram',
              price: 1
            },
            {
              albumId: 'a1',
              title: 'Slumdog Millionaire',
              year: 2008,
              cover: 'Jai ho',
              price: 5
            },
          ],
        },
        {
          id: 3,
          name: 'Arijit Singh',
          cover: 'https://i.pinimg.com/736x/11/5a/61/115a61452f11ec35f40da15f0d32729e--arijit-singh-photos-hd-photos.jpg',
          bio: 'He sings predominantly in Hindi and Bengali, but has also lent his voice to various other Indian languages',
          genre: 'Classical, gazhal, Pop',
          albums: [
              {
                albumId: 'a1',
                title: 'Aashiqui 2',
                year: 2013,
                cover: 'Tum hi ho',
                price: 3
              },
              {
                albumId: 'a1',
                title: 'Dilwale',
                year: 2017,
                cover: 'Janam Janam',
                price: 4
              },
            ],
          }
     ];
  }
}
