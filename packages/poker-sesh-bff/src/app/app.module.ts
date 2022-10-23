import { Module } from '@nestjs/common';
import { credentials } from '@grpc/grpc-js';
import { SessionController } from './controllers/session-controller';
import {
  GrpcSessionRepository,
  SESSION_MANAGER_PROXY
} from '../infrastructure/repository/grpc-session-repository';
import {
  SERVICE_NAME,
  SERVICE_NAME_VALUE
} from './constants/service-constants';
import {
  GrpcChatManagerProxy,
  GrpcGameManagerProxy,
  GrpcSessionManagerProxy,
  HealthClient
} from 'poker-sesh-grpc';
import { CHAT_REPOSITORY } from '../domain/repository/chat-manager-proxy';
import {
  CHAT_MANAGER_PROXY,
  GrpcChatRepository
} from '../infrastructure/repository/grpc-chat-repository';
import {
  GAME_MANAGER_PROXY,
  GrpcGameRepository
} from '../infrastructure/repository/grpc-game-repository';
import { GAME_REPOSITORY } from '../domain/repository/game-repository';
import { SESSION_REPOSITORY } from '../domain/repository/session-repository';
import { GameController } from './controllers/game-controller';
import { ChatController } from './controllers/chat-controller';
import { HealthController } from './controllers/health-controller';

const sessionManagerProxy = new GrpcSessionManagerProxy(
  new HealthClient('localhost:50051', credentials.createInsecure())
);
const gameManagerProxy = new GrpcGameManagerProxy(
  new HealthClient('localhost:50052', credentials.createInsecure())
);
const chatManagerProxy = new GrpcChatManagerProxy(
  new HealthClient('localhost:50053', credentials.createInsecure())
);

@Module({
  imports: [],
  controllers: [
    HealthController,
    SessionController,
    GameController,
    ChatController
  ],
  providers: [
    {
      provide: SERVICE_NAME,
      useValue: SERVICE_NAME_VALUE
    },
    {
      provide: SESSION_REPOSITORY,
      useClass: GrpcSessionRepository
    },
    {
      provide: SESSION_MANAGER_PROXY,
      useValue: sessionManagerProxy
    },
    {
      provide: GAME_REPOSITORY,
      useClass: GrpcGameRepository
    },
    {
      provide: GAME_MANAGER_PROXY,
      useValue: gameManagerProxy
    },
    {
      provide: CHAT_REPOSITORY,
      useClass: GrpcChatRepository
    },
    {
      provide: CHAT_MANAGER_PROXY,
      useValue: chatManagerProxy
    }
  ]
})
export class AppModule {}
