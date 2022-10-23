import { Inject, Injectable } from '@nestjs/common';
import { HealthRequest, HealthResponse, IGameManagerProxy } from 'poker-sesh-grpc';
import { SERVICE_NAME } from '../../app/constants/service-constants';
import { IGameRepository } from '../../domain/repository/game-repository';

export const GAME_MANAGER_PROXY = 'GAME_MANAGER_PROXY';

@Injectable()
export class GrpcGameRepository implements IGameRepository {
  constructor(
    @Inject(GAME_MANAGER_PROXY)
    private readonly _gameManagerProxy: IGameManagerProxy,
    @Inject(SERVICE_NAME)
    private readonly _serviceName: string
  ){}

  async getHealth(): Promise<boolean> {
    const healthRequest = new HealthRequest();
    healthRequest.setService(this._serviceName);

    const healthResponse = await this._gameManagerProxy.checkHealth(
      healthRequest
    ); 

    const healthResponseObj = healthResponse.toObject();
    if (healthResponseObj.status !== HealthResponse.HealthStatus.HEALTHY) {
      return false;
    }
    return true;
  }
}
