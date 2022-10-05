import { Module } from "@nestjs/common";
import { credentials } from '@grpc/grpc-js';
import { SessionController } from "./controllers/session-controller";
import { SESSION_REPOSITORY } from "../domain/repository/i-session-repository";
import { GrpcSessionRepository, SESSION_MANAGER_PROXY } from "../infrastructure/repository/grpc-session-repository";
import { SERVICE_NAME, SERVICE_NAME_VALUE } from "./constants/service-constants";
import { GrpcSessionManagerProxy } from '../../../poker-sesh-session-manager/src/client/grpc-session-manager-proxy';
import { HealthClient } from "../../../poker-sesh-session-manager/src/protocol-buffers/health_grpc_pb";

const sessionManagerProxy = new GrpcSessionManagerProxy(
	new HealthClient('localhost:50051', credentials.createInsecure())
);

@Module({
	imports: [],
	controllers: [SessionController],
	providers: [
		{
			provide: SERVICE_NAME,
			useValue: SERVICE_NAME_VALUE
		},
		{
			provide: SESSION_REPOSITORY,
			useClass: GrpcSessionRepository
		},
		{
			provide: SESSION_MANAGER_PROXY,
			useExisting: sessionManagerProxy
		}
	]
})
export class AppModule {}
