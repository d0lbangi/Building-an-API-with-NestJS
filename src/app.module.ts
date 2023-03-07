import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

// 해당 함수는 데코레이터라고 부른다. 이는 클래스에 함수 기능을 추가할 수 있다.
// 클래스 위의 함수이고, 클래스를 위해 움직인다.
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
