import { promisify } from 'util';
import { ISessionRepository } from '../../domain/i-session-repository';
import {
  HealthRequest,
  HealthResponse
} from '../../../../poker-sesh-session-manager/src/protocol-buffers/health_pb';
import { ISessionManager } from '../../../../poker-sesh-session-manager/src/client/i-session-manager';

export class GrpcSessionRepository implements ISessionRepository {
  constructor(
    private sessionHealthClient: ISessionManager,
    private serviceName: string
  ) {}

  async getHealth(): Promise<boolean> {
    const healthRequest = new HealthRequest();
    healthRequest.setService(this.serviceName);

	const healthResponse = await this.sessionHealthClient.checkHealth(healthRequest);


    const healthResponseObj = healthResponse.toObject();
    if (healthResponseObj.status !== HealthResponse.HealthStatus.HEALTHY) {
      return false;
    }

    return true;
  }
}
