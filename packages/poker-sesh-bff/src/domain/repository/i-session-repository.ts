export const SESSION_REPOSITORY = "SESSION_REPOSITORY";

export interface ISessionRepository {
  getHealth(): Promise<boolean>;
}
