import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { IHealthServer } from "../protocol-buffers/health_grpc_pb";
import { HealthRequest, HealthResponse } from "../protocol-buffers/health_pb";

// @ts-ignore: ignoring used type
export class HealthServer implements IHealthServer {	
	public check(
	  call: ServerUnaryCall<HealthRequest, HealthResponse>,
	  callback: sendUnaryData<HealthResponse> 
	): void {
		const service = call.request.getService();

		// TODO: add some form of injectable logger to work with here.
    	console.info('session manager health for {service}', service);
		// TODO: set some logic to determine which service to check.
		const response: HealthResponse = new HealthResponse();
		response.setStatus(HealthResponse.HealthStatus.HEALTHY);
		callback(null, response);
	}
}
