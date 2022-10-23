import { Controller, Get, Inject } from '@nestjs/common';
import {
  CHAT_REPOSITORY,
  IChatRepository
} from '../../domain/repository/chat-manager-proxy';

@Controller()
export class ChatController {
  constructor(
    @Inject(CHAT_REPOSITORY)
    private readonly _chatRepository: IChatRepository
  ) {}
}
