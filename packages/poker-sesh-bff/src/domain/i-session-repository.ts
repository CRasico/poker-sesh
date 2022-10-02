export interface ISessionRepository {
  getHealth(): Promise<boolean>;
}
