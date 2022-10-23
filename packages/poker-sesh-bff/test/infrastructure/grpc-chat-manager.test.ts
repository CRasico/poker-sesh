import { GrpcChatRepository } from '../../src/infrastructure/repository/grpc-chat-repository';
import {
  HealthRequest,
  HealthResponse,
  IChatManagerProxy
} from 'poker-sesh-grpc';
import * as TypeMoq from 'typemoq';

describe('grpc chat repository test', () => {
  const chatManager = TypeMoq.Mock.ofType<IChatManagerProxy>();
  const serviceName = 'random-service-name';

  const getGrpcChatRepository = () =>
    new GrpcChatRepository(chatManager.object, serviceName);

  test('constructs chat repository successfully', () => {
    const grpcChatRepository = new GrpcChatRepository(
      chatManager.object,
      serviceName
    );

    expect(grpcChatRepository).toBeInstanceOf(GrpcChatRepository);
  });

  test('chat repository heathy response returns true', async () => {
    const grpcChatRepository = getGrpcChatRepository();

    const healthResponse = new HealthResponse();
    healthResponse.setStatus(HealthResponse.HealthStatus.HEALTHY);
    chatManager
      .setup((chat) => chat.checkHealth(TypeMoq.It.isAnyObject(HealthRequest)))
      .returns(() => Promise.resolve(healthResponse));

    const response = await grpcChatRepository.getHealth();
    expect(response).toBeTruthy();
  });

  test('chat repository unheathy response returns true', async () => {
    const grpcChatRepository = getGrpcChatRepository();

    const healthResponse = new HealthResponse();
    healthResponse.setStatus(HealthResponse.HealthStatus.UNHEALTHY);
    chatManager
      .setup((chat) => chat.checkHealth(TypeMoq.It.isAnyObject(HealthRequest)))
      .returns(() => Promise.resolve(healthResponse));

    const response = await grpcChatRepository.getHealth();
    expect(response).toBeFalsy();
  });
});
