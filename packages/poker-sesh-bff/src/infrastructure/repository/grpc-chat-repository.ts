import { Inject, Injectable } from '@nestjs/common';
import { SERVICE_NAME } from '../../app/constants/service-constants';
import { HealthRequest, HealthResponse, IChatManagerProxy } from 'poker-sesh-grpc';
import { IChatRepository } from '../../domain/repository/chat-manager-proxy';

export const CHAT_MANAGER_PROXY = 'CHAT_MANAGER_PROXY';

@Injectable()
export class GrpcChatRepository implements IChatRepository {
  constructor(
    @Inject(CHAT_MANAGER_PROXY)
    private readonly _chatManagerProxy: IChatManagerProxy,
    @Inject(SERVICE_NAME)
    private readonly _serviceName: string
  ) {}

  async getHealth(): Promise<boolean> {
    const healthRequest = new HealthRequest();
    healthRequest.setService(this._serviceName);

    const healthResponse = await this._chatManagerProxy.checkHealth(healthRequest);

    const healthResponseObj = healthResponse.toObject();
    if (healthResponseObj.status !== HealthResponse.HealthStatus.HEALTHY) {
      return false;
    }
    return true;
  }
}
