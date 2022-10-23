import { promisify } from 'util';
import { IHealthClient } from '../protocol-buffers/health_grpc_pb';
import { HealthRequest, HealthResponse } from '../protocol-buffers/health_pb';
import { IChatManagerProxy } from './chat-manager-proxy';

/* istanbul ignore file */
export class GrpcChatManagerProxy implements IChatManagerProxy {
  constructor(private healthClient: IHealthClient) {}

  checkHealth(healthRequest: HealthRequest): Promise<HealthResponse> {
    return promisify<HealthRequest, HealthResponse>(
      this.healthClient.check.bind(this.healthClient)
    )(healthRequest);
  }
}
