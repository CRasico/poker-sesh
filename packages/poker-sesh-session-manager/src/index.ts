import { Server } from "grpc";
import { IHelloServiceServer } from "./protocol-buffers/hello_grpc_pb";

const server = new Server();