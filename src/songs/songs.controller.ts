import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create({
      id: 4,
      title: 'Song 4',
      artist: 'Artist 4',
    });
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns a song endpoint';
  }

  @Put(':id')
  update(): string {
    return 'This action updates a song endpoint';
  }

  @Delete(':id')
  remove(): string {
    return 'This action removes a song endpoint';
  }
}
