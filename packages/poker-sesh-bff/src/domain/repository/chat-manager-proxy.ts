export const CHAT_REPOSITORY = 'CHAT_REPOSITORY';

export interface IChatRepository {
  getHealth(): Promise<boolean>;
}
