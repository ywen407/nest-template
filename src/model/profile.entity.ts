import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  profileID: number; //fk
  @Column()
  username: string;
  @Column()
  gender: string;
  @Column()
  thumbnail: string;
  @UpdateDateColumn()
  profileUpdate: Date;
}
