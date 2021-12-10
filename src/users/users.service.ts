import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {

  private readonly users = [
    {id: 1, username: 'sakorn', password: 'not-secure'},
    {id: 2, username: 'moontha', password: 'not-secure'},
  ];

  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1
    }
    this.users.push(user);
    return user;
  }

  findAll() {
    //return `This action returns all users`;
    return this.users;
  }

  findOne(name: string) {
    //return `This action returns a #${id} user`;
    return this.users.find(user => user.username === name);
  }

 
}
