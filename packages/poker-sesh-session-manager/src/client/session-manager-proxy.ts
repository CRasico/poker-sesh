import { HealthRequest, HealthResponse } from '../protocol-buffers/health_pb';

export interface ISessionManagerProxy {
  checkHealth(healthRequest: HealthRequest): Promise<HealthResponse>;
}
