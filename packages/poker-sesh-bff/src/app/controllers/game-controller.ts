import { Controller, Get, Inject } from '@nestjs/common';
import {
  GAME_REPOSITORY,
  IGameRepository
} from '../../domain/repository/game-repository';

@Controller()
export class GameController {
  constructor(
    @Inject(GAME_REPOSITORY)
    private readonly _gameRepsository: IGameRepository
  ) {}
}
