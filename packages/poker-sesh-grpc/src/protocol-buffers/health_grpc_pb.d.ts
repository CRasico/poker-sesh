// package: grpc.health.v1
// file: health.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from '@grpc/grpc-js';
import * as health_pb from './health_pb';

interface IHealthService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  check: IHealthService_ICheck;
}

interface IHealthService_ICheck
  extends grpc.MethodDefinition<
    health_pb.HealthRequest,
    health_pb.HealthResponse
  > {
  path: '/grpc.health.v1.Health/Check';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<health_pb.HealthRequest>;
  requestDeserialize: grpc.deserialize<health_pb.HealthRequest>;
  responseSerialize: grpc.serialize<health_pb.HealthResponse>;
  responseDeserialize: grpc.deserialize<health_pb.HealthResponse>;
}

export const HealthService: IHealthService;

export interface IHealthServer extends grpc.UntypedServiceImplementation {
  check: grpc.handleUnaryCall<
    health_pb.HealthRequest,
    health_pb.HealthResponse
  >;
}

export interface IHealthClient {
  check(
    request: health_pb.HealthRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: health_pb.HealthResponse
    ) => void
  ): grpc.ClientUnaryCall;
  check(
    request: health_pb.HealthRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: health_pb.HealthResponse
    ) => void
  ): grpc.ClientUnaryCall;
  check(
    request: health_pb.HealthRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: health_pb.HealthResponse
    ) => void
  ): grpc.ClientUnaryCall;
}

export class HealthClient extends grpc.Client implements IHealthClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public check(
    request: health_pb.HealthRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: health_pb.HealthResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public check(
    request: health_pb.HealthRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: health_pb.HealthResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public check(
    request: health_pb.HealthRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: health_pb.HealthResponse
    ) => void
  ): grpc.ClientUnaryCall;
}
