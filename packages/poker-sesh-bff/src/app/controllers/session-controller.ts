import { Controller, Get, Inject } from '@nestjs/common';
import {
  ISessionRepository,
  SESSION_REPOSITORY
} from '../../domain/repository/session-repository';
import { HEALTHY, UNHEALTHY } from '../constants/health-constants';

@Controller()
export class SessionController {
  constructor(
    @Inject(SESSION_REPOSITORY)
    private readonly _sessionRepository: ISessionRepository
  ) {}

  @Get('/health')
  async getHello(): Promise<string> {
    const isHealthy = await this._sessionRepository.getHealth();
    return isHealthy ? HEALTHY : UNHEALTHY;
  }
}
