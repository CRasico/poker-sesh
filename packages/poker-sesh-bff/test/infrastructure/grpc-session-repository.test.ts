import * as TypeMoq from 'typemoq';
import { IHealthClient } from '../../../poker-sesh-session-manager/src/protocol-buffers/health_grpc_pb';
import { HealthResponse } from '../../../poker-sesh-session-manager/src/protocol-buffers/health_pb';
import { GrpcSessionRepository } from '../../src/infrastructure/repository/grpc-session-repository';

describe('grpc session repository test', () => {
	const mockHealthClient = TypeMoq.Mock.ofType<IHealthClient>();
	const serviceName = 'random-service-name';

	function getGrpcSessionRepository(): GrpcSessionRepository {
		return new GrpcSessionRepository(
			mockHealthClient.object,
			serviceName);
	}
 
	test('constructs repository successfully', () => {
		const grpcSessionRepository = new GrpcSessionRepository(
			mockHealthClient.object,
			serviceName);

		expect(grpcSessionRepository).toBeInstanceOf(GrpcSessionRepository);
	})

	test('getHealth successfully', async () => {
		const grpcSessionRepository = getGrpcSessionRepository();

		const healthResponse = new HealthResponse();
		healthResponse.setStatus(HealthResponse.HealthStatus.HEALTHY);
		
		mockHealthClient 
			.setup(client => client.check(TypeMoq.It.isAny(), TypeMoq.It.isAny()))
			.returns(() => healthResponse as any);

		await grpcSessionRepository.getHealth();
	})
})
