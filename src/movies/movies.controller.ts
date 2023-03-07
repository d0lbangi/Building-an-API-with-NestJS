import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';

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
  @Get('search')
  //search부분이 get보다 밑에 있으면 NestJS는 search를 id로 판단한다.
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }
  // id가 위에서 2번째에 위치하면 다른 get들은 작동하지 않는다.
  @Get('/:id')
  getOne(@Param('id') MovieId: string) {
    return `This will return one movies the id: ${MovieId}`;
  }
  @Post()
  // 아래 Decorator는 movieData안의 리퀘스트의 body를 가져오기 위해 쓴 것이다.
  create(@Body() movieData) {
    return movieData;
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }
  // @Put은 모든 리소스를 업데이트 한다.
  // @Patch는 리소스의 일부분만 업데이트 해준다.
  @Patch('/:id')
  // 필요한 parameter를 직접 요청하지 않으면, 아무것도 제공되지 않는다.
  patch(@Param('id') movieId: string, @Body() updateData) {
    // 업데이트할 movie의 id랑 우리가 보낼 데이터의 오브젝트를 리턴할 것이다.
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
