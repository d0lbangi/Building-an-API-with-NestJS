import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

// 해당 함수는 데코레이터라고 부른다. 이는 클래스에 함수 기능을 추가할 수 있다.
// 클래스 위의 함수이고, 클래스를 위해 움직인다.
/* app.module은 AppController랑 AppProvider만 가지고 있어야 한다. 
   그래서, MoviesService랑 MoviesController를 movies.module로 옮길 것이다. 왜냐하면 NestJS에서 여러 개의 모듈로 구성된다. 
*/

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
