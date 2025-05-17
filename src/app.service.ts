import { Injectable } from '@nestjs/common';
import { user } from './users/infrastructure/schema/users.schema';


@Injectable()
export class AppService {
  getHello(to: user): string {
    return `Hello World! how are you ${to.username}?`;
  }
}