import express from "express";
import { credentials } from "../../poker-sesh-session-manager/node_modules/@grpc/grpc-js";
import { HealthClient } from "../../poker-sesh-session-manager/src/protocol-buffers/health_grpc_pb";
import { GrpcSessionRepository } from "./infrastructure/repository/grpc-session-repository";
import { ISessionRepository } from "./domain/i-session-repository";

const app = express();
const port = 8080;
const appName = "poker-sesh-bff";

const sessionRepository: ISessionRepository = new GrpcSessionRepository(
	new HealthClient(
		'localhost:50051',
		credentials.createInsecure()),
	appName
);

app.get( "/", (_, res) => {
	res.send("Hello World");
});

app.get("/session/health", async (_, res) => {
	const sessionHealth = await sessionRepository.getHealth();
	res.send(`Status: ${sessionHealth}`);
});

app.listen(port, () => {
	console.info(`poker-sesh-bff listening on port: ${port}`);  
});
