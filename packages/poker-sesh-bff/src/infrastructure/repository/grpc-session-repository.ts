import { ISessionRepository } from '../../domain/repository/i-session-repository';
import { Inject, Injectable } from '@nestjs/common';
import { SERVICE_NAME } from '../../app/constants/service-constants';
import { ISessionManagerProxy, HealthRequest, HealthResponse } from 'poker-sesh-grpc';

export const SESSION_MANAGER_PROXY = 'SESSION_MANAGER_PROXY';

@Injectable()
export class GrpcSessionRepository implements ISessionRepository {
  constructor(
    @Inject(SESSION_MANAGER_PROXY)
	private readonly _sessionHealthClient: ISessionManagerProxy,
    @Inject(SERVICE_NAME) 
	private readonly _serviceName: string
  ) {}

  async getHealth(): Promise<boolean> {
    const healthRequest = new HealthRequest();
    healthRequest.setService(this._serviceName);

    const healthResponse = await this._sessionHealthClient.checkHealth(
      healthRequest
    );

    const healthResponseObj = healthResponse.toObject();
    if (healthResponseObj.status !== HealthResponse.HealthStatus.HEALTHY) {
      return false;
    }

    return true;
  }
}
