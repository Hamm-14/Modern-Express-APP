import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", unique: true })
  email!: string;

  @Column({ type: "varchar" })
  firstName: string;

  @Column({ type: "varchar" })
  lastName: string;

  @Column({ type: "int" })
  age: number;

  constructor(email: string, firstName: string, lastName: string, age: number) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
