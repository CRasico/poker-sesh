// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var hello_pb = require('./hello_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hello_Hello(arg) {
  if (!(arg instanceof hello_pb.Hello)) {
    throw new Error('Expected argument of type hello.Hello');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hello_Hello(buffer_arg) {
  return hello_pb.Hello.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hello_Reply(arg) {
  if (!(arg instanceof hello_pb.Reply)) {
    throw new Error('Expected argument of type hello.Reply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hello_Reply(buffer_arg) {
  return hello_pb.Reply.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloServiceService = exports.HelloServiceService = {
  getHello: {
    path: '/hello.HelloService/GetHello',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: hello_pb.Hello,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_hello_Hello,
    responseDeserialize: deserialize_hello_Hello,
  },
  addReply: {
    path: '/hello.HelloService/AddReply',
    requestStream: true,
    responseStream: true,
    requestType: hello_pb.Reply,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_hello_Reply,
    requestDeserialize: deserialize_hello_Reply,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.HelloServiceClient = grpc.makeGenericClientConstructor(HelloServiceService);
