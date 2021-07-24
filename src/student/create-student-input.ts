import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(3)
  @IsString()
  @Field()
  firstName: string;

  @MinLength(3)
  @IsString()
  @Field()
  lastName: string;
}
