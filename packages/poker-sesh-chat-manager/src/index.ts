import { Server, ServerCredentials } from "@grpc/grpc-js";

const port: string | number = process.env.port || 50053;
const server: Server = new Server();

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
