import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }
  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (error) {
      throw new HttpException(
        'An error occurred while fetching',
        HttpStatus.FORBIDDEN,{
          cause: error,
        }
      );
    }
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
