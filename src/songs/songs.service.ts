import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [
    {
      id: 1,
      title: 'Song 1',
      artist: 'Artist 1',
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
    },
    {
      id: 3,
      title: 'Song 3',
      artist: 'Artist 3',
    },
  ];

  create(song: song) {
    //TODO: Save the song in the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    //TODO: Fetch all songs from the database
    return this.songs;
  }
}
