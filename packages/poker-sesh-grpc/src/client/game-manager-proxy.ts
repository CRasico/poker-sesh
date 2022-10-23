import { HealthRequest, HealthResponse } from "../protocol-buffers/health_pb";

export interface IGameManagerProxy {
  checkHealth(healthRequest: HealthRequest): Promise<HealthResponse>;
}
