import { promisify } from 'util';
import { ISessionRepository } from "../../domain/i-session-repository";
import { IHealthClient } from "../../../../poker-sesh-session-manager/src/protocol-buffers/health_grpc_pb"
import { HealthRequest, HealthResponse } from "../../../../poker-sesh-session-manager/src/protocol-buffers/health_pb"; 

export class GrpcSessionRepository implements ISessionRepository {
	constructor(
		private sessionHealthClient: IHealthClient,
		private serviceName: string) {
	}
	
    async getHealth(): Promise<boolean> {
		const healthRequest = new HealthRequest();
		healthRequest.setService(this.serviceName);

		const healthResponse = await promisify<HealthRequest, HealthResponse>(
			this.sessionHealthClient.check.bind(this.sessionHealthClient)
		)(healthRequest);

		const healthResponseObj = healthResponse.toObject();
		if (healthResponseObj.status !== HealthResponse.HealthStatus.HEALTHY) {
			return false;
		}
			
		return true;
    }
}
