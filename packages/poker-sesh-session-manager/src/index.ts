import { Server, ServerCredentials } from '@grpc/grpc-js';
import { HealthService } from './protocol-buffers/health_grpc_pb';
import { HealthServer } from './server/health';

const port: string | number = process.env.port || 50051;
const server: Server = new Server();

// @ts-ignore
server.addService(HealthService, new HealthServer());

server.bindAsync(
  `localhost:${port}`,
  ServerCredentials.createInsecure(),
  (error: Error | null, port: number) => {
    if (error) {
      console.error('an issue occured starting up the server {error}', error);
    }
    console.log('started server {port}', port);
    server.start();
  }
);
