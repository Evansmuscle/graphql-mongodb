import { Field } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
