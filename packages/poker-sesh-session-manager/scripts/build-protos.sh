#!/bin/bash

BASEDIR=$(dirname "$0")
GEN_PROTOCOL_BUFFER_DEST=./src/protocol-buffers

cd ${BASEDIR}/../
mkdir -p ${PROTO_DEST}

# JavaScript code generation
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${GEN_PROTOCOL_BUFFER_DEST} \
    --grpc_out=${GEN_PROTOCOL_BUFFER_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./protocol-buffers \
    protocol-buffers/*.proto

# TypeScript code generation
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${GEN_PROTOCOL_BUFFER_DEST} \
    -I ./protocol-buffers \
    protocol-buffers/*.proto