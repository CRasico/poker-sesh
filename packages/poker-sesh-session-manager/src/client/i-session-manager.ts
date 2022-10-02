import { HealthRequest, HealthResponse } from "../protocol-buffers/health_pb";

export interface ISessionManager {
	checkHealth(healthRequest: HealthRequest): Promise<HealthResponse>; 
}
