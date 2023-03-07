import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

@Controller('movies')
// 컨트롤러의 이름이 뭐냐고 물었을 때 입력한 이름의 값이 특별하게 취급된다.
// 'movies' 부분이 컨트롤러를 위한 url을 만든다. 라우터이다.
// @Controller()부분이 url의 Entry Point(엔트리 포인트)를 컨트롤한다.
export class MoviesController {
  @Get()
  // express.js 어플리케이션을 쓸 때의 그 라우터들이 된다.
  getAll() {
    return `This will return all movies`;
  }
  @Get('/:id')
  getOne(@Param('id') MovieId: string) {
    return `This will return one movies the id: ${MovieId}`;
  }
  @Post()
  create() {
    return `This will create a movie`;
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }
  // @Put은 모든 리소스를 업데이트 한다.
  // @Patch는 리소스의 일부분만 업데이트 해준다.
  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
