import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { HealthRequest, HealthResponse, IHealthServer } from 'poker-sesh-grpc';

export class HealthServer implements IHealthServer {
  [name: string]: import('@grpc/grpc-js').UntypedHandleCall;
  public check(
    call: ServerUnaryCall<HealthRequest, HealthResponse>,
    callback: sendUnaryData<HealthResponse>
  ): void {
    const callingService = call.request.getService();

    console.info('game manager health for {service}', callingService);

    const response = new HealthResponse();
    response.setStatus(HealthResponse.HealthStatus.HEALTHY);
    callback(null, response);
  }
}
