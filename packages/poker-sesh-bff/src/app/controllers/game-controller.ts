import { Controller, Get, Inject } from '@nestjs/common';
import {
  GAME_REPOSITORY,
  IGameRepository
} from '../../domain/repository/game-repository';
import { HEALTHY, UNHEALTHY } from '../constants/health-constants';

@Controller()
export class GameController {
  constructor(
    @Inject(GAME_REPOSITORY)
    private readonly _gameRepsository: IGameRepository
  ) {}

  @Get('/health')
  async getHealth(): Promise<string> {
    const isHealthy = await this._gameRepsository.getHealth();
    return isHealthy ? HEALTHY : UNHEALTHY;
  }
}
