import { IsString, IsNumber } from 'class-validator';

  /* 1. 읽기 전용
     2. 사람들이movie를 만들기 위해서 필요한 것들을 나열할 예정 
   프로그래머로서 코드를 더 간결하게 만들어준다, NestJS가 들어오는 쿼리에 대해 유효성을 검사해 준다.
  */
 
  export class CreateMovieDto {
    @IsString()
    readonly title: string;
  
    @IsNumber()
    readonly year: number;
  
    @IsString({ each: true })
    readonly genres: string[];
  }