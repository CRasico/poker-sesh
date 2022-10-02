// NOTE: used to ignore code coverage as this is just a proxy to help with promisifying 
// grpc requests

/* istanbul ignore file */
import { promisify } from 'util';
import { IHealthClient } from '../protocol-buffers/health_grpc_pb';
import { HealthRequest, HealthResponse } from "../protocol-buffers/health_pb";
import { ISessionManager } from "./i-session-manager";

export class GrpcSessionManager implements ISessionManager {
   	constructor(private healthClient: IHealthClient) {}

	checkHealth(healthRequest: HealthRequest): Promise<HealthResponse> {
		return promisify<HealthRequest, HealthResponse>(
			this.healthClient.check.bind(this.healthClient)
		)(healthRequest);
	}
}