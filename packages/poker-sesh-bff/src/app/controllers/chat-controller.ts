import { Controller, Get, Inject } from '@nestjs/common';
import {
  CHAT_REPOSITORY,
  IChatRepository
} from '../../domain/repository/chat-manager-proxy';
import { HEALTHY, UNHEALTHY } from '../constants/health-constants';

@Controller()
export class ChatController {
  constructor(
    @Inject(CHAT_REPOSITORY)
    private readonly _chatRepository: IChatRepository
  ) {}

  @Get('/health')
  async getHealth(): Promise<string> {
    const isHealthy = await this._chatRepository.getHealth();
    return isHealthy ? HEALTHY : UNHEALTHY;
  }
}
