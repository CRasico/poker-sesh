/* istanbul ignore file */
import { promisify } from 'util';
import { IHealthClient } from '../protocol-buffers/health_grpc_pb';
import { HealthRequest, HealthResponse } from '../protocol-buffers/health_pb';
import { IGameManagerProxy } from './game-manager-proxy';

export class GrpcGameManagerProxy implements IGameManagerProxy {
  constructor(private healthClient: IHealthClient) {}

  checkHealth(healthRequest: HealthRequest): Promise<HealthResponse> {
    return promisify<HealthRequest, HealthResponse>(
      this.healthClient.check.bind(this.healthClient)
    )(healthRequest);
  }
}
