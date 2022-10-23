import { Controller, Get, Inject } from '@nestjs/common';
import {
  ISessionRepository,
  SESSION_REPOSITORY
} from '../../domain/repository/session-repository';

@Controller()
export class SessionController {
  constructor(
    @Inject(SESSION_REPOSITORY)
    private readonly _sessionRepository: ISessionRepository
  ) {}
}
