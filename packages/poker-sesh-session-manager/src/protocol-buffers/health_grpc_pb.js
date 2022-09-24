// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var health_pb = require('./health_pb.js');

function serialize_grpc_health_v1_HealthRequest(arg) {
  if (!(arg instanceof health_pb.HealthRequest)) {
    throw new Error('Expected argument of type grpc.health.v1.HealthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_health_v1_HealthRequest(buffer_arg) {
  return health_pb.HealthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_health_v1_HealthResponse(arg) {
  if (!(arg instanceof health_pb.HealthResponse)) {
    throw new Error('Expected argument of type grpc.health.v1.HealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_health_v1_HealthResponse(buffer_arg) {
  return health_pb.HealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

var HealthService = (exports.HealthService = {
  check: {
    path: '/grpc.health.v1.Health/Check',
    requestStream: false,
    responseStream: false,
    requestType: health_pb.HealthRequest,
    responseType: health_pb.HealthResponse,
    requestSerialize: serialize_grpc_health_v1_HealthRequest,
    requestDeserialize: deserialize_grpc_health_v1_HealthRequest,
    responseSerialize: serialize_grpc_health_v1_HealthResponse,
    responseDeserialize: deserialize_grpc_health_v1_HealthResponse
  }
});

exports.HealthClient = grpc.makeGenericClientConstructor(HealthService);
