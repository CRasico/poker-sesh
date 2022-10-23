import { HealthRequest, HealthResponse } from "../protocol-buffers/health_pb";

export interface IChatManagerProxy {
  checkHealth(healthRequest: HealthRequest): Promise<HealthResponse>;
}
