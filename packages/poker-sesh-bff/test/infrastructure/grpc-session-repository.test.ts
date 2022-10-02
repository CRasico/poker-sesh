import * as TypeMoq from 'typemoq';
import { ISessionManagerProxy } from '../../../poker-sesh-session-manager/src/client/session-manager-proxy';
import { HealthRequest, HealthResponse } from '../../../poker-sesh-session-manager/src/protocol-buffers/health_pb';
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

  test('getHealth valid health response successful', async () => {
	const grpcSessionRepository = new GrpcSessionRepository(
		sessionManager.object,
		serviceName);

	const healthResponse = new HealthResponse();
	healthResponse.setStatus(HealthResponse.HealthStatus.HEALTHY);
	sessionManager
		.setup(session => session.checkHealth(TypeMoq.It.isAnyObject(HealthRequest)))
		.returns(() => Promise.resolve(healthResponse));

	const result = await grpcSessionRepository.getHealth();
	expect(result).toBeTruthy();
  });
});
