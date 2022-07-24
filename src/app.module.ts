import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';


@Module({
  imports: [],
  controllers: [MoviesController],
  // controllers는 url을 가져오고 함수를 실행한다.
  providers: [],
})
export class AppModule {}
