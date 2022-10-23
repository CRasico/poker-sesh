import { Controller, Get, Inject } from '@nestjs/common';
import {
  CHAT_REPOSITORY,
  IChatRepository
} from '../../domain/repository/chat-manager-proxy';
import {
  GAME_REPOSITORY,
  IGameRepository
} from '../../domain/repository/game-repository';
import {
  ISessionRepository,
  SESSION_REPOSITORY
} from '../../domain/repository/session-repository';

@Controller()
export class HealthController {
  constructor(
    @Inject(SESSION_REPOSITORY)
    private readonly _sessionRepository: ISessionRepository,
    @Inject(CHAT_REPOSITORY)
    private readonly _chatRepository: IChatRepository,
    @Inject(GAME_REPOSITORY)
    private readonly _gameRepository: IGameRepository
  ) {}

  @Get('/health')
  async getHealth(): Promise<HealthStatus[]> {
    const healthStatusTasks = [
      this.createHealthStatusAsync(
        SESSION_REPOSITORY,
        this._sessionRepository.getHealth()
      ),
      this.createHealthStatusAsync(
        CHAT_REPOSITORY,
        this._chatRepository.getHealth()
      ),
      this.createHealthStatusAsync(
        GAME_REPOSITORY,
        this._gameRepository.getHealth()
      )
    ];

    const healthStatuses = await Promise.all(healthStatusTasks);

    return healthStatuses;
  }

  private async createHealthStatusAsync(
    serviceName: string,
    healthPromise: Promise<boolean>
  ): Promise<HealthStatus> {
    return new HealthStatus(serviceName, await healthPromise);
  }
}

class HealthStatus {
  constructor(public dependencyName: string, public isHealthy: boolean) {}
}
