import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private readonly usersService: UsersService) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request = context.switchToHttp().getRequest();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const { userId } = request.session || {};

    if (userId) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const user = await this.usersService.findOne(userId);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      request.currentUser = user;
    }

    return next.handle();
  }
}
