// package: grpc.health.v1
// file: health.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';

export class HealthRequest extends jspb.Message {
  getService(): string;
  setService(value: string): HealthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: HealthRequest
  ): HealthRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: HealthRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): HealthRequest;
  static deserializeBinaryFromReader(
    message: HealthRequest,
    reader: jspb.BinaryReader
  ): HealthRequest;
}

export namespace HealthRequest {
  export type AsObject = {
    service: string;
  };
}

export class HealthResponse extends jspb.Message {
  getStatus(): HealthResponse.HealthStatus;
  setStatus(value: HealthResponse.HealthStatus): HealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: HealthResponse
  ): HealthResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: HealthResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): HealthResponse;
  static deserializeBinaryFromReader(
    message: HealthResponse,
    reader: jspb.BinaryReader
  ): HealthResponse;
}

export namespace HealthResponse {
  export type AsObject = {
    status: HealthResponse.HealthStatus;
  };

  export enum HealthStatus {
    UNKNOWN = 0,
    HEALTHY = 1,
    DEGRADED = 2,
    UNHEALTHY = 3
  }
}
