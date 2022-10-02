import { ISessionRepository } from '../../domain/i-session-repository';
import {
  HealthRequest,
  HealthResponse
} from '../../../../poker-sesh-session-manager/src/protocol-buffers/health_pb';
import { ISessionManagerProxy } from '../../../../poker-sesh-session-manager/src/client/session-manager-proxy';

export class GrpcSessionRepository implements ISessionRepository {
  constructor(
    private sessionHealthClient: ISessionManagerProxy,
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
