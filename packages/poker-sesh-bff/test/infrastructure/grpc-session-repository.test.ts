import { HealthRequest, HealthResponse, ISessionManagerProxy } from 'poker-sesh-grpc';
import * as TypeMoq from 'typemoq';
import { GrpcSessionRepository } from '../../src/infrastructure/repository/grpc-session-repository';

describe('grpc session repository test', () => {
  const sessionManager = TypeMoq.Mock.ofType<ISessionManagerProxy>();
  const serviceName = 'random-service-name';

  test('constructs repository successfully', () => {
    const grpcSessionRepository = new GrpcSessionRepository(
      sessionManager.object,
      serviceName
    );

    expect(grpcSessionRepository).toBeInstanceOf(GrpcSessionRepository);
  });

  test('getHealth valid health response returns true', async () => {
    const grpcSessionRepository = new GrpcSessionRepository(
      sessionManager.object,
      serviceName
    );

    const healthResponse = new HealthResponse();
    healthResponse.setStatus(HealthResponse.HealthStatus.HEALTHY);
    sessionManager
      .setup((session) =>
        session.checkHealth(TypeMoq.It.isAnyObject(HealthRequest))
      )
      .returns(() => Promise.resolve(healthResponse));

    const result = await grpcSessionRepository.getHealth();
    expect(result).toBeTruthy();
  });

  test('getHealth invalid health response returns false', async () => {
    const grpcSessionRepository = new GrpcSessionRepository(
      sessionManager.object,
      serviceName
    );

    const healthResponse = new HealthResponse();
    healthResponse.setStatus(HealthResponse.HealthStatus.UNHEALTHY);
    sessionManager
      .setup((session) =>
        session.checkHealth(TypeMoq.It.isAnyObject(HealthRequest))
      )
      .returns(() => Promise.resolve(healthResponse));

    const result = await grpcSessionRepository.getHealth();
    expect(result).toBeFalsy();
  });
});
