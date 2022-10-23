export const GAME_REPOSITORY = 'GAME_REPOSITORY';

export interface IGameRepository {
  getHealth(): Promise<boolean>;
}
