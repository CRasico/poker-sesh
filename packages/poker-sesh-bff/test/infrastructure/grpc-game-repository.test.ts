import { GrpcGameRepository } from '../../src/infrastructure/repository/grpc-game-repository';
import {
  HealthRequest,
  HealthResponse,
  IGameManagerProxy
} from 'poker-sesh-grpc';
import * as TypeMoq from 'typemoq';

describe('grpc chat repository test', () => {
  const gameManager = TypeMoq.Mock.ofType<IGameManagerProxy>();
  const serviceName = 'random-service-name';

  const getGrpcGameRepository = () =>
    new GrpcGameRepository(gameManager.object, serviceName);

  test('constructs chat repository successfully', () => {
    const grpcChatRepository = new GrpcGameRepository(
      gameManager.object,
      serviceName
    );

    expect(grpcChatRepository).toBeInstanceOf(GrpcGameRepository);
  });

  test('chat repository heathy response returns true', async () => {
    const grpcChatRepository = getGrpcGameRepository();

    const healthResponse = new HealthResponse();
    healthResponse.setStatus(HealthResponse.HealthStatus.HEALTHY);
    gameManager
      .setup((chat) => chat.checkHealth(TypeMoq.It.isAnyObject(HealthRequest)))
      .returns(() => Promise.resolve(healthResponse));

    const response = await grpcChatRepository.getHealth();
    expect(response).toBeTruthy();
  });

  test('chat repository unheathy response returns true', async () => {
    const grpcChatRepository = getGrpcGameRepository();

    const healthResponse = new HealthResponse();
    healthResponse.setStatus(HealthResponse.HealthStatus.UNHEALTHY);
    gameManager
      .setup((chat) => chat.checkHealth(TypeMoq.It.isAnyObject(HealthRequest)))
      .returns(() => Promise.resolve(healthResponse));

    const response = await grpcChatRepository.getHealth();
    expect(response).toBeFalsy();
  });
});
