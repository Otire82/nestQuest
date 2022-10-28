import { Injectable } from '@nestjs/common';

import { User1 } from 'src/entities/user.model';

@Injectable()
export class FilterService {
  /**
   *Return a list of users filtered by name
   * @param users users to filter
   * @param name name to filter by
   * @returns filtered users
   */
  filterUsers(users: User1[], name: string): User1[] {
    return users.filter((item: User1) => item.name === name);
  }
}
