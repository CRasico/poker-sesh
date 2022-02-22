// package: hello
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as hello_pb from "./hello_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IHelloServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHello: IHelloServiceService_IGetHello;
    addReply: IHelloServiceService_IAddReply;
}

interface IHelloServiceService_IGetHello extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, hello_pb.Hello> {
    path: "/hello.HelloService/GetHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<hello_pb.Hello>;
    responseDeserialize: grpc.deserialize<hello_pb.Hello>;
}
interface IHelloServiceService_IAddReply extends grpc.MethodDefinition<hello_pb.Reply, google_protobuf_empty_pb.Empty> {
    path: "/hello.HelloService/AddReply";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<hello_pb.Reply>;
    requestDeserialize: grpc.deserialize<hello_pb.Reply>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const HelloServiceService: IHelloServiceService;

export interface IHelloServiceServer {
    getHello: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, hello_pb.Hello>;
    addReply: grpc.handleBidiStreamingCall<hello_pb.Reply, google_protobuf_empty_pb.Empty>;
}

export interface IHelloServiceClient {
    getHello(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: hello_pb.Hello) => void): grpc.ClientUnaryCall;
    getHello(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.Hello) => void): grpc.ClientUnaryCall;
    getHello(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.Hello) => void): grpc.ClientUnaryCall;
    addReply(): grpc.ClientDuplexStream<hello_pb.Reply, google_protobuf_empty_pb.Empty>;
    addReply(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<hello_pb.Reply, google_protobuf_empty_pb.Empty>;
    addReply(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<hello_pb.Reply, google_protobuf_empty_pb.Empty>;
}

export class HelloServiceClient extends grpc.Client implements IHelloServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getHello(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: hello_pb.Hello) => void): grpc.ClientUnaryCall;
    public getHello(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.Hello) => void): grpc.ClientUnaryCall;
    public getHello(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.Hello) => void): grpc.ClientUnaryCall;
    public addReply(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<hello_pb.Reply, google_protobuf_empty_pb.Empty>;
    public addReply(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<hello_pb.Reply, google_protobuf_empty_pb.Empty>;
}
